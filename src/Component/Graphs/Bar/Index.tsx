import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function BarChart(props: any) {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          lineWidth: 0,
        },
      },
      x: {
        grid: {
          lineWidth: 0,
        },
      },
    },
    barThickness: 28,
    maxBarThickness: 30,
  };

  return <Bar options={options} data={props.barChartData} />;
}

export default BarChart;
