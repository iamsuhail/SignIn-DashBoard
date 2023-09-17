import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,

        
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align:'end',
        labels: {
          usePointStyle: true,
          boxHeight: 50
        },
      },
    },
    scales: {
      y: {
          ticks: {
            stepSize: 100

          },
          border: {
            display:false
          }
      },
      x: {
          grid: {
            display: false
          },
          
      }
  }
  };

export const FetchData =() => {
    const [data, setData] = useState({
        labels:['Week 1','Week 2','Week 3','Week 4',''],
        datasets: [
          {
            label: 'Guest',
            data:[100,200,300,400],
            // borderColor: 'rgb(255, 99, 132)',
            backgroundColor: '#98D89E',
            borderRadius: 5,
            barThickness:38.4,
            borderColor:'transparent'
          },
          {
            label: 'User',
            data:[100,200,300,400],
            // borderColor: 'rgb(53, 162, 235)',
            backgroundColor: '#EE8484',
            borderRadius: 5,
            barThickness:38.4,
            borderColor:'transparent'
          },
        ],
      });
    useEffect(()=> {
       const fetchData= async()=> {
           const url = 'http://127.0.0.1:5500/front-end/src/data.json'
           const labelSet = []
           const dataSet1 = [];
           const dataSet2 = [];
           await fetch(url).then((data)=> {
            console.log("Api data", data)
            const res = data.json();
            return res
        }).then((res) => {
             console.log("ressss", res)
            for (const val of res) {
                dataSet1.push(val.one);
                dataSet2.push(val.two)
            }
            setData({
                labels:['Week 1','Week 2','Week 3','Week 4'],
                datasets: [
                  {
                    label: 'Guest',
                    data:dataSet1,
                    backgroundColor: '#98D89E',
                    borderRadius: 5,
                    // borderWidth: 1,
                    barThickness:38.4,
                    borderColor:'transparent'
                  },
                  {
                    label: 'User',
                    data:dataSet2,
                    backgroundColor: '#EE8484',
                    borderRadius: 5,
                    barThickness:38.4,
                    borderColor:'transparent'
                  },
                ],
              })
            console.log("arrData", dataSet1, dataSet2)
         }).catch(e => {
                console.log("error", e)
            })
        }
        
        fetchData();
    },[])

    return(
        <div style={{width:'100%', height:'90%'}}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Bar data={data} options={options}/>
         </div>)
}