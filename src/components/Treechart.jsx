import './Treant.css'
import './LangTree.css'
import { Treant } from 'treant-js'
import Raphael from 'raphael';

import { useEffect, useLayoutEffect, useRef } from "react";

export default function Treechart(){
	let treant = undefined
	// Sample data
	
	const simple_chart_config = {
		chart: {
			container: "#tree-languages",
			levelSeparation:    200,//change this for phones
			siblingSeparation:  0,
			subTeeSeparation:   10,
			rootOrientation: "WEST",
			node: {
				HTMLclass: "langtree",
				drawLineThrough: false
			},
			connectors: {
				//type: "straight",
				style: {
					"stroke-width": 2,
					"stroke": "#ccc"
				}
			}
		},
		
		nodeStructure: {
			HTMLclass: "node1",
			text: { name: "AgCaliva" },
			
			children: [
				{
					text: { name: "Python"},
					children: [
						{
							text: { name: "requests"},
						},
						{
							text: { name: "numpy" }
						},
						{
							text: { name: "pandas" }
						},
						{
							text: { name: "matplotlib" }
						},
						{
							text: { name: "opencv" }
						},
						/*ML
						{
							text: { name: "scikit-learn" }
						},
						{
							text: { name: "tensorflow" }
						},
						{
							text: { name: "torch" }
						}*/
						/*WEBDEV
						{
							text: { name: "flask" }
						},
						{
							text: { name: "django" }
						},
						{
							text: { name: "fastapi" }
						},
						*/
						{
							text: { name: "beautifulsoup4" }
						},
						{
							text: { name: "pytest" }
						},
						{
							text: { name: "sqlalchemy" }
						},
						{
							text: { name: "PyMongo" }
						},
						{
							text: { name: "pillow" }
						},
					]
				},
				{
					text: { name: "C/C++" },
					children: [
						{
							text: { name: "pthreads" }
						},
						{
							text: { name: "ncurses" }
						},
						{
							text: { name: "libcurl" }
						},
						{
							text: { name: "Qt"},
						},
						{
							text: { name: "OpenCV" }
						},
						{
							text: { name: "spdlog" }
						},
						{
							text: { name: "Boost" }
						},
						{
							text: { name: "FFmpeg" }
						},
					]
				},
				{
					text: { name: "Java/Kotlin" },
					children: [
						/*WEBDEV
						{
							text: { name: "Spring" }
						},
						*/
						{
							text: { name: "JUnit" }
						},
						{
							text: { name: "Gson" }
						},
						{
							text: { name: "Maven"},
						},
						{
							text: { name: "AndroidX" }
						},
						{
							text: { name: "Glide" }
						},
						{
							text: { name: "Coroutines" }
						},
					]
				},
				{
					text: { name: "Javascript" },
					children: [
						/*WEBDEV
						{
							text: { name: "Vue.js" }
						},
						{
							text: { name: "TypeScript" }
						},
						
						*/
						{
							text: { name: "React" }
						},
						{
							text: { name: "Node.js" }
						},
						{
							text: { name: "Lodash"},
						},
						{
							text: { name: "jQuery" }
						},
						{
							text: { name: "Axios" }
						},
						{
							text: { name: "Webpack" }
						},
						{
							text: { name: "Jest" }
						},
					]
				},
				{
					text: { name: "Golang" },
					children: [
						{
							text: { name: "jwt" }
						},
						{
							text: { name: "redis" }
						},
						{
							text: { name: "sqlx"},
						},
						{
							text: { name: "testify" }
						},
					]
				},
				{
					text: { name: "Scripting/Bash" },
					children: [
						{
							text: { name: "pipelines/redirection" }
						},
						{
							text: { name: "awk" }
						},
						{
							text: { name: "sed"},
						},
						{
							text: { name: "find" }
						},
						{
							text: { name: "docker" }
						},
						{
							text: { name: "nginx" }
						},
					]
				},
				{
					text: { name: "Ruby" }
				}
			]
		}
	};
	function vwToPx(vw) {
		return (window.innerWidth * vw) / 100;
	}
	
	useEffect(() => {
		
	}, []);
	
	useLayoutEffect(() => {
		let is_mobile = false;
		const divMobileDetector = window.$('#divMobileDetector')
		if( divMobileDetector.css('display')==='none') {
			is_mobile = true
		}
		if(is_mobile){
			simple_chart_config.chart.levelSeparation = vwToPx(10)//35
			//simple_chart_config.chart.subTeeSeparation = 0
			
		}else{
			simple_chart_config.chart.levelSeparation = vwToPx(27)
		}
		
		//var my_chart = new Treant(simple_chart_config);
		if (treant) {
			console.log("treant.destroy()")
			treant.destroy();
		}
		console.log("Treant")
		console.dir(Treant)
		window.Raphael = Raphael;
		//console.log("Raphael")
		//console.dir(Raphael)
		//console.log("window.Raphael")
		//console.dir(window.Raphael)
		console.log("window")
		console.dir(window)
		treant = new Treant(simple_chart_config)
		console.log("treant")
		console.dir(treant)
		
		const treeLanguages = window.$("#tree-languages")
		const svg = treeLanguages.find("svg") //window.$("#tree-languages > svg")
		treeLanguages.height( svg.outerHeight() );
		
	}, [])
	
	return (
	<div id="tree-languages" className="" style={{height:"0px", width:"100%"}}>
	</div>
	)
	
}
