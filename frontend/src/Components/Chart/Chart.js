import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadarController,
  RadialLinearScale, 
} from "chart.js";

import { Radar } from "react-chartjs-2";
import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadarController,
  RadialLinearScale 
);

function Chart() {
  const { incomes, expenses } = useGlobalContext();

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: [...incomes.map((income) => income.amount)],
        backgroundColor: "rgba(0, 128, 0, 0.2)",
        borderColor: "green",
        pointBackgroundColor: "green",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "green",
      },
      {
        label: "Expenses",
        data: [...expenses.map((expense) => expense.amount)],
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderColor: "red",
        pointBackgroundColor: "red",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "red",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: Math.max(
          ...incomes.map((income) => income.amount),
          ...expenses.map((expense) => expense.amount)
        ),
      },
    },
  };

  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  );
}

export default Chart;

