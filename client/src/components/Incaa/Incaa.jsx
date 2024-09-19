import { useEffect, useState } from 'react'
import "./Incaa.css"
import { Fade, Zoom } from "react-awesome-reveal";

// import video from "../../assets/video2.mp4";
import { useTranslation } from 'react-i18next'

import image from "../../assets/iconitos2.avif"
import Cuerpo1 from '../Cuerpo1/Cuerpo1';


   const URL1="https://www.youtube.com/embed/Fb6ApjUW8bk?si=cTebLCeX9CodY383"

   

function Incaa() {
   
    const { t } = useTranslation();
    return (
        <div  className='incaa_container'>
            
            {/* <video src={videoBg} autoPlay loop muted playsInline className='background'/> */}
            <div className="incaa-content">
                
                <div className="flex-container-incaa">
                  
                    <div className="bolsa_content1">
                     
                        <Fade>
                            <h1 className='incaa_title_desc'>
                                {t("incaa.title_1")}
                            </h1>
                            <h1 className='incaa_title_desc'>
                                {t("incaa.title_2")}
                            </h1>
                            <h1 className='incaa_title_desc2'>
                                {t("incaa.title_3")}
                            </h1>
                        </Fade>
                        <Fade>
                            <p className='incaa_desc_t'>{t("incaa.intro")}</p>
                        </Fade>
                        
                     
                    </div>

                    <div className="bolsa_content2">
                       
                    <div className="incaa_vid_container">
                       
                       <iframe 
                       width="860" 
                       height="452" 
                       src={URL1} 
                       autoPlay 
                       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>
                  
               </div>
                       
                    </div>
                </div>
              
            </div>
            
    

        </div>
    )
}

export default Incaa