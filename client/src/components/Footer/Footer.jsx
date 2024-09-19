import { useTranslation } from 'react-i18next';
import "./Footer.css"
import { Fade } from "react-awesome-reveal"

function Footer() {
  const { t } = useTranslation();

  return (
    <>
    <div className='color-fondo-footer'></div>
    <div className='footer_container'>
      <Fade>
        
        <p>2024 &copy; {t("footer.copy")}</p>
      </Fade>
    </div>
    </>
  )
}

export default Footer