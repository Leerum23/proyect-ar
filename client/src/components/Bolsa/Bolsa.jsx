import "./Bolsa.css"

import { Fade, Zoom } from "react-awesome-reveal"
import { useTranslation } from "react-i18next";
import image from "../../assets/calendario2.png";
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';


const URL1="https://img.freepik.com/vector-premium/maletin-explotacion-mano-hombre-negocios-diseno-plano-ilustracion-vectorial_545793-313.jpg?ga=GA1.1.1698604554.1709570910&semt=ais_user"


function Bolsa() {
    const { t } = useTranslation();
  return (
    <>
         
    <div className="bolsa">

        <div className="bolsa_background-image"></div>

        <div className="bolsa_content1">
                          
                      <h2 className="bolsa_title"><span className="bolsa_title_1">{t("bolsa.title")}</span></h2>
                      <h2 className="bolsa_titlee"><span className="bolsa_title_2">{t("bolsa.title2")}</span></h2>
                      <p className="bolsa_subtitle">{t("bolsa.text")}</p>
                        <br></br>
                        <p className="bolsa_text2"><a href="https://forms.gle/gQYSbwzTnnrXD7YM9" >{t("bolsa.text2")}</a></p>
                </div>
                      
                  <div className="bolsa_content2">
                  <div className="program_image_container">
                    <img src={image} alt="image" className="bolsa_image"/>
                  </div>
                  </div>
                              
                            
                            
              
    </div>
       
    </>
  )
}

export default Bolsa