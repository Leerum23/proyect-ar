import "./Cuerpo1.css"

import { Fade, Zoom } from "react-awesome-reveal"
import { useTranslation } from "react-i18next";
import libro from "../../assets/libro3.png";
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';

// Define la animación de rotación
const rotateIn = keyframes`
  from {
    transform: rotatey(0deg);
  }
  to {
    transform: rotatey(360deg);
  }
`;

function Cuerpo1() {
    const { t } = useTranslation();
  return (
    <div className="gift-section">
         <Reveal keyframes={rotateIn} duration={2000} triggerOnce>
    <div className="gift">
        <div className="gift_container">
            <Fade cascade damping={0.1}>
                <h2 className="gift_title">{t("gift.title")}</h2>
                <div className="libro_container">
                    <img src={libro} alt="libro" className="libro"/>
                </div>
                <p className="gift_p">
              
                {t("gift.p2")}
                    <br /><br />
                    {t("gift.p3")}
                    <br /><br />
                    {t("gift.p4")} 
                    <br /><br />
                    {t("gift.p5")} 
                    
                </p>
                
            </Fade>
        </div>
    </div>
        </Reveal>
        </div>
  )
}

export default Cuerpo1