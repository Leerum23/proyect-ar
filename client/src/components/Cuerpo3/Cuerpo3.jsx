import "./Cuerpo3.css"

import { Fade, Zoom } from "react-awesome-reveal"
import { useTranslation } from "react-i18next";
import libro from "../../assets/libro3.png";
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';

const URL1="https://blog.hootsuite.com/wp-content/uploads/2022/10/free-video-editing-software-10.png"
const URL2="https://root-infotech.com/wp-content/uploads/2024/05/stripe-security-white.png"

function Cuerpo3() {
    const { t } = useTranslation();
  return (
    <div className="resumen-section">
         
    <div className="resumen">
        <div className="res_container">
           
                <h2 className="res_title1">{t("brief.top")}</h2>
                <h2 className="res_title2 gradient_text">{t("brief.title1")}</h2>
                <h2 className="res_title2_1 gradient_text">{t("brief.title2")}</h2>
                <h2 className="res_title3">{t("brief.bajada")}</h2>
                <div className="video_container">
                    <img src={URL1} alt="video" className="video"/>
                </div>

                <Zoom>
                <p className="res_p">
                 {t("brief.item1")}
                    <br /><br />
                 {t("brief.item2")}
                    <br /><br />
                    {t("brief.item3")}
                    <br /><br />
                    {t("brief.item4")}
                    <br /><br />
                    {t("brief.item5")}
                    {/* <span className="serv-span">{t("serv.span2")}</span> */}
                </p>
                </Zoom>
                
                <p className="precio">{t("brief.precio")}</p>
                <p className="tachado">{t("brief.precio2")}</p>

                <button className='aper_btn'>
                    
                        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/fraancastro_/">{t("Apertura.button")}</a>
                    
                </button>


                <div className="payment_container">
                    <img src={URL2} alt="video" className="payment"/>
                </div>

            
        </div>
    </div>
        
    </div>
  )
}

export default Cuerpo3