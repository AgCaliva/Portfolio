import React, { useEffect, useRef} from 'react'
import {Link} from 'react-router'
import { useTranslation } from 'react-i18next';

const Menu = () => {
	const { t, i18n } = useTranslation();
	
	const closeMenu = () => {
		const menuBut = window.$("#menuBut");
		const MenuButs = window.$("#MenuButs");
		MenuButs.addClass("invisible")
	}
	
	const clickMenuBut = () => {
		const MenuButs = window.$("#MenuButs");
		MenuButs.toggleClass("invisible")
	}
	
	const clickSamples1 = () => {
		closeMenu()
		const section_samples1 = window.$("#section_samples1");
		window.scrollTo(window.scrollX,section_samples1[0].offsetTop)
	}
	
	const clickAboutMe = () => {
		closeMenu()
		const section_aboutme = window.$("#section_aboutme");
		window.scrollTo(window.scrollX,section_aboutme[0].offsetTop)
	}
	
	const clickSamples2 = () => {
		closeMenu()
		const section_samples2 = window.$("#section_samples2");
		window.scrollTo(window.scrollX,section_samples2[0].offsetTop)
	}
	
	const clickServices = () => {
		closeMenu()
		const section_services = window.$("#section_services");
		window.scrollTo(window.scrollX,section_services[0].offsetTop)
	}
	
	const clickContact = () => {
		closeMenu()
		const section_contact = window.$("#section_contact");
		window.scrollTo(window.scrollX,section_contact[0].offsetTop)
	}
	
	const clickClients = () => {
		closeMenu()
		const section_clients = window.$("#section_clients");
		window.scrollTo(window.scrollX,section_clients[0].offsetTop)
	}
	
	useEffect(() => {
		window.$(document).mousedown((event) => {
			const targetName = window.$(event.target).attr("name")
			if ( targetName !== "menuEl" ) {
				closeMenu()
			}
		});
		
		//const sectioncontainer = window.$("#sectioncontainer");
		const MenuButs = window.$("#MenuButs");
		
		
		let maxWidth = 0;
		const buts = MenuButs.find(".btn");
		buts.each(function(index, element) {
			let curWidth = window.$(element).outerWidth();
			if (maxWidth < curWidth ) {
				maxWidth = curWidth;
			}
		});
		buts.each(function(index, element) {
			window.$(element).outerWidth(maxWidth);
		});
	}, [])
  
  return (<div id="Menu" className="" >
		<div className="d-flex flex-column justify-content-center align-items-center " id="sectioncontainer">
			<div className="d-flex align-items-center mypy-3 w-100 backPry">
				<div className="d-flex align-items-center w-100">
					<div className="" style={{ width: "13%" }}></div>
					<h1 className="" style={{ fontSize: "2.1rem" }}> <strong className="textColor2 noselect">Agustin Caliva - AgCaliva</strong> </h1>
				</div>
				<div className="d-flex justify-content-end align-items-center w-100">
					<button id="menuBut" name="menuEl" type="button" className="btn btn-1 mx-3" aria-label="Open Menu" onClick={clickMenuBut}>
						<i name="menuEl" className="d-flex bi bi-list fontSicon1 textColor2" aria-hidden="true"></i>
					</button>
					<a target="_blank" href="https://github.com/AgCaliva/Portfolio"  rel="noreferrer" className="">
						<button id="sourceBut" name="menuEl" type="button" className="btn btn-1" aria-label="Open Source code in github">
							<i name="menuEl" className="d-flex bi bi-code-slash fontSicon1 textColor2" aria-hidden="true"></i>
						</button>
					</a>
					
					<div className="" style={{ width: "7%" }}></div>
				</div>
			</div>
		</div>
		<div className="w-100 d-flex flex-column justify-content-center position-absolute" style={{ width: "100vw" }}>
			<div id="sectioncontainer-sec" className="py-1" style={{ backgroundColor: "#000" }}>
			</div>
		</div>
		<div id="MenuButs" name="menuEl" className="invisible right0 position-absolute" style={{ zIndex: 9999 }}>
			<div className="py-1">
			</div>
			<div name="menuEl" className="d-flex flex-column">
				<button id="aboutmeBut" name="menuEl" type="button" className="btn btn-1 fontSicon1" aria-label="Open Menu" onClick={clickAboutMe}>
					{ t('menu_section.1') }
				</button>
				<button id="samples1But" name="menuEl" type="button" className="btn btn-1 fontSicon1" aria-label="Open Menu" onClick={clickSamples1}>
					{ t('menu_section.2') }
				</button>
				<button id="samples2But" name="menuEl" type="button" className="btn btn-1 fontSicon1" aria-label="Open Menu" onClick={clickSamples2}>
					{ t('menu_section.3') }
				</button>
				<button id="servicesBut" name="menuEl" type="button" className="btn btn-1 fontSicon1" aria-label="Open Menu" onClick={clickServices}>
					{ t('menu_section.4') }
				</button>
				<button id="contactBut" name="menuEl" type="button" className="btn btn-1 fontSicon1" aria-label="Open Menu" onClick={clickContact}>
					{ t('menu_section.5') }
				</button>
				<button id="clientsBut" name="menuEl" type="button" className="btn btn-1 fontSicon1" aria-label="Open Menu" onClick={clickClients}>
					{ t('menu_section.6') }
				</button>
			</div>
		</div>
  </div>)
}


export default Menu
