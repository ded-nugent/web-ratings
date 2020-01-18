import React from 'react';
// import { scaleOrdinal } from 'd3-scale';
import { arc as d3Arc} from 'd3-shape';
import { csvParse } from 'd3-dsv';
import * as d3 from 'd3';

// Same as data.csv
import dataCsv from './data';

import './chart.css';

var width = 960,
  height = 600,
  radius = Math.min(width, height) / 2;

// const color = scaleOrdinal().range([
//   '#98abc5',
//   '#8a89a6',
//   '#7b6888',
//   '#6b486b',
//   '#a05d56',
//   '#d0743c',
//   '#ff8c00',
// ]);

var color = d3.scaleOrdinal(d3.schemeCategory10);


var arc = d3Arc()
  .outerRadius(radius - 11)
  .innerRadius(radius - 110);

// var arc = d3.arc()
// .outerRadius(radius - 0)
// .innerRadius(0);

// var pie = d3Pie()
//   .sort(null)
//   .value(function(d) {
//     return d.population;
//   });

  var pie = d3.pie()
      .sort(null)
      .value(function(d) {
        return d.population;
      });

  var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

let data = pie(
  csvParse(dataCsv, d => {
    d.population = +d.population;
    return d;
  })
);

var names = ["Google","B","C","D","E","F","G"];

var arcs = svg.selectAll(".arc")
.data(pie(dataCsv))
.enter().append("g")
.attr("class", "arc");

arcs.append("path")
.attr("d", arc)
.style("fill", function(d,i) {
  return color(i);
})
.on("mouseover", function(d, i) {
    console.log(d);
    d3.select(".focus").style("display", null);
      svg.append("text")
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .style("font-size", 45)
      .attr("class","label")
      .style("fill", function(d,i){return "black";})
      .text(names[i]);
      console.log(names[i]);
    
})
.on("mouseout", function(d) {
  svg.select(".label").remove();
});


export default () => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {data.map(d => (
          <g className="arc" key={`a${d.data.website}`}>
            <path d={arc(d)} fill={color(d.data.website)} />
            <text transform={`translate(${arc.centroid(d)})`} dy=".05em">
              {d.data.website}
            </text>
            <text transform={`translate(${arc.centroid(d)})`} dy="1em">
              {d.data.population}
            </text>
            <text id="pieTitle">Top 7 Websites in the US</text>
            <text id="pieTitle2" dy="2em" >Based of Avg Daily Visitors</text>
          </g>
        ))}
      </g>
    </svg>
   
    
  );
};