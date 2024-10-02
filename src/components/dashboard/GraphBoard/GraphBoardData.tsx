const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

/**  Summary of all order (Order Analytics)
 */
export const orderAnalyticsGraphData = {
  labels: days,
  datasets: [
    {
      label: "",
      fill: false,
      // backgroundColor: ,
      borderColor: "#3BB77E",
      borderCapStyle: "round",
      borderJoinStyle: "miter",
      tension: 0.4,
      pointBorderColor: "#3BB77E",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 0.5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#C22DD9",
      pointHoverBorderColor: "rgba(255, 255, 255, 0.8)",
      pointHoverBorderWidth: 8,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [200, 180, 300, 250, 450, 150, 300],
    },
  ],
};

export const orderAnalyticsGraphOptions = {
  responsive: true,
  layout: {
    padding: 10,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      usePointStyle: true,
      backgroundColor: "rgba(255, 255, 255, 1)",
      bodyColor: "rgba(70, 66, 85, 1)",
      titleColor: "rgba(70, 66, 85, 1)",
      titleAlign: "center",
      bodyAlign: "center",
      footerAlign: "center",
      yAlign: "center",
      xAlign: "left",
      caretPadding: 15,
      boxWidth: 400,
      displayColors: false,
      titleMarginBottom: 10,
      titleSpacing: 15,
      callbacks: {},
    },
  },
  scales: {
    x: {
      // type: "category",
      ticks: {
        color: "rgba(173, 178, 178, 1)",
        fontSize: 12,
      },
      grid: {
        lineWidth: 1,
        display: false,
      },
    },
    y: {
      display: true,
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "rgba(173, 178, 178, 1)",
        fontSize: 12,
        display: false,
      },
    },
  },

  animation: {
    easing: "linear",

    y: {
      duration: 2000,
      from: 500,
    },
  },
};

/**  Total Revenue Data
 */
export const totalRevenueGraphData = {
  labels: months,
  datasets: [
    {
      label: "2022",
      fill: false,
      // backgroundColor: ,
      borderColor: "#FF5B5B",
      borderCapStyle: "round",
      borderJoinStyle: "miter",
      tension: 0.4,
      pointBorderColor: "#B32AC9",
      pointBackgroundColor: "#B32AC9",
      pointBorderWidth: 0.5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#FF5B5B",
      pointHoverBorderColor: "rgba(255, 255, 255, 0.8)",
      pointHoverBorderWidth: 8,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [50, 180, 340, 250, 360, 190, 200, 300, 340, 200, 190, 20],
    },
    {
      label: "2023",
      fill: false,
      // backgroundColor: ,
      borderColor: "#3BB77E",
      borderCapStyle: "round",
      borderJoinStyle: "miter",
      tension: 0.4,
      pointBorderColor: "FF5B5B",
      pointBackgroundColor: "#FF5B5B",
      pointBorderWidth: 0.5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#3BB77E",
      pointHoverBorderColor: "rgba(255, 255, 255, 0.8)",
      pointHoverBorderWidth: 8,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [200, 180, 300, 250, 100, 50, 250, 100, 450, 490, 150, 300],
    },
  ],
};

export const totalRevenueGraphOptions = {
  responsive: true,
  layout: {
    padding: 10,
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
      align: "end",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        backgroundColor: "#3BB77E",
      },
    },
    tooltip: {
      usePointStyle: true,
      backgroundColor: "rgba(174, 45, 219, 0.1)",
      bodyColor: "rgba(179, 42, 201, 1)",
      // titleColor: "rgba(0, 0, 0, 0.6)",
      titleAlign: "center",
      bodyAlign: "center",
      footerAlign: "center",
      yAlign: "bottom",
      caretPadding: 15,
      boxWidth: 300,
      displayColors: false,
      titleMarginBottom: 10,
      titleSpacing: 15,
      callbacks: {
        title: () => null, // or function () { return null; }
      },
    },
  },
  scales: {
    x: {
      // type: "category",
      ticks: {
        color: "rgba(173, 178, 178, 1)",
        fontSize: 12,
      },
      grid: {
        lineWidth: 1,
        display: true,
      },
    },
    y: {
      display: true,
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "rgba(173, 178, 178, 1)",
        fontSize: 12,
        display: true,
      },
    },
  },

  animation: {
    easing: "linear",

    y: {
      duration: 2000,
      from: 500,
    },
  },
};

/**
 * Customer Map Data
 */
export const customersMapGraphData = {
  labels: shortDays,
  datasets: [
    {
      label: "",
      fill: false,
      backgroundColor: ["#FF5B5B", "#3BB77E"],
      borderColor: "#3BB77E",
      borderCapStyle: "round",
      borderJoinStyle: "miter",
      tension: 0.4,
      pointBorderColor: "#3BB77E",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 0.5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#C22DD9",
      pointHoverBorderColor: "rgba(255, 255, 255, 0.8)",
      pointHoverBorderWidth: 8,
      pointRadius: 5,
      pointHitRadius: 10,
      barThickness: 13,
      barPercentage: 0.4,
      data: [50, 20, 40, 20, 40, 60, 20],
    },
  ],
};

export const customersMapGraphOptions = {
  responsive: true,
  layout: {
    padding: 10,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
      usePointStyle: true,
      backgroundColor: "#3BB77E",
      bodyColor: "rgba(0, 0, 0, 1)",
      titleColor: "rgba(0, 0, 0, 0.6)",
      titleAlign: "center",
      bodyAlign: "center",
      footerAlign: "center",
      yAlign: "bottom",
      caretPadding: 15,
      boxWidth: 100,
      displayColors: false,
      titleMarginBottom: 10,
      titleSpacing: 15,
      callbacks: {},
    },
  },
  scales: {
    x: {
      // type: "category",
      barThickness: 6,
      ticks: {
        color: "rgba(173, 178, 178, 1)",
        fontSize: 12,
      },
      grid: {
        lineWidth: 1,
        display: false,
      },
    },
    y: {
      display: true,
      beginAtZero: true,
      grid: {
        display: true,
      },
      ticks: {
        color: "rgba(173, 178, 178, 1)",
        fontSize: 12,
        display: true,
      },
    },
  },

  animation: {
    easing: "linear",

    y: {
      duration: 2000,
      from: 500,
    },
  },
};
