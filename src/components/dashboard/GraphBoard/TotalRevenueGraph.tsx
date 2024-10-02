"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { totalRevenueGraphData, totalRevenueGraphOptions } from "./GraphBoardData";

const TotalRevenueGraph = () => {
  //element registration
  Chart.register(...registerables);
  return (
    <Line
      data={totalRevenueGraphData as any}
      options={totalRevenueGraphOptions as any}
      height={250}
      width={550}
    />
  );
};

export default TotalRevenueGraph;
