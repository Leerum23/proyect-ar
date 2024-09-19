import "./Navbar.css"
import logo from "../../assets/Proyectar_logo_transparente.png"
import { Fade } from "react-awesome-reveal";
import i18n from "../../i18n";
import arg from "../../assets/global.png"
import usa from "../../assets/global.png"
import { useState } from 'react';

function Navbar() {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className='nav_container'>
      <Fade>
        <div className='logo_container'>
          <img className="nav_img" src={logo} alt="Logo" />
          <p className='nav_p'></p>
        </div>
        <div>
        {language === 'es' ? (
            <p
              className={`nav_btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              
              <img src={usa} alt="" width={30} className="btn-p" />
              
              <span className="idioma">English</span>
            </p>
          ) : (
            <p
              className={`nav_btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('es')}
            >
              
              <img src={arg} alt="" width={30} className="btn-p" />
              <span className="idioma">Español</span>
            </p>
          )}
        </div>
      </Fade>
    </div>
  );
}

export default Navbar;