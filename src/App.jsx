import './App.css'
import data from './assets/data.json'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js'
import { useEffect } from 'react'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

function getChartData() {
  const state = {
    labels: data.map((chart) => chart.day),
    datasets: [
      {
        data: data.map((chart) => chart.amount),
        label: "Spending - Last 7 days",
        backgroundColor: "hsl(10, 79%, 65%)",
        borderWidth: "hidden",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 3,
      },
    ],
  };

  const titleTooltip = (e) => `$${e[0].formattedValue}`;
  const labelTooltip = (e) => "";

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
          title: titleTooltip,
          label: labelTooltip,
        },
      },
    },
  };

  return { state, options };
}


function App() {


  const { state, options } = getChartData(data);
  

  

  return (
    <>
      <div className='full-page-container bg-soft-red-yellow items-center flex  justify-center h-screen w-screen'>
        {/* Card Container */}
        <div className='flex items-center  justify-center flex-col'>
          {/* Balance Container */}
          <div className=' mb-4 flex justify-between p-3 bg-red-soft w-full rounded-[6px] '>
            <div className='flex flex-col mx-2'>
              <span className='text-[12px] text-balance'>My balance</span>
              <span className='text-[20px]  md:text-[24px] total'>$921.48</span>
            </div>
            <div className='flex'>
              <img className='w-14 md:w-16' src="/src/images/logo.svg" alt="" />
            </div>
          </div>
          {/* Spending Stats */}
          <div className='bg-white rounded-[6px] h-auto md:w-96 md:h-96'>
            <h1 className='m-4 text-[22px]  md:text-[26px] text-Dark-brown font-bold'>Spending - Last 7 days</h1>
            {/* Stats Container */}
            <div className='m-2 flex align-middle justify-center '>
              <Bar className='flex' data={state} options={options} />
            </div>
            <div className='flex  justify-center'>
              <hr className='w-[92%] drop-shadow pt-1 border-soft-red-yellow ' />
            </div>
            {/* Total per/mount container */}
            <div className='flex justify-between mx-4 my-4 md:pt-3'>
              <div>
                <span className=' text-gray-500'>Total this month</span>
                <h1 className='text-[25px] font-bold md:text-[28px]'>$478.33</h1>
              </div>
              <div className='text-right mt-2 '>
                <span className='text-[12px] font-bold md:text-[15px] '>+2.4%</span>
                <h3 className='text-[14px] text-Medium-brown  md:text-[16px]'>from last month</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
