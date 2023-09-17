import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
  );
const options = {
    responsive: true,
    cutout: 70,
rotation: 260,
borderRadius: 100,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          usePointStyle: true,
          boxHeight: 10,
        },
      },
    },
  };
export const DonutChart =() => {
    const [data, setData] = useState({
        datasets: [
          {
            data:[55,31,14],
            backgroundColor: ['#98D89E','#EE8484','#F6DC7D'],
            borderWidth:0,
            borderRadius: 10,
          },
        ],
        labels: ['Likes','Comments','Shares'],
      });
    useEffect(()=> {
       const fetchData= async()=> {
           const url = 'http://127.0.0.1:5500/front-end/src/donutchart.json'
           await fetch(url).then((data)=> {
            const res = data.json();
            return res
        }).then((res) => {
            const label=[];
            const data=[];
            for (const val of res) {
                label.push(val.one);
                data.push(val.two)
            }
            setData({
                labels:label,
                datasets: [{
                  data:data,
                  backgroundColor:['#98D89E','#EE8484','#F6DC7D']
               }],
              })
         }).catch(e => {
                console.log("error", e)
            })
        }
        
        fetchData();
    },[])
   
    return(
        <div style={{width:'100%', height:'120%'}}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Doughnut data={data} options={options}/>
         </div>)
}