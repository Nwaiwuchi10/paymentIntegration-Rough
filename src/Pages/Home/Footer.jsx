import { Link } from "react-scroll";
import React from "react";
import logo from "../../assets/images/logoBg.png";
function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div style={{ width: "50px" }}>
          <img
            src={logo}
            alt="Logoipsum"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md"
              >
                Testimonials
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="footer--social--icon"></div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        {/* <p className="footer--content">Made with 💖 by Laura</p> */}
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
