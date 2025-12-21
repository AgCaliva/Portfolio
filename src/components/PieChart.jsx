//import './Treant.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


import { useEffect, useLayoutEffect, useRef } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ['Python', 'C/C++', 'Java/Kotlin', 'Javascript', 'Golang', 'Scripting/Bash'],
  datasets: [
    {
      label: '% Usage in Projects',
      data: [25, 15, 25, 25, 5, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
function vwToPx(vw) {
  return (window.innerWidth * vw) / 100;
}
export default function PieChart(){
	
	useEffect(() => {
	}, []);
	
	useLayoutEffect(() => {
		const pieLanguages = window.$("#pie-languages")
		let is_mobile = false;
		const divMobileDetector = window.$('#divMobileDetector')
		if( divMobileDetector.css('display')==='none') {
			is_mobile = true
		}
		if(is_mobile){
			pieLanguages.width( vwToPx(100) )
		}else{
			pieLanguages.width( vwToPx(45) )
		}
	}, [])
	
	return(
	<div id="pie-languages" style={{width:"45vw"}}>
		<Doughnut data={data}/>
	</div>
	);
}