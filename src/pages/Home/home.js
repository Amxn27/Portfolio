import ProjectSlider from "./../../components/projectSlider";
import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

import "./home.scss";
import { ReactComponent as ReactImg } from "./../../assets/images/react.svg";
import { ReactComponent as NodeImg } from "./../../assets/images/node.svg";
import { ReactComponent as MongoImg } from "./../../assets/images/mongo.svg";
import { ReactComponent as JavascriptImg } from "./../../assets/images/javascript.svg";
import { ReactComponent as FigmaImg } from "./../../assets/images/figma.svg";
import { ReactComponent as SassImg } from "./../../assets/images/sass.svg";
import { ReactComponent as Tailwind } from "./../../assets/images/tailwind-css-svgrepo-com.svg";
import { ReactComponent as Html } from "./../../assets/images/html.svg";
import { ReactComponent as Css } from "./../../assets/images/css.svg";
import { ReactComponent as Photoshop } from "./../../assets/images/photoshop.svg";
import { ReactComponent as Vscode } from "./../../assets/images/vscode.svg";
import { ReactComponent as Git } from "./../../assets/images/git.svg";
import { ReactComponent as Java } from "./../../assets/images/java.svg";
import { ReactComponent as Postman } from "./../../assets/images/postman.svg";
import { ReactComponent as Github } from "./../../assets/images/github.svg";
import { ReactComponent as Mysql } from "./../../assets/images/mysql.svg";
import { ReactComponent as Express } from "./../../assets/images/express.svg";
import Development from '../../assets/images/Aman Mulla Web Development.jpg'
import Development2 from '../../assets/images/Aman Mulla Mooc 2.jpg'
import Development3 from '../../assets/images/FrontEnd.png'
import Development4 from '../../assets/images/java.png'
import Development5 from '../../assets/images/javscript.png'
import Development6 from '../../assets/images/problemsolving.png'




const Data = [
  {
    id: 0,
    img: "https://drive.google.com/file/d/1n5wvC9hTJmb-gkf41rANFlCNeDFuIN-u/view?usp=drive_link",
  },
  {
    id: 1,
    img: "https://drive.google.com/file/d/1xUGyzg-bZmsMK-IuVJ5urhbwW2t0O5gc/view?usp=drive_link",
  },
  {
    id: 2,
    img: "https://drive.google.com/file/d/1nKXjLaEKdJRr0jfkEEr9iMaSn9C3n2fS/view?usp=drive_link",
  }
];



function Home() {
  const navigate = useNavigate();
  const Illus = useRef();
  const i = gsap.utils.selector(Illus);
  const tlm = useRef();

  useEffect(() => {
    tlm.current = gsap
      .timeline()
      .fromTo(
        i(".b-one"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#FF605C",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".b-two"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#FFBD44",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".b-three"),
        { fill: "#1E2128", opacity: 0, scale: 0.7 },
        {
          fill: "#00CA4E",
          opacity: 1,
          scale: 1.3,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-one"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-two"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-three"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-four"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-five"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-six"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-seven"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-eight"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        i(".a-nine"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          transformOrigin: "center center",
          repeat: -1,
          yoyo: true,
        }
      );
  });

  const [background, setBackground] = useState("");

  const image = Data.filter((data) => data.id === background).map(
    (filteredData) => filteredData.img
  );

  const nav = () => {
    return navigate("/work"), window.location.reload();
  };

  const Styles = {
    backgroundImage: `url(${image})`,
  };

  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div className="home">
      <div className="home-intro hidden">
        <div className="content">
          <div className="content-tertiary">
            <p>
              Hi there! I'm Aman
            </p>
          </div>
          <div className="content-primary">
            <h1>
              a <span>Frontend Developer</span>
            </h1>
          </div>
          <div className="content-secondary">
            <p>
              As an experienced Full Stack Developer with over 2 years in web
              development and app development, I excel in Both front-end and
              back-end technologies. Skilled in HTML, CSS, JavaScript, React.js,
              Node.js, and more. I've built robust, user-friendly web
              applications as well as mobile applications.
            </p>
          </div>
        </div>

        <div className="hero-icon">
         
        </div>
      </div>
      <div className="tooling hidden">
        <div className="tooling-title">
          <h2>FrontEnd & Tools</h2>
        </div>
        <div className="tooling-box">
        <div className="box-content">
            <div className="box-icon">
              <Html className="icon" />
            </div>
            <div className="box-text">
              <p>HTML</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <Css className="icon" />
            </div>
            <div className="box-text">
              <p>CSS</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <JavascriptImg className="icon" />
            </div>
            <div className="box-text">
              <p>Javascript</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <ReactImg className="icon" />
            </div>
            <div className="box-text">
              <p>React js</p>
            </div>
          </div>
         
          <div className="box-content">
            <div className="box-icon">
              <FigmaImg className="icon" />
            </div>
            <div className="box-text">
              <p>Figma</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <Photoshop className="icon" />
            </div>
            <div className="box-text">
              <p>Photoshop</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <Git className="icon" />
            </div>
            <div className="box-text">
              <p>Git</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <Github className="icon" />
            </div>
            <div className="box-text">
              <p>Github</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <Vscode className="icon" />
            </div>
            <div className="box-text">
              <p>Vs Code</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <SassImg className="icon" />
            </div>
            <div className="box-text">
              <p>Scss</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <Tailwind className="icon" />
            </div>
            <div className="box-text">
              <p>Tailwind</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tooling hidden">
        <div className="tooling-title">
          <h2>Backend & Database</h2>
        </div>
        <div className="tooling-box">
          <div className="box-content">
            <div className="box-icon">
              <NodeImg className="icon" />
            </div>
            <div className="box-text">
              <p>Node</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <MongoImg className="icon" />
            </div>
            <div className="box-text">
              <p>MongoDB</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <Java className="icon" />
            </div>
            <div className="box-text">
              <p>Java</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <Postman className="icon" />
            </div>
            <div className="box-text">
              <p>Postman</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <Mysql className="icon" />
            </div>
            <div className="box-text">
              <p>Mysql</p>
            </div>
          </div>
          <div className="box-content">
            <div className="box-icon">
              <Express className="icon" />
            </div>
            <div className="box-text">
              <p>Express js</p>
            </div>
          </div>
        </div>
      </div>

      <div className="showroom-section hidden">
        <div className="showroom-title">
          <h2>Project's</h2>
        </div>
        <div className="showroom">
          <div className="showroom-background" style={Styles}></div>
          <ProjectSlider setBackground={setBackground} />
        </div>
        <div class="button-wrap">
          <button class="butt" onClick={nav}>
            All Project details
          </button>
        </div>
      </div>


      <div className="featured hidden">
        
        <div className="featured">
  <div className="featured-title">
    <h2>Certificates</h2>
  </div>
  <div className="carousel-container" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
    <div className="featured-box">
      <div className="article">
        <div className="top">
          <p>
            Certificate : <span>Udemy</span>
          </p>
          <img style={{height:"300px", width:"450px"}} src={Development} alt="Development Certificate" />
        </div>
      </div>
    </div>
    <div className="featured-box">
      <div className="article">
        <div className="top">
          <p>
            Certificate : <span>Udemy</span>
          </p>
          <img style={{height:"300px", width:"450px"}} src={Development2} alt="Development Certificate" />
        </div>
      </div>
    </div>
  </div>
  <div className="carousel-container" style={{marginTop:"150px",display:"flex", justifyContent:"space-between", alignItems:"center"}}>
    <div className="featured-box">
      <div className="article">
        <div className="top">
          <p>
            Certificate : <span>HackerRank</span>
          </p>
          <img style={{height:"300px", width:"450px"}} src={Development3} alt="Development Certificate" />
        </div>
      </div>
    </div>
    <div className="featured-box">
      <div className="article">
        <div className="top">
          <p>
            Certificate : <span>HackerRank</span>
          </p>
          <img style={{height:"300px", width:"450px"}} src={Development5} alt="Development Certificate" />
        </div>
      </div>
    </div>
  </div>
  <div className="carousel-container" style={{marginTop:"150px",display:"flex", justifyContent:"space-between", alignItems:"center"}}>
    <div className="featured-box">
      <div className="article">
        <div className="top">
          <p>
            Certificate : <span>HackerRank</span>
          </p>
          <img style={{height:"300px", width:"450px"}} src={Development6} alt="Development Certificate" />
        </div>
      </div>
    </div>
    <div className="featured-box">
      <div className="article">
        <div className="top">
          <p>
            Certificate : <span>HackerRank</span>
          </p>
          <img style={{height:"300px", width:"450px"}} src={Development4} alt="Development Certificate" />
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Home;
