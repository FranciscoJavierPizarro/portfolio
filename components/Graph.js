import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  
  export default function Graph() {
    ChartJS.register(
      RadialLinearScale,
      PointElement,
      LineElement,
      Filler,
      Tooltip,
      Legend
    );
    
    const data = {
      labels: ['Cybersecurity', 'System administration', 'Frontend', 'Scripting', 'Backend'],
      datasets: [
        {
          label: 'Knowledge',
          data: [8, 7, 4, 9, 5],
        //   backgroundColor: 'rgba(159, 239, 0,1)',
          titleColor: 'rgba(255,255,255,1)',
          borderColor: 'rgba(159, 239, 0,1)',
          borderWidth: 2,
          tickWidth: 0
        },
      ],
      
    };

    return (
        <>
        <div className='w-84 h-84 mx-auto pt-4 text-white'>
            <Radar data={data}
            options= {{
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            color: 'white'
                        },
                        grid: {
                            color: 'white',
                            borderWidth:2,
                        },
                        pointLabels: {
                          color: 'white'
                        },
                        ticks: {
                        color: 'rgba(255,255,255,0)',
                        backdropColor: 'rgba(255,255,255,0)'
                        },
                        max: 10,
                        min: 0
                      }
                },
                plugins: {
                    legend: {
                        display:false,
                      position: 'right',
                      rtl : true,
                      colo:'white',
                      labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 0,
                      }
                    }
                  },
            }}/>
        </div>
        </>
    )
}