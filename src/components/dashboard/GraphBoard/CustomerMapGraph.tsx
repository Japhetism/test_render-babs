"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { customersMapGraphData, customersMapGraphOptions } from "./GraphBoardData";

const CustomerMapGraph = () => {
  //element registration
  Chart.register(...registerables);
  return (
    <Bar
      data={customersMapGraphData as any}
      options={customersMapGraphOptions as any}
      height={400}
      width={600}
    />
  );
};

export default CustomerMapGraph;
    