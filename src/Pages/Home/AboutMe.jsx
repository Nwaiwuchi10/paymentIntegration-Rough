import about from "../../assets/images/about.png";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div
        className="hero--section--img"
        // className="about--section--img"
      >
        {/* <Fade left> */} <img src={about} alt="About Me" />
        {/* </Fade> */}
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a distinguished professional who has earned a certification
            validating their exceptional expertise in cryptocurrencies and the
            broader blockchain industry.
          </p>
          <p className="hero--section-description">
            I started investing in crypto in late 2009. The more I learnt about
            the technology that crypto is built on top of (blockchain), the more
            I began to understand what profound impact this new technology would
            have on the world. From my hands on experience using crypto, needing
            to use exchanges, setting up my own personal wallets and more.
            {/* I
            learnt that I could help others get started with crypto so at the
            start of 2013 I began teaching crypto and have really enjoyed being
            able to help my students understand more about crypto and develop
            their skills. I look forward to teaching many more students so
            whether you just want help getting started or you need help with
            more advanced crypto tasks, don't hesitate to book a lesson. */}
          </p>
        </div>
      </div>
    </section>
  );
}
