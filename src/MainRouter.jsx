import React, {useEffect, useState} from 'react'
import {Route, Routes } from 'react-router'

import Home from './core/Home'

import Menu from './core/Menu'
import MenuMobile from './core/MenuMobile'

import Footer from './core/Footer'

const MainRouter = ({data=null}) => {
	const [is_mobile, setIsMobile] = useState(false);
	
	const clickClosePres = () => {
		window.$('body,html').css('overflow','visible');
		const presentacionContainer = window.$("#presentacionContainer");
		presentacionContainer.addClass("hide")
	}
	
	useEffect(() => {
		const divMobileDetector = window.$('#divMobileDetector')
		if( divMobileDetector.css('display')==='none') {
			setIsMobile(true)
		}
	},[])
  
  return (<div className="p-0 d-flex flex-column" style={{backgroundColor: "rgb(214,225,227)", width: "100vw", minHeight:"100vh"}}>
			<span id="divMobileDetector" className="text-center"></span>
			{
				is_mobile
				? (<MenuMobile/>)
				: (<Menu/>)
			}
			<div className="d-flex flex-column flex-grow-1 backPry">
				<Routes forceRefresh={false}>
					<Route path="/" element={<Home/>}/>
					<Route path="/home" element={<Home/>}/>
					<Route path="*" element={<Home/>} />
				</Routes>
				
			</div>
			<div id="msg_alert_ok" className="alert alert-success fixed-bottom mx-2" role="alert" style={{ "display": "none" }}>
				Everything is ok.
			</div>
			<Footer/>
			
			<div id="presentacionContainer" className="position-fixed w-100 h-100" style={{ backgroundColor: "rgba(0,0,0,0.8)",zIndex: 99999, display: "none" }} >
				<div className="d-flex justify-content-center py-4" style={{ width:"100%", height:"100%" }}>
					<div className="d-flex flex-column justify-content-start align-items-center h-100 p-3 widthPresentacion" style={{  backgroundColor: "rgba(230,230,230,1)" }}>
						<button name="" type="button" className="btn btn-empty fontSicon1 ml-auto" aria-label="close project details" onClick={clickClosePres}>
							<i name="" className="d-flex bi bi-x-circle fontSicon1" aria-hidden="true" style={{ color: "#000" }}></i>
						</button>
						<strong id="presTitle" className="presTitleSize1">
							Lorem Ipsum
						</strong>
						<div id="presContent" className="d-flex flex-column p-3 presContentSize1" style={{ overflowY:"auto", overflowX:"hidden", wordWrap: "break-word" }}>
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
						</div>
						
					</div>
				</div>
				
			</div>
		</div>)
}

export default MainRouter;
