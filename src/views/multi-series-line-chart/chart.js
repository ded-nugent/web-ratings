import React from 'react';
import { scaleOrdinal, scaleLinear, scaleTime } from 'd3-scale';
import { tsvParse } from 'd3-dsv';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { timeParse } from 'd3-time-format';
import { line as d3Line, curveBasis } from 'd3-shape';
import { min, max, extent } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

// Same as data.tsv
import dataTsv from './data';

import './chart.css';

const svgWidth = 960,
  svgHeight = 500;

//Note: getting width and height from a variable rather than the elements attribute e.g. svg.attr("width")
let margin = { top: 20, right: 80, bottom: 30, left: 50 },
  width = svgWidth - margin.left - margin.right,
  height = svgHeight - margin.top - margin.bottom;

const parseTime = timeParse('%Y%m%d');

let x = scaleTime().range([0, width]),
  y = scaleLinear().range([height, 40]),
  z = scaleOrdinal(schemeCategory10);

const line = d3Line()
  .curve(curveBasis)
  .x(d => x(d.date))
  .y(d => y(d.webtraffic));

const data = tsvParse(dataTsv, (d, _, columns) => {
  d.date = parseTime(d.date);
  for (let i = 1, n = columns.length, c; i < n; ++i)
    d[(c = columns[i])] = +d[c];
  return d;
});

const cities = data.columns.slice(1).map(id => {
  return {
    id,
    values: data.map(d => {
      return { date: d.date, webtraffic: d[id] };
    }),
  };
});

x.domain(extent(data, d => d.date));

y.domain([
  min(cities, c => min(c.values, d => d.webtraffic)),
  max(cities, c => max(c.values, d => d.webtraffic)),
]);

z.domain(cities.map(c => c.id));

export default () => (
  <svg width={svgWidth} height={svgHeight}>
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      <g
        className="axis axis--x"
        transform={`translate(0, ${height})`}
        ref={node => select(node).call(axisBottom(x))}
      />
      <g className="axis axis--y" ref={node => select(node).call(axisLeft(y))}>
        <text id="legend" transform="rotate(-90)" dy="1em" dx="-9em" fill="#000">
          Web Traffic ,(billion per month)
        </text>
      </g>
      {cities.map(website => {
        const [lastD] = website.values.slice(-1);
        return (
          <g className="website" key={website.id}>
            <path
              className="line"
              d={line(website.values)}
              style={{ stroke: z(website.id) }}
            />
            <text
              transform={`translate(${x(lastD.date)}, ${y(lastD.webtraffic)})`}
              x={3}
              dy="0.35em"
              style={{ font: '10px sans-serif' }}
            >
              {website.id}
            </text>
          </g>
        );
      })}
    </g>
  </svg>
);