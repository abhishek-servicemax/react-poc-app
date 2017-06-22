import React, { Component } from 'react';
import * as d3 from "d3";
import ReactFauxDOM from 'react-faux-dom';

//class BarChart extends Component {

export const BarChart = (props) =>  {
 /* constructor(props){
    super(props);
    console.log(props.data);
    this.state = {
      data:props.data
    }
  }*/
  
  const defaultProps = {
    height: 500,
    width: 500,
    chartBg:'#f4f4f4',
    barColor:'steelBlue',
    barWidth: 40,
    barOffset: 5
  }

  

    const chart = ReactFauxDOM.createElement('div');

    d3.select(chart).append('svg')
      .attr('width',defaultProps.width)
      .attr('height', defaultProps.height)
      .style('background',defaultProps.chartBg)
      .selectAll('rect')
      .data(props.data)
      .enter().append('rect')
        .style('fill', defaultProps.barColor)
        .attr('width', defaultProps.barWidth)
        .attr('height', (d) => {
          return d;
        })
        .attr('x', (d, i) => {
          return i * (defaultProps.barWidth + defaultProps.barOffset);
        })
        .attr('y', (d) => {
          return defaultProps.height - d;
        })
    return chart.toReact();
  
}

export default BarChart;
