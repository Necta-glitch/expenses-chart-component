import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import data from '../assets/data.json';

const MyChart = () => {
  useEffect(() => {
    // Función para generar el gráfico
    const generateChart = () => {
      const info = {
        labels: data.map((chart) => chart.day),
        datasets: [
          {
            data: data.map((chart) => chart.amount),
            backgroundColor: "hsl(10, 79%, 65%)",
            borderRadius: 5,
            hoverBackgroundColor: "hsl(10, 79%, 75%)",
          },
        ],
      };

      const options = {
        scales: {
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
              drawTicks: false,
              drawBorder: false,
            },
          },
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            yAlign: "bottom",
            displayColors: false,
            callbacks: {
              title: (e) => `$${e[0].formattedValue}`,
              label: () => "",
            },
          },
        },
      };

      const config = {
        type: "bar",
        data: info,
        options,
      };

      return config;
    };

    // Renderizar el gráfico
    const chartConfig = generateChart();

    const chartContainer = document.getElementById("myChart");
    new Bar(chartContainer, chartConfig);
  }, []);

  return <div>
    <canvas id="myChart" />
  </div>;
};

export default MyChart;
