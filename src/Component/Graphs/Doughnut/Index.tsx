import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart(props: any) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const configOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    cutout: 75,
    animation: {
      animateScale: true,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Doughnut
      width={props.doughnutChartWidth}
      height={props.doughnutChartHeight}
      data={props.doughnutChartData}
      options={configOptions}
    />
  );
}

export default DoughnutChart;
