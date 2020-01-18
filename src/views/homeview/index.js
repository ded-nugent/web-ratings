import React from 'react';
import { Link } from 'react-router-dom';
export default () => (
  <div className="App-intro">
    <h3>Standard Examples:</h3>
    <ul>
      <li>
        <Link to="/bar-chart">Bar Chart</Link>
      </li>
      <li>
        <Link to="/donut-chart">Donut Chart</Link>
      </li>
      <li>
        <Link to="/multi-series-line-chart">Multi-Series Line Chart</Link>
      </li>
    </ul>

    <h3>Animated Examples:</h3>
    <ul>
      <li>
        <Link to="/bar-chart/animated">Bar Chart</Link>
      </li>
      <li>
        <Link to="/multi-series-line-chart/animated">
          Multi-Series Line Chart
        </Link>
      </li>
    </ul>
  </div>
);