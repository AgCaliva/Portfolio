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
			
			<div id="presentacionContainer" className="position-fixed w-100" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
				<div id="presentaciondiv" className="" style={{ height:"100vh" }}>
					<div className="d-none">
						<div className="d-flex justify-content-center scale2" style={{  }} >
							<div className="spinner">
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-center" style={{ width:"100%", height:"100%" }}>
						<div className="d-flex flex-column justify-content-center" style={{  width:"65%" }}>
						
							<div className="d-flex justify-content-center" style={{ height:"65%" }} >
							
								<div id="fondo_pres" className="d-flex flex-column justify-content-center" style={{width:"50%" }} >
								
									<div id="cuerpo_logo" className="d-flex flex-column p-3 position-absolute" style={{ backgroundColor: "#fff", visibility: "hidden" }}>
										<div id="div_letras_negro" className="d-flex flex-column p-3">
											<strong name="titulo_pres" className="fontSize3 EmpiricRomanFont" style={{ color: "#000" }}>CCH</strong>
											<strong name="titulo_pres" className="fontSize3 EmpiricRomanFont" style={{ color: "#000" }}>& Asociados</strong>
										</div>
										<div className="d-flex flex-column flex-grow justify-content-end">
											<div className="d-flex justify-content-end w-100">
												<div className="d-flex flex-column p-3">
													<strong name="titulo_pres2" className="fontSize3 EmpiricRomanFont" style={{ color: "#000" }}>Estudio de Abogados</strong>
													<strong name="titulo_pres2" className="fontSize3 EmpiricRomanFont" style={{ color: "#000" }}>Estudio Jurídico</strong>
												</div>
											</div>
										</div>
									</div>
									
									<div id="cuerpo_logo_letras_blancas" className="d-flex flex-column p-3 position-absolute" style={{ backgroundColor: "#000", visibility: "hidden" }}>
										<div className="d-flex flex-column p-3">
											<strong id="titulo_pres_blanco1" name="titulo_pres_blanco" className="fontSize3 EmpiricRomanFont" style={{ color: "#000" }}>CCH</strong>
											<strong id="titulo_pres_blanco2" name="titulo_pres_blanco" className="fontSize3 EmpiricRomanFont" style={{ color: "#000" }}>& Asociados</strong>
										</div>
										<div className="d-flex flex-column flex-grow justify-content-end">
											<div className="d-flex justify-content-end w-100">
												<div className="d-flex flex-column p-3">
													<strong id="titulo_pres_blanco3" name="titulo_pres_blanco2" className="fontSize3 EmpiricRomanFont" style={{ color: "#000" }}>Estudio de Abogados</strong>
													<strong id="titulo_pres_blanco4" name="titulo_pres_blanco2" className="fontSize3 EmpiricRomanFont" style={{ color: "#000" }}>Estudio Jurídico</strong>
												</div>
											</div>
										</div>
										
									</div>
									
								</div>
								
							</div>
						
						</div>
					
					</div>
					
				</div>
				<div className="py-3">
				</div>
				
			</div>
		</div>)
}

export default MainRouter;
