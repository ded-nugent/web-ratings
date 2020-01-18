import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"
export default () => (
  <div className="splash-container">
    <h3 class="postedSites-title">Standard Examples:</h3>
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

    <h3 class="postedSites-title">Animated Examples:</h3>
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