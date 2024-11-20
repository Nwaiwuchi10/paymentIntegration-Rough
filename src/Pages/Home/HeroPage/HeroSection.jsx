import woman from "../../../assets/images/download.png";
import "./Hero.css";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { BiLogoTelegram } from "react-icons/bi";
import whatsapp from "../../../assets/images/whatsapp.png";
export default function HeroSection() {
  const phoneNumber = "+12013782770";
  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Laura Walsh Morgan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Crypto Trading Expert
            </span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            Laura Walsh Morgan owns ELITE GLOBE Which provides investment
            advisory service for clients.
            {/* I am a crypto trading expert who possess a deep understanding on
            different cryptocurrencies, market dynamics, technical analysis,
            risk management, and trading strategies with over 15years of
            experience. */}
          </p>
          <div className="icons-div">
            <div>
              <span>
                <SiGmail />
              </span>
              <span>laurawalshmorgan@gmail.com</span>{" "}
            </div>
            <div>
              <span>
                <BiLogoTelegram />
              </span>
              <span>@Laurawalshmorgan</span>{" "}
            </div>
            <div>
              <span>
                <IoCall />
              </span>
              <span>+12013782770</span>{" "}
            </div>
          </div>
        </div>

        <button className="btn btn-primary" onClick={WhatsappClick}>
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src={woman} alt="Hero Section" />
      </div>
      <div className="whatsapp-img-div">
        <div className="whatsapp-img-size" onClick={WhatsappClick}>
          <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        </div>{" "}
      </div>
    </section>
  );
}
