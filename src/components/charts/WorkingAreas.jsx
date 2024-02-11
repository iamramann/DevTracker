import Chart from "react-apexcharts";
import ChartLayout from "./ChartLayout";

function WorkingAreas() {
  const data = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Bugs", "Features", "Misc."],
      },
      colors: [
        function ({ value, seriesIndex, w }) {
          if (value < 40) {
            return "#7E36AF";
          } else {
            return "#D9534F";
          }
        },
      ],
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45],
      },
    ],
  };

  return (
    <ChartLayout>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        // width="400"
      />
    </ChartLayout>
  );
}

export default WorkingAreas;
