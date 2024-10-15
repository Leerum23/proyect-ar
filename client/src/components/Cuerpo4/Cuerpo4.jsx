import "./Cuerpo4.css"

import { Fade, Zoom } from "react-awesome-reveal"
import { useTranslation } from "react-i18next";
import image1 from "../../assets/fabbri-2.png";
import image2 from "../../assets/chaya-2.png";
import image3 from "../../assets/camilo-2.png";


import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';


const URL1="https://img.freepik.com/foto-gratis/especialista-contenido-que-trabaja-compania-medios-diseno-grafico-que-selecciona-mejores-imagenes-editoriales-publicaciones-redes-sociales-experto-edicion-fotos-oficina-agencia-publicidad_482257-73457.jpg?ga=GA1.1.1698604554.1709570910&semt=ais_user"


function Cuerpo4() {
    const { t } = useTranslation();
  return (
    <>
         
    <div className="about">

        <div className="about_background-image"></div>

        <div className="about_content">
                      <h2 className="about_title">{t("about.title")}</h2>


                    <div className="flex-container-profiles">
                     
                      <div className="flex-1">
                    <div className="image_container_profile">
                                  <img src={image1} alt="image" className="image_profile"/>
                    
                      </div>
                                      
                      <p className="about_subtitle">{t("about.subtitle")}</p>
                      <div className="about_p">
                      <p className="about_p1">{t("about.text1")}</p><p className="about_p2">{t("about.text2")}</p><p className="about_p3">{t("about.text3")}</p>
                      </div>
                      </div>

                      <div className="flex-1">
                    <div className="image_container_profile">
                                  <img src={image2} alt="image" className="image_profile"/>
                    
                      </div>
                                      
                      <p className="about_subtitle">{t("profile4.subtitle")}</p>
                      <div className="about_p">
                      <p className="about_p1">{t("profile4.text1")}</p><p className="about_p2">{t("profile4.text2")}</p><p className="about_p3">{t("about.text3")}</p>
                      </div>
                      </div>

                      <div className="flex-1">
                    <div className="image_container_profile">
                                  <img src={image3} alt="image" className="image_profile"/>
                    
                      </div>
                                      
                      <p className="about_subtitle">{t("profile3.subtitle")}</p>
                      <div className="about_p">
                      <p className="about_p1">{t("profile3.text1")}</p><p className="about_p2">{t("profile3.text2")}</p><p className="about_p3">{t("about.text3")}</p>
                      </div>
                      </div>
          
          
                      </div>
                              
                                   
              
                </div>
    </div>
       
    </>
  )
}

export default Cuerpo4