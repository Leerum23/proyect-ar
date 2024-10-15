import "./Cuerpo2.css"

import foto1 from "../../assets/numero_1.png";
import foto2 from "../../assets/numero_2.png";
import foto3 from "../../assets/numero_3.png";

import { Fade, Zoom } from "react-awesome-reveal"
import { useTranslation } from "react-i18next";
import image from "../../assets/libro3.png";
import silla from "../../assets/proyectar-imagen.png";
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';


function Cuerpo2() {
    const { t } = useTranslation();
  return (
    <>
         
    <div className="program">

    <div className="program_background-image"></div>

    <div className="program_content">

    <h2 className="card_main_title">{t("prog.title")}</h2>
    <p className="card_main_subtitle">{t("prog.subtitle_1")}</p>
    <p className="card_main_subtitle-posta">{t("prog.subtitle_2")}</p>

                    <div className="program_image_container">
                    <img src={silla} alt="image" className="silla_image"/>
                  </div>

        
        <h2 className="card_main_title">{t("prog.title1")}</h2>
        <p className="card_main_subtitle">{t("prog.subtitle1")}</p>
        
        <div className="card_container">
            <Fade  damping={0.1}>

                <div className="card" >
                <div className="program_image_container">
                    <img src={foto1} alt="image" className="program_image"/>
                </div>
                <h3 className="card_title">{t("prog.card_module1")}</h3>
                <h4 className="card_subtitle">{t("prog.card_title1")}</h4>
              
                </div>

                <div className="card" >
                <div className="program_image_container">
                    <img src={foto2} alt="image" className="program_image"/>
                </div>
                <h3 className="card_title">{t("prog.card_module2")}</h3>
                <h4 className="card_subtitle">{t("prog.card_title2")}</h4>
                
                </div>

                <div className="card" >
                <div className="program_image_container">
                    <img src={foto3} alt="image" className="program_image" />
                </div>
                <h3 className="card_title">{t("prog.card_module3")}</h3>
                <h4 className="card_subtitle">{t("prog.card_title3")}</h4>
             
                </div>

                

               

               

                
              
            </Fade>

        </div>
        </div>
    </div>
       
    </>
  )
}

export default Cuerpo2