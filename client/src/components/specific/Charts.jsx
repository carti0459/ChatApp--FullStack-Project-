import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { getLast7Days } from "../../lib/feature";
import { orange } from "../../constants/color";


ChartJS.register(
  CategoryScale,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({value=[]}) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,12,192,1)",
      },
    ],
  };
  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 120,
};

const DoughnutChart = ({ value = [], labels = [] }) => {

  const data = {
    labels,
    datasets: [
      {
        data: value,
        backgroundColor: ["rgba(75,192,192,0.2)", orange],
        borderColor: ["rgba(75,12,192,1)", orange],
        offset: 30,
      },
    ],
  };
  return <Doughnut style={{ zIndex: 10 }}data={data} options={doughnutChartOptions}/>;
};

export { LineChart, DoughnutChart };
