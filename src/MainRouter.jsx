import React, {useEffect, useState} from 'react'
import {Route, Routes } from 'react-router'

import Home from './core/Home'

import Menu from './core/Menu'
import MenuMobile from './core/MenuMobile'

import Footer from './core/Footer'

const MainRouter = ({data=null}) => {
	const [is_mobile, setIsMobile] = useState(false);
	
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
		</div>)
}

export default MainRouter;
