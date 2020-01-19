import React, { Component } from 'react';

export default class BarComponent extends Component {
  render () {
    const { fill, height, width, x, y } = this.props;
    return (
      <svg>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
      />
      </svg>
    );
  }
}