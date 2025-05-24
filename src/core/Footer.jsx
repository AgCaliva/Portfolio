import React, { useEffect} from 'react'

export default function Footer(){

  useEffect(() => {
  }, [])
  
  
  return (
		<div id="Footer" className="backPry">
			<div id="letrasfoot" className="py-2 d-flex justify-content-center align-items-center noselect" >
					<strong className="textColor2" style={{ }}>Agustin Caliva - AgCaliva</strong>
					<strong className="textColor2 invisible" style={{ }}>_</strong>
					<strong className="textColor2" style={{ }}>2025</strong>
			</div>
			<div id="iconsfoot" className="d-flex pb-2 justify-content-center">
				<a target="_blank" href="https://www.linkedin.com/in/agustin-caliva-351b95266/"  rel="noreferrer" className=" mx-3 ">
					<img id="imgfooter1" src={import.meta.env.BASE_URL+'/LI-In-Bug-crop.png'} className="img-fluid maxHFooter" alt="Linkedin"/>
				</a>
				<a target="_blank" href="https://api.whatsapp.com/send?phone=5491158288907"  rel="noreferrer" className=" mx-3">
					<img src={import.meta.env.BASE_URL+'/WhatsApp_Logo_1_nofondo_menosmargen2.png'} className="img-fluid maxHFooter" alt="Whatsapp" />
				</a>
				<a target="_blank" href="https://github.com/AgCaliva"  rel="noreferrer" className=" mx-3">
					<img src={import.meta.env.BASE_URL+'/github-mark-white.png'} className="img-fluid maxHFooter" alt="Github" />
				</a>
			</div>
		</div>
  )

}
