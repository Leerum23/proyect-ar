import { useEffect, useState } from 'react'
import "./Apertura.css"
import { Fade, Zoom } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
// import video from "../../assets/video2.mp4";
import { useTranslation } from 'react-i18next'
import Navbar from "../Navbar/Navbar";
import image from "../../assets/iconitos2.avif"
import Cuerpo1 from '../Cuerpo1/Cuerpo1';


   const URL1="https://www.youtube.com/embed/aOyNoGprZTg?si=cTebLCeX9CodY383"

   

function Apertura() {
   
    const { t } = useTranslation();
    return (
        <div  className='aper_container'>
            
            {/* <video src={videoBg} autoPlay loop muted playsInline className='background'/> */}
            <div className="content">
                <Navbar />
                <div className="flex-container">
                  
                    <div className="aper_content1">
                        <div className='flex-superior'>
                        <Fade>
                            <div className='flex-superior-title'>
                            <h1 className='title_desc'>
                                {t("Apertura.title_1")}
                            </h1>
                            <h1 className='title_desc'>
                                {t("Apertura.title_2")}
                            </h1>
                            <h1 className='title_desc2'>
                                {t("Apertura.title_3")}
                            </h1>
                            </div>
                        </Fade>
                        <Fade>
                            <p className='desc_t'>{t("Apertura.intro")}</p>
                        </Fade>
                        </div>
                        <div className='flex-inferior'>
                                 <button className='aper_btn'>
                                            
                                    <Link to="/terms">{t("Apertura.button")}</Link>
                                        
                                    </button>

                                    <button className='aper_btn'>
                                        
                                        <a target='_blank' rel='noreferrer' href="https://forms.gle/gQYSbwzTnnrXD7YM9">{t("Apertura.button2")}</a>
                                    
                                </button>
                        </div>
                    </div>

                    <div className="aper_content2">
                       
                    <div className="program_image_container">
                    <img src={image} alt="image" className="aper_image"/>
                  </div>
                       
                    </div>
                </div>
              
            </div>
            
    

        </div>
    )
}

export default Apertura