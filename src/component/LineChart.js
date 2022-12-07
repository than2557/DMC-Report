import React from "react";
import { Line } from "react-chartjs-2";


function LineChart({options, chartData }) {
    
  return <Line  options={options} data={chartData}/>;
}

export default LineChart;