"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { orderAnalyticsGraphData, orderAnalyticsGraphOptions } from "./GraphBoardData";

const OrderAnalyticsGraph = () => {
  //element registration
  Chart.register(...registerables);
  return (
    <Line
      data={orderAnalyticsGraphData as any}
      options={orderAnalyticsGraphOptions as any}
      height={200}
      width={600}
    />
  );
};

export default OrderAnalyticsGraph;
