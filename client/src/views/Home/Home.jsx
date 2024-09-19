import { useEffect, useState } from 'react';
import "./Home.css"
import Apertura from "../../components/Apertura/Apertura.jsx";
import Cuerpo1 from '../../components/Cuerpo1/Cuerpo1.jsx';
import Cuerpo2 from '../../components/Cuerpo2/Cuerpo2.jsx';
import { Fade, Zoom } from "react-awesome-reveal";

// import Navbar from "./Navbar.jsx"
import { useTranslation } from 'react-i18next'
import Cuerpo3 from "../../components/Cuerpo3/Cuerpo3.jsx";
import Cuerpo4 from "../../components/Cuerpo4/Cuerpo4.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Bolsa from '../../components/Bolsa/Bolsa.jsx';
import Incaa from '../../components/Incaa/Incaa.jsx';


function Home() {
    const { t } = useTranslation();

    const [faqs, setfaqs] = useState([]);

    useEffect(() => {
        const faqsData = [
            {
                question: t("FAQ.faq1"),
                answer: t("FAQ.ans1"),
                open: false
            },
            {
                question: t("FAQ.faq2"),
                answer: t("FAQ.ans2"),
                open: false
            },
            {
                question: t("FAQ.faq3"),
                answer: t("FAQ.ans3"),
                open: false
            },
            {
                question: t("FAQ.faq4"),
                answer: t("FAQ.ans4"),
                open: false
            }
        ];
        setfaqs(faqsData);
    }, [t]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <div>
                
               
                <Apertura />
                <div className="color-fondo"></div>
                <div className="color-fondo2"></div>

                <Cuerpo2 />

                <Bolsa/>

                {/* <div className="color-fondo2">
                <Cuerpo3 />
                </div> */}

                <Cuerpo4 />
                <Incaa/>

                {/* <FAQ/>

                <Footer/> */}
            {/* <Gallery />
            <Servicio />
            <Metrics />
            <Conclusion /> */}
            <Fade>
                <div className="faqs">
                    <h2 className='faqs-title'>{t("FAQ.faq-title")}</h2>
                    {faqs.map((faq, i) => (
                        <FAQ key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </Fade>
           
            <Footer />
        </div>
    )
}

export default Home