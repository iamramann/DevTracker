import Chart from "react-apexcharts";
import ChartLayout from "./ChartLayout";

function Monthly() {
  const data = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <ChartLayout>
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        // width="400"
      />
    </ChartLayout>
  );
}

export default Monthly;
