import React from "react";
import "./Home.css";
import { FaFacebook, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import Typical from "react-typical";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
const Home = () => {
  const phoneNumber = +923244945592;
  return (
    <>
      <div className="hero flex w-full max-w-[85vw]  b-slate-800 ">
        <div className="hero-content   h-full  borer flex justify-center flex-col gap-2 ">
          <div className="social flex  text-[#0EA4EC] gap-2 text-sm">
            <Link
              to="https://www.facebook.com/profile.php?id=100027222904611"
              target="_blank"
            >
              <FaFacebook className="social-icons" />
            </Link>
            <Link
              to="https://www.instagram.com/hamza_abbassi49/"
              target="_blank"
            >
              <RiInstagramFill className="social-icons" />
            </Link>
            <Link
              to={`https://api.whatsapp.com/send?phone=923174470253`}
              target="_blank"
            >
              {" "}
              <RiWhatsappFill className="social-icons" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/hamza-abbasi-38b9922b9/"
              target="_blank"
            >
              {" "}
              <FaLinkedin className="social-icons" />
            </Link>
            <Link to="https://github.com/hamzaabbasi210" target="_blank">
              {" "}
              <FaSquareGithub className="social-icons" />
            </Link>
          </div>
          <h6 className="text-xl">hello, it's me</h6>
          <h1 className="text-[3rem] font-bold">hamza abbasi</h1>
          <h4 className="text-xl">
            <Typical
              className="text-[#0EA4EC]"
              steps={[
                "and i'am  web developer",
                5000,
                "and i'am  web designer",
                5000,
                "and i'am  UiUx designer",
                5000,
                "and i'am  react developer",
                5000,
              ]}
              loop={Infinity}
            />
          </h4>
          <p>
            I Specialize In Creating Interactive Websites With Web Animations,
          </p>
          <div className="button">
            <Link to="/contact">
              <button className="hero-btn hire">Hire Me</button>
            </Link>

            <Link to="/projects">
              {" "}
              <button className="hero-btn cv bg-[#0EA4EC] ">My work</button>
            </Link>
          </div>
        </div>
        <div className="hero-img flex items-center justify-center order   ">
          <div className="img-container">
            <div className="img"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
