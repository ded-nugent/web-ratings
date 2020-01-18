import React, { Component } from 'react';
// import BarComponent from './BarComponent';
import * as d3 from "d3";
import "./BarChart.css";

export default class BarChart extends Component {
    // var d3 = Object.assign({}, require("d3-scale"));

  let dataTsv1 = [
"www.google.com",
"www.youtube.com",
"www.facebook.com",
"www.reddit.com",
"www.amazon.com",
"www.wikipedia.org",
"www.yahoo.com",
"www.twitter.com",
"www.ebay.com",
"www.netflix.com",
"www.imgur.com",
"www.ntd.tv",
"www.linkedin.com",
"www.instagram.com",
"www.craigslist.org",
"www.diply.com",
"www.live.com",
"www.twitch.tv",
"www.microsoftonline.com",
"www.office.com",
"www.tumblr.com",
"www.pinterest.com",
"www.t.co",
"www.pornhub.com",
"www.cnn.com",
"www.bing.com",
"www.espn.com",
"www.livejasmin.com",
"www.wikia.com",
"www.imdb.com",
"www.nytimes.com",
"www.chase.com",
"www.paypal.com",
"www.uptrend.com",
"www.blogspot.com",
"www.apple.com",
"www.yelp.com",
"www.microsoft.com",
"www.bankofamerica.com",
"www.wordpress.com",
"www.washingtonpost.com",
"www.xvideos.com",
"www.walmart.com",
"www.stackoverflow.com",
"www.zillow.com",
"www.github.com",
"www.buzzfeed.com",
"www.wellsfargo.com",
"www.msn.com",
"www.weather.com"
  ];

 let dataTsv2 = [
518108189,
506457282,
270071255,
60614015,
48820414,
118921355,
99572035,
64764259,
17678892,
32886501,
22975273,
163932,
31156540,
47854006,
7322375,
940284,
56576433,
23056401,
18620670,
19946361,
17475782,
18282270,
27315629,
23049255,
10624920,
22430345,
7469337,
6386123,
13209144,
16539221,
10267583,
5291401,
12930906,
18442,
20450624,
15494191,
4311991,
26567811,
3249887,
24736274,
6663628,
14858061,
3943841,
18173611,
3280025,
15422916,
6125527,
3135235,
22403678,
4366222,
  ];

  drawChart() {
    const width = 800;
    const height = 450;
    const el = new Element('div');
    const svg = d3.select(el)
        .append('svg')
        .attr('id', 'chart')
        .attr('width', width)
        .attr('height', height);

        return el.toReact();

  }

  render () {

      return this.drawChart();

  }
}