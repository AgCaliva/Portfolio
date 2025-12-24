import React, { useEffect, useState, useRef} from 'react'
import { useTranslation } from 'react-i18next';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import fscreen from 'fscreen';

import Treechart from '../components/Treechart'
import PieChart from '../components/PieChart'


export default function Home(){
	const { t, i18n } = useTranslation();
	const itemFullScreen6 = useRef();
	const itemFullScreen7 = useRef();
	const itemFullScreen8 = useRef();
	const itemFullScreen9 = useRef();
	
	const [selectedOption, setSelectedOption] = useState('option1');

	const handleChange = (event) => {
		setSelectedOption(event.target.id);
		const pieLanguages = window.$("#pie-languages")
		const treeLanguages = window.$("#tree-languages")
		if(event.target.id === "option1"){//treechart
			treeLanguages.removeClass("d-none")
			pieLanguages.addClass("d-none")
		}else if(event.target.id === "option2"){//piechart
			pieLanguages.removeClass("d-none")
			treeLanguages.addClass("d-none")
		}
	};
	
	const clickClosePres = () => {
		window.$('body,html').css('overflow','visible');
		const presentacionContainer = window.$("#presentacionContainer");
		presentacionContainer.addClass("hide")
	}
	
	const clickDiscord = () => {
		const msg_alert_ok = window.$("#msg_alert_ok");
		
		msg_alert_ok.removeClass("hide")
		msg_alert_ok.html("Want to connect on Discord? Add me as a friend using my username: @agcaliva.")
		msg_alert_ok.show()
		setTimeout(function(){
			msg_alert_ok.addClass("hide")
		}, 2400)	
	}
	
	const clickShowInfo1 = () => {
		window.$('body,html').css('overflow','hidden');
		
		const presentacionContainer = window.$("#presentacionContainer");
		presentacionContainer.removeClass("hide")
		const presTitle = window.$("#presTitle");
		presTitle.text( t('info_section_1.1') )
		const presContent = window.$("#presContent");
		presContent.html( t('info_section_1.2') )
		presentacionContainer.show()
	}
	
	const clickShowInfo2 = () => {
		window.$('body,html').css('overflow','hidden');
		
		const presentacionContainer = window.$("#presentacionContainer");
		presentacionContainer.removeClass("hide")
		const presTitle = window.$("#presTitle");
		presTitle.text( t('info_section_2.1') )
		const presContent = window.$("#presContent");
		presContent.html(t('info_section_2.2'))
		presentacionContainer.show()
	}
	
	const clickShowInfo3 = () => {
		window.$('body,html').css('overflow','hidden');
		
		const presentacionContainer = window.$("#presentacionContainer");
		presentacionContainer.removeClass("hide")
		const presTitle = window.$("#presTitle");
		presTitle.text( t('info_section_3_4.1') )
		const presContent = window.$("#presContent");
		presContent.html( t('info_section_3_4.2') )
		presentacionContainer.show()
	}
	
	const clickShowInfo4 = () => {
		window.$('body,html').css('overflow','hidden');
		
		const presentacionContainer = window.$("#presentacionContainer");
		presentacionContainer.removeClass("hide")
		const presTitle = window.$("#presTitle");
		presTitle.text( t('info_section_3_4.1') )
		const presContent = window.$("#presContent");
		presContent.html( t('info_section_3_4.2') )
		presentacionContainer.show()
	}
	
	const clickShowInfo5 = () => {
		window.$('body,html').css('overflow','hidden');
		
		const presentacionContainer = window.$("#presentacionContainer");
		presentacionContainer.removeClass("hide")
		const presTitle = window.$("#presTitle");
		presTitle.text( t('info_section_5.1') )
		const presContent = window.$("#presContent");
		presContent.html( t('info_section_5.2') )
		presentacionContainer.show()
	}
	
	const clickShowInfo6 = () => {
		window.$('body,html').css('overflow','hidden');
		
		const presentacionContainer = window.$("#presentacionContainer");
		presentacionContainer.removeClass("hide")
		const presTitle = window.$("#presTitle");
		presTitle.text( t('info_section_6.1') )
		const presContent = window.$("#presContent");
		presContent.html( t('info_section_6.2') )
		presentacionContainer.show()
	}
	
	
	
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	
	useEffect(() => {
		const sectioncontainer = window.$("#sectioncontainer");
		const sectioncontainer_sec = window.$("#sectioncontainer-sec");
		
		const menu = window.$("#Menu");
		
		let hmenu = 0;
		if(menu.length !== 0){
			hmenu = menu.outerHeight();
		}else{
			hmenu = menuUser.outerHeight();
		}
		const sectioncontainer_inv_div = window.$("#sectioncontainer-inv-div");
		sectioncontainer_inv_div.height( sectioncontainer_sec.innerHeight() );
		
		let is_mobile = false;
		const divMobileDetector = window.$('#divMobileDetector')
		const mobileDetectorDisplay = window.$('#mobileDetectorDisplay')
		if( divMobileDetector.css('display')==='none') {
			is_mobile = true
		}
		if(is_mobile){
			mobileDetectorDisplay.text("MOBILE")
			const section_aboutme = window.$('#section_aboutme')
			section_aboutme.removeClass("flex-row")
			section_aboutme.addClass("flex-column")
			const serviciosItemsContainer = window.$('#serviciosItemsContainer')
			serviciosItemsContainer.addClass("flex-column")
			
			//const modesButs = window.$('#modesButs')
			
		}else{
			mobileDetectorDisplay.text("PC")
		}
		//----------------------------------------------------------------------
		const measurevh = window.$('#measure-vh')
		const h4carousel = ( measurevh.height() - ( hmenu + sectioncontainer_sec.outerHeight() ) );
		
		const section_samples1_container = window.$('#section_samples1_container')
		const sample_img0 = window.$('#sample_img0')
		const sample_img1 = window.$('#sample_img1')
		section_samples1_container.height(h4carousel)
		
		const cont_0 = window.$("#cont_0");
		const cont_0_h_init = cont_0.outerHeight();
		
		cont_0.height( cont_0_h_init );
		cont_0.width( cont_0_h_init );
		
		const cont_1 = window.$("#cont_1");
		cont_1.height( cont_0_h_init );
		cont_1.width( cont_0_h_init );
		
		const cont_2 = window.$("#cont_2");
		cont_2.height( cont_0_h_init );
		cont_2.width( cont_0_h_init );
		
		const cont_3 = window.$("#cont_3");
		cont_3.height( cont_0_h_init );
		cont_3.width( cont_0_h_init );
		
		let maxWidth_contactItems = 0;
		const contactItemsContainer = window.$("#contactItemsContainer");
		const contactItems = contactItemsContainer.find(".contactItem");
		contactItems.each(function(index, element) {
			let curWidth = window.$(element).outerWidth();
			if (maxWidth_contactItems < curWidth ) {
				maxWidth_contactItems = curWidth;
			}
		});
		contactItems.each(function(index, element) {
			window.$(element).outerWidth(maxWidth_contactItems);
		});
		
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				clickClosePres()
			}
		});

	}, []);
	
return (
	<div className="d-flex flex-column " >
		<div id="sectioncontainer-inv-div" className=""></div>
		
		<span id="divMobileDetector" className="text-center"></span>
		<span id="mobileDetectorDisplay" className="text-center d-none"></span>
		
		<div style={{ overflow: "hidden", position: "fixed", height: "0" }}>
			<div id="measure-vh" style={{ position: "fixed", height: "100vh" }}></div>
		</div>
		
		
		
		<div className='d-flex flex-row justify-content-center my-2 py-2 ' id="section_aboutme">
			<div className='d-flex flex-column justify-content-center py-2 w-100 mobileDNone' >
				<h1 className="text-center my-2" style={{ fontSize: "2rem" }}> <strong className="textColor2 noselect ">SaaS</strong> </h1>
				<h1 className="text-center my-2" style={{ fontSize: "2rem" }}> <strong className="textColor2 noselect ">Web3</strong> </h1>
				<h1 className="text-center my-2" style={{ fontSize: "2rem" }}> <strong className="textColor2 noselect ">Dapps</strong> </h1>
			</div>
			
			<div className='d-flex flex-column py-2' >
				<h1 className="text-center my-2" style={{ fontSize: "2.2rem" }}> <strong className="textColor2 noselect ">{ t('about_me') }</strong> </h1>
				<div className="mx-auto"  style={{  }}>
					<div className="mobileDNone " id="fondoPerfil" style={{ width: '25vw' }}>
						<img src={import.meta.env.BASE_URL+'/AgCalivaProfile.png'} className="img-fluid w-100 h-100 borderRadBut" alt="ProfilePic"/>
					</div>
					<div className="desktopDNone " id="fondoPerfil" style={{ width: '70vw' }}>
						<img src={import.meta.env.BASE_URL+'/AgCalivaProfile.png'} className="img-fluid w-100 h-100 borderRadBut" alt="ProfilePic"/>
					</div>
				</div>
			</div>

			<div className='d-flex flex-column justify-content-center py-2 w-100 mobileDNone' >
				<h1 className="text-center my-2" style={{ fontSize: "2rem" }}> <strong className="textColor2 noselect  ">{ t('about_me_section.1') }</strong> </h1>
				<h1 className="text-center my-2" style={{ fontSize: "2rem" }}> <strong className="textColor2 noselect fontSize1 ">{ t('about_me_section.2') }</strong> </h1>
				<h1 className="text-center my-2" style={{ fontSize: "2rem" }}> <strong className="textColor2 noselect ">{ t('about_me_section.3') }</strong> </h1>
			</div>
			
			<div className="desktopDNone">
				<div className='d-flex flex-column justify-content-center w-100' >
					<h1 className="mx-auto"> <strong className="textColor2 noselect fontSize1 ">SaaS</strong> </h1>
					<h1 className="mx-auto"> <strong className="textColor2 noselect fontSize1 ">Web3</strong> </h1>
					<h1 className="mx-auto"> <strong className="textColor2 noselect fontSize1 ">Dapps</strong> </h1>
					<h1 className="mx-auto"> <strong className="textColor2 noselect fontSize1 ">{ t('about_me_section.1') }</strong> </h1>
					<h1 className="mx-auto"> <strong className="textColor2 noselect fontSize1 ">{ t('about_me_section.2') }</strong> </h1>
					<h1 className="mx-auto"> <strong className="textColor2 noselect fontSize1 ">{ t('about_me_section.3') }</strong> </h1>
				</div>
			</div>
		</div>
		
		<strong className="text-center my-2" style={{ color: "#fff", fontSize: "1.4rem" }}>{ t('prog_langs_section.1') }</strong>
		<div id="programmingLanguagesContainer" className="mt-4 py-2 d-flex flex-column justify-content-center">
			<div id="modesButs" className="d-flex justify-content-center ">
				<input type="radio" className="btn-check invisible" name="options" id="option1" autoComplete="off" checked={selectedOption === 'option1'} onChange={handleChange}/>
				<label className="btn btn-secondary" htmlFor="option1">{ t('prog_langs_section.2') }</label>
				<input type="radio" className="btn-check invisible" name="options" id="option2" autoComplete="off" checked={selectedOption === 'option2'} onChange={handleChange}/>
				<label className="btn btn-secondary" htmlFor="option2">{ t('prog_langs_section.3') }</label>
			</div>
			<div id="chart" className="d-flex flex-column align-items-center">
				<PieChart/>
				<Treechart/>
			</div>
		</div>
		
		<div className='d-flex flex-column my-2 py-2' id="section_samples1">
			<h1 className="mx-auto my-2"> <strong className="textColor2 noselect fontSize1 ">{ t('projects') }</strong> </h1>
			<div className='my-2' id="section_samples1_container">
			
				<Carousel responsive={responsive}
					ssr={true}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={2500}
					//customTransition="all .5"
					//transitionDuration={500}
					removeArrowOnDeviceType={["tablet", "mobile"]}
					containerClass="h-100"
					sliderClass="h-100"
					itemClass=""
					//dotListClass="custom-dot-list-style"
				>
					<div className="position-relative h-100">
						<div className="w-100 h-100">
							<img id="sample_img0" src={import.meta.env.BASE_URL+'/samples/tu_sample1.png'} className="img-fluid w-100 h-100" alt="Introduction"/>
						</div>
						
						<div className="position-absolute topleft0 h-100 w-100 noselect" >
							<div className="d-flex flex-column justify-content-center h-100 w-100">
								<div className="d-flex w-100 mt-auto" style={{ backgroundColor:"rgba(0, 0, 0, 0.55)" }}>
									<button className="btn btn-empty d-flex mt-auto ml-auto p-2"
									onClick={ clickShowInfo1 }>
										<i className="d-flex bi bi-info-circle mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "2rem" }}></i>
									</button>
								</div>
							</div>
						</div>
					</div>
					
					<div className="position-relative h-100">
						<div className="w-100 h-100">
							<img id="sample_img1" src={import.meta.env.BASE_URL+'/samples/tu_sample2.png'} className="img-fluid w-100 h-100" alt="Introduction"/>
						</div>
						<div className="position-absolute topleft0 h-100 w-100 noselect" >
							<div className="d-flex flex-column justify-content-center h-100 w-100">
								<div className="d-flex w-100 mt-auto" style={{ backgroundColor:"rgba(0, 0, 0, 0.55)" }}>
									<button className="btn btn-empty d-flex mt-auto ml-auto p-2"
									onClick={ clickShowInfo2 }>
										<i className="d-flex bi bi-info-circle mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "2rem" }}></i>
									</button>
								</div>
							</div>
						</div>
					</div>
					
					<div className="position-relative h-100">
						<div className="w-100 h-100">
							<img src={import.meta.env.BASE_URL+'/samples/cinemark_sample1.png'} className="img-fluid w-100 h-100" alt="Introduction"/>
						</div>
						<div className="position-absolute topleft0 h-100 w-100 noselect" >
							<div className="d-flex flex-column justify-content-center h-100 w-100">
								<div className="d-flex w-100 mt-auto" style={{ backgroundColor:"rgba(0, 0, 0, 0.55)" }}>
									<button className="btn btn-empty d-flex mt-auto ml-auto p-2"
									onClick={ clickShowInfo3 }>
										<i className="d-flex bi bi-info-circle mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "2rem" }}></i>
									</button>
								</div>
							</div>
						</div>
					</div>
					
					<div className="position-relative h-100">
						<div className="w-100 h-100">
							<img src={import.meta.env.BASE_URL+'/samples/cinemark_sample2.jpg'} className="img-fluid w-100 h-100" alt="Introduction"/>
						</div>
						<div className="position-absolute topleft0 h-100 w-100 noselect" >
							<div className="d-flex flex-column justify-content-center h-100 w-100">
								<div className="d-flex w-100 mt-auto" style={{ backgroundColor:"rgba(0, 0, 0, 0.55)" }}>
									<button className="btn btn-empty d-flex mt-auto ml-auto p-2"
									onClick={ clickShowInfo4 }>
										<i className="d-flex bi bi-info-circle mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "2rem" }}></i>
									</button>
								</div>
							</div>
						</div>
					</div>
					
					<div className="position-relative h-100">
						<div className="w-100 h-100">
							<img src={import.meta.env.BASE_URL+'/samples/streaming_api_sample2.png'} className="img-fluid w-100 h-100" alt="Introduction"/>
						</div>
						<div className="position-absolute topleft0 h-100 w-100 noselect" >
							<div className="d-flex flex-column justify-content-center h-100 w-100">
								<div className="d-flex w-100 mt-auto" style={{ backgroundColor:"rgba(0, 0, 0, 0.55)" }}>
									<button className="btn btn-empty d-flex mt-auto ml-auto p-2"
									onClick={ clickShowInfo5 }>
										<i className="d-flex bi bi-info-circle mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "2rem" }}></i>
									</button>
								</div>
							</div>
						</div>
					</div>
					
				</Carousel>
			</div>
		
		</div>
		
		<div className='' id="section_samples2">
			
			<Carousel responsive={responsive}
				ssr={true}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={2500}
				removeArrowOnDeviceType={["tablet", "mobile"]}
				containerClass="h-100"
				sliderClass="h-100"
				itemClass=""
				//dotListClass="custom-dot-list-style"
			>
				<div className="position-relative h-100">
					<div className="w-100 h-100" ref={itemFullScreen6}>
						<img src={import.meta.env.BASE_URL+'/samples/Contours_290.jpg'} className="img-fluid w-100 h-100" alt="Introduction"/>
					</div>
					<div className="position-absolute topleft0 h-100 w-100 noselect" >
						<div className="d-flex flex-column justify-content-center h-100 w-100 mobileDNone">
							<div className="d-flex my-auto mx-auto p-2" style={{ cursor: 'pointer' }}
							onClick={ () => {
								if (fscreen.fullscreenEnabled) {
									fscreen.requestFullscreen(itemFullScreen6.current);
								}
							}}>
								<i className="d-flex bi bi-arrows-fullscreen mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "3rem" }}></i>
							</div>
						</div>
						<div className="position-absolute botleft0 d-flex w-100 mt-auto" style={{ backgroundColor:"rgba(0, 0, 0, 0.55)" }}>
							<button className="btn btn-empty d-flex mt-auto ml-auto p-2"
							onClick={ clickShowInfo6 }>
								<i className="d-flex bi bi-info-circle mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "2rem" }}></i>
							</button>
						</div>
					</div>
				</div>
					
				<div className="position-relative h-100">
					
						<div className="w-100 h-100" ref={itemFullScreen7}>
							<img src={import.meta.env.BASE_URL+'/samples/Contours_69.jpg'} className="img-fluid w-100 h-100" alt="Introduction"/>
						</div>
					
					<div className="position-absolute topleft0 h-100 w-100 noselect" >
						<div className="d-flex flex-column justify-content-center h-100 w-100 mobileDNone">
							<div className="d-flex my-auto mx-auto p-2" style={{ cursor: 'pointer' }}
							onClick={ () => {
								if (fscreen.fullscreenEnabled) {
									fscreen.requestFullscreen(itemFullScreen7.current);
								}
							}}>
								<i className="d-flex bi bi-arrows-fullscreen mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "3rem" }}></i>
							</div>
						</div>
						<div className="position-absolute botleft0 d-flex w-100 mt-auto" style={{ backgroundColor:"rgba(0, 0, 0, 0.55)" }}>
							<button className="btn btn-empty d-flex mt-auto ml-auto p-2"
							onClick={ clickShowInfo6 }>
								<i className="d-flex bi bi-info-circle mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "2rem" }}></i>
							</button>
						</div>
					</div>
				</div>
					
				<div className="position-relative h-100">
					
						<div className="w-100 h-100" ref={itemFullScreen8}>
							<img src={import.meta.env.BASE_URL+'/samples/Contours_310.jpg'} className="img-fluid w-100 h-100" alt="Introduction"/>
						</div>
					
					<div className="position-absolute topleft0 h-100 w-100 noselect" >
						<div className="d-flex flex-column justify-content-center h-100 w-100 mobileDNone">
							<div className="d-flex my-auto mx-auto p-2" style={{ cursor: 'pointer' }}
							onClick={ () => {
								if (fscreen.fullscreenEnabled) {
									fscreen.requestFullscreen(itemFullScreen8.current);
								}
							}}>
									<i className="d-flex bi bi-arrows-fullscreen mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "3rem" }}></i>
							</div>
						</div>
						<div className="position-absolute botleft0 d-flex w-100 mt-auto" style={{ backgroundColor:"rgba(0, 0, 0, 0.55)" }}>
							<button className="btn btn-empty d-flex mt-auto ml-auto p-2"
							onClick={ clickShowInfo6 }>
								<i className="d-flex bi bi-info-circle mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "2rem" }}></i>
							</button>
						</div>
					</div>
				</div>
				
				
				<div className="position-relative h-100">
					
						<div className="w-100 h-100" ref={itemFullScreen9}>
							<img src={import.meta.env.BASE_URL+'/samples/Contours_348.jpg'} className="img-fluid w-100 h-100" alt="Introduction"/>
						</div>
					
					<div className="position-absolute topleft0 h-100 w-100 noselect" >
						<div className="d-flex flex-column justify-content-center h-100 w-100 mobileDNone">
							<div className="d-flex my-auto mx-auto p-2" style={{ cursor: 'pointer' }}
							onClick={ () => {
								if (fscreen.fullscreenEnabled) {
									fscreen.requestFullscreen(itemFullScreen9.current);
								}
							}}>
								<i className="d-flex bi bi-arrows-fullscreen mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "3rem" }}></i>
							</div>
						</div>
						<div className="position-absolute botleft0 d-flex w-100 mt-auto" style={{ backgroundColor:"rgba(0, 0, 0, 0.55)" }}>
							<button className="btn btn-empty d-flex mt-auto ml-auto p-2"
							onClick={ clickShowInfo6 }>
								<i className="d-flex bi bi-info-circle mx-auto my-auto p-2" aria-hidden="true" style={{ color:"#fff",fontSize: "2rem" }}></i>
							</button>
						</div>
					</div>
				</div>
				
				
			</Carousel>
		</div>
		
		<div className='d-flex flex-column justify-content-center my-2 py-2 ' id="section_services">
			<h1 className="mx-auto my-2"> <strong className="textColor2 noselect fontSize1 ">{ t('services_section.1') }</strong> </h1>
			<div className="d-flex justify-content-center my-2">
				<ul className="d-inline-block m-0">
					<li className="textColor2"><strong className="noselect" style={{ color: "#fff", fontSize: "1.3rem" }}>{ t('services_section.2') }</strong></li>
					<li className="textColor2"><strong className="noselect" style={{ color: "#fff", fontSize: "1.3rem" }}>{ t('services_section.3') }</strong></li>
					<li className="textColor2"><strong className="noselect" style={{ color: "#fff", fontSize: "1.3rem" }}>{ t('services_section.4') }</strong></li>
				</ul>
			</div>
			<div id="serviciosItemsContainer" className="mt-4 py-2 d-flex justify-content-between">
				<div className="mobileDNone" style={{ width: "9vw" }}></div>
				<div id="serviciosItem1" className="d-flex flex-column">
					<div className="d-flex">
						<div className="d-flex borderRadBut backItems mx-auto p-2" id="cont_0">
							<i className="d-flex bi bi-android2 p-2 my-auto mx-auto" aria-hidden="true" style={{ color:"#fff",fontSize: "3rem" }}></i>
						</div>
					</div>
					<div className="text-center py-2">
						<strong className="" style={{ color: "#fff", fontSize: "1.3rem" }}>{ t('services_section_1.1') }</strong>
						<div className="py-2">
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_1.2') }
							</p>
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_1.3') }
							</p>
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_1.4') }
							</p>
						</div>
					</div>
				</div>
				<div id="serviciosItem2" className="d-flex flex-column">
					<div className="d-flex">
						<div className="d-flex borderRadBut backItems mx-auto p-2 " id="cont_1">
							<i className="d-flex p-2 bi bi-code-slash my-auto mx-auto" aria-hidden="true" style={{ color:"#fff",fontSize: "3rem" }}></i>
						</div>
					</div>
					<div className="text-center py-2">
						<strong className="" style={{ color: "#fff", fontSize: "1.3rem" }}>{ t('services_section_2.1') }</strong>
						<div className=" py-2">				
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_2.2') }
							</p>
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_2.3') }
							</p>
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_2.4') }
							</p>
						</div>
					</div>
				</div>
				<div id="serviciosItem3" className="d-flex flex-column my-auto">
					<div className="d-flex">
						<div className="d-flex borderRadBut backItems mx-auto p-2 " id="cont_2">
							<i className="d-flex p-2 bi bi-clipboard-data my-auto mx-auto" aria-hidden="true" style={{ color:"#fff",fontSize: "3rem" }}></i>
						</div>
					</div>
					<div className="text-center py-2">
						<strong className="" style={{ color: "#fff", fontSize: "1.3rem" }}>{ t('services_section_3.1') }</strong>
						<div className=" py-2">	
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_3.2') }
							</p>
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1rem" }}>
								{ t('services_section_3.3') }
							</p>
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_3.4') }
							</p>
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_3.5') }
							</p>
						</div>
					</div>
				</div>
				<div id="serviciosItem4" className="d-flex flex-column">
					<div className="d-flex">
						<div className="d-flex borderRadBut backItems mx-auto p-2 " id="cont_3">
							<i className="d-flex p-2 bi bi-pc-display p-2 my-auto mx-auto" aria-hidden="true" style={{ color:"#fff",fontSize: "3rem" }} id="administrativo_i"></i>
						</div>
					</div>
					<div className="text-center py-2">
						<strong className="" style={{ color: "#fff", fontSize: "1.3rem" }}>{ t('services_section_4.1') }</strong>
						<div className=" py-2">
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_4.2') }
							</p>
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_4.3') }
							</p>
							<p className="text-center mb-0" style={{ color: "#fff", fontSize: "1.1rem" }}>
								{ t('services_section_4.4') }
							</p>
						</div>
					</div>
				</div>
				<div className="mobileDNone" style={{ width: "9vw" }}></div>
			</div>
			
			<strong className="text-center mb-2" style={{ color: "#fff", fontSize: "1.3rem" }}>{ t('services_section.5') }</strong>
		
		</div>
		
		<div className='d-flex flex-column justify-content-center my-2 py-2 ' id="section_contact">
			<h1 className="text-center my-2"> <strong className="textColor2 noselect fontSize1 ">{ t('contact') }</strong> </h1>
			
			<div id="contactItemsContainer" className="d-flex pb-2 justify-content-between mt-4">
				<div className="mobileDNone" style={{ width: "9vw" }}></div>
				<div className="d-flex flex-column justify-content-center align-items-center pb-2 contactItem" style={{  }}>
					<strong className="noselect pb-2" style={{ color: "#fff", fontSize: "1.3rem" }}>Whatsapp</strong>
					<div className="py-2">
						<a target="_blank" href="https://api.whatsapp.com/send?phone=5491158288907"  rel="noreferrer" style={{ textDecoration:'none' }}>
							<div className="d-flex borderRadBut backItems p-2 " id="whatsappItem">
								<i className="d-flex p-2 bi bi-whatsapp mx-auto" aria-hidden="true" style={{ color:"#fff",fontSize: "3rem" }}></i>
							</div>
						</a>
					</div>
				</div>
				
				<div className="d-flex flex-column justify-content-center align-items-center pb-2 contactItem" style={{  }}>
					<strong className="noselect pb-2" style={{ color: "#fff", fontSize: "1.3rem" }}>Telegram</strong>
					<div className="py-2">
						<a target="_blank" href="https://t.me/AgCaliva"  rel="noreferrer" style={{ textDecoration:'none' }}>
							<div className="d-flex borderRadBut backItems my-auto p-2 " id="telegramItem">
								<i className="d-flex p-2 bi bi-telegram mx-auto my-auto " aria-hidden="true" style={{ color:"#fff",fontSize: "3rem" }}></i>
							</div>
						</a>
					</div>
				</div>
				
				<div className="d-flex flex-column justify-content-center align-items-center pb-2 contactItem" style={{  }}>
					<strong className="noselect pb-2" style={{ color: "#fff", fontSize: "1.3rem" }}>Discord</strong>
					<div className="py-2">
						<div className="d-flex borderRadBut backItems my-auto p-2 " id="discordItem" onClick={clickDiscord} style={{ cursor: 'pointer' }}>
							<i className="d-flex p-2 bi bi-discord mx-auto my-auto " aria-hidden="true" style={{ color:"#fff",fontSize: "3rem" }}></i>
						</div>
					</div>
				</div>
				<div className="mobileDNone" style={{ width: "9vw" }}></div>
			</div>
		</div>
		
		<div className='d-flex flex-column justify-content-center my-2 py-2 ' id="section_clients">
			<h1 className="text-center my-2"> <strong className="textColor2 noselect fontSize1 ">{ t('clientsAndContrib') }</strong> </h1>
			<Carousel responsive={responsive}
				ssr={true}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={2500}
				removeArrowOnDeviceType={["tablet", "mobile"]}
				containerClass="h-100"
				sliderClass="h-100"
				itemClass=""
				//dotListClass="custom-dot-list-style"
			>
				
				<div className="position-relative h-100">
					<a target="_blank" href="https://www.correoargentino.com.ar/"  rel="noreferrer">
						<div className="w-100 h-100">
							<img src={import.meta.env.BASE_URL+'/clients/Logo_Correo_Argentino.svg'} className="img-fluid w-100 h-100" alt="CorreoArgentino"/>
						</div>
					</a>
				</div>
				
				<div className="position-relative h-100">
					<a target="_blank" href="https://www.transunion.com/"  rel="noreferrer">
						<div className="w-100 h-100">
							<img src={import.meta.env.BASE_URL+'/clients/TransUnion.svg'} className="img-fluid w-100 h-100" alt="TransUnion"/>
						</div>
					</a>
				</div>
				
				<div className="position-relative h-100">
					<a target="_blank" href="https://www.cinemarkhoyts.com.ar/"  rel="noreferrer">
						<div className="w-100 h-100">
							<img src={import.meta.env.BASE_URL+'/clients/cinemark_hoyts_logo.png'} className="img-fluid w-100 h-100" alt="CinemarkHoyts"/>
						</div>
					</a>
				</div>
				
				<div className="position-relative h-100">
					<a target="_blank" href="https://www.freecad.org/"  rel="noreferrer">
						<div className="w-100 h-100">
							<img src={import.meta.env.BASE_URL+'/clients/FreeCAD-wordmark2.svg'} className="img-fluid w-100 h-100" alt="FreeCAD"/>
						</div>
					</a>
				</div>
				
				<div className="position-relative h-100">
					<a target="_blank" href="https://www.harmony.one/"  rel="noreferrer">
						<div className="w-100 h-100">
							<img src={import.meta.env.BASE_URL+'/clients/HarmonyONE2.svg'} className="img-fluid w-100 h-100" alt="Harmony Blockchain"/>
						</div>
					</a>
				</div>
				
			</Carousel>
		</div>
		
	</div>
)
}
