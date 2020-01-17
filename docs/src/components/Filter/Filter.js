import React from "react";
import "./Filter.css";

const Filter = props => 
<div className="pure-g center">
<div className="filter l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-1">{props.children}</div>;
</div>

export default Filter;