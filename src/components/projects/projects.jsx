import React from "react";
import Navbar from "../navbar/Navbar";
import "./project.css";
import oldPortfolio from "/assets/portfolio2.png";
import resStore from "/assets/Vite + React - Google Chrome 17-Jan-24 11_44_10 AM.png";
import groceryStore from "/assets/organic_food.png";
import Kfc from "/assets/KFC _ KFC Deals _ KFC Menu - Google Chrome 17-Jan-24 11_13_06 AM.png";
import youtubeClone from "/assets/youtube (2).png";
import nest from "/assets/nest.png";
import valueBox from "/assets/valueBox.png";

function projects() {
  return (
    <>
      <div className="project-container w-full max-w-[85vw] borer  m-auto mt-[5rem]">
        <div className=" flex items-center justify-evenly flex-wrap flex-row-reverse my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src={nest} alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className="tracking-widest font-bold text-2xl mb-4">
              Nest Grocery Store
            </h1>
            <p className="text-sm">
              A responsive grocery store web application built with React.js,
              featuring real-time product fetching from a JSON server, secure
              login/signup using Firebase, and a seamless add-to-cart
              functionality. Designed with a user-friendly interface, it ensures
              an intuitive shopping experience across all devices. "{" "}
            </p>
            <br />
            <p className="tracking-widest">
              <span className="tech-stack text-[#0EA4EC] font-extrabold">
                Tech Stack :{" "}
              </span>{" "}
              React.js, Tailwind CSS, Firebase
            </p>
            <div className="btns flex ">
              <a
                href="https://nest-rmhi-git-main-hamza-abbasis-projects.vercel.app/"
                target="_blank"
              >
                <div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">
                  preview
                </div>
              </a>
              <div className="project-btn bg-[#171E25] hover:bg-[#434446]">
                github
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-evenly flex-wrap my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src={valueBox} alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className="tracking-widest font-bold text-2xl mb-4">
              Value Box Printing
            </h1>
            <p className="text-sm">
              Value Box Printing is a responsive website for custom box
              printing, offering a wide range of packaging solutions. Users can
              browse products, request quotes, upload artwork, and customize
              sizes, materials, and finishes. With interactive forms, free
              design services, and dedicated support, it ensures a seamless and
              user-friendly experience for all packaging needs.
            </p>
            <br />
            <p className="tracking-widest">
              <span className="tech-stack text-[#0EA4EC] font-extrabold">
                Tech Stack :{" "}
              </span>{" "}
              React.js, Tailwind CSS
            </p>
            <div className="btns flex ">
              <a href="https://valueboxprinting.vercel.app/" target="_blank">
                <div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">
                  preview
                </div>
              </a>
              <div className="project-btn bg-[#171E25] hover:bg-[#434446]">
                github
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" flex items-center justify-evenly flex-wrap my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src={oldPortfolio} alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className="tracking-widest font-bold text-2xl mb-4">
              old portfolio
            </h1>
            <p className="text-sm">
              User Authentication, Create Post, Edit Post, Delete Post, Share
              Post, Add Post to or remove from Favorite, Theme Toggle.{" "}
            </p>
            <br />
            <p className="tracking-widest">
              <span className="tech-stack text-[#0EA4EC] font-extrabold">
                Tech Stack :{" "}
              </span>{" "}
              html, css, javascript
            </p>
            <div className="btns flex ">
              <a
                href="https://techinalhamza.github.io/hamabb.github.io/"
                target="_blank"
              >
                <div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">
                  preview
                </div>{" "}
              </a>
              <a href="https://github.com/techinalhamza/hamabb.github.io">
                <div className="project-btn bg-[#171E25] hover:bg-[#434446]">
                  github
                </div>
              </a>
            </div>
          </div>
        </div> */}
        <div className=" flex items-center justify-evenly flex-wrap flex-row-reverse my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src={resStore} alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className="tracking-widest font-bold text-2xl mb-4">
              Res Store
            </h1>
            <p className="text-sm">
              Introducing our latest project: a top-tier e-commerce site built
              with HTML, CSS, and JavaScript. Its standout feature? Seamless
              adaptability across all devices, ensuring a consistent and
              engaging experience for every visitor, regardless of their
              preferred device.{" "}
            </p>
            <br />
            <p className="tracking-widest">
              <span className="tech-stack text-[#0EA4EC] font-extrabold">
                Tech Stack :{" "}
              </span>{" "}
              html, css, javascript
            </p>
            <div className="btns flex ">
              <a
                href="https://techinalhamza.github.io/redstore.github.io/"
                target="_blank"
              >
                <div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">
                  preview
                </div>
              </a>
              <div className="project-btn bg-[#171E25] hover:bg-[#434446]">
                github
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-evenly flex-wrap my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src={groceryStore} alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className="tracking-widest font-bold text-2xl mb-4">
              grocery store
            </h1>
            <p className="text-sm">
              Introducing our latest project: a top-tier e-commerce site built
              with HTML, CSS, and JavaScript. Its standout feature? Seamless
              adaptability across all devices, ensuring a consistent and
              engaging experience for every visitor, regardless of their
              preferred device.{" "}
            </p>
            <br />
            <p className="tracking-widest">
              <span className="tech-stack text-[#0EA4EC] font-extrabold">
                Tech Stack :{" "}
              </span>{" "}
              html, css, javascript
            </p>
            <div className="btns flex ">
              <a
                href="https://techinalhamza.github.io/organic-food.github.io/"
                target="_blank"
              >
                <div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">
                  preview
                </div>
              </a>
              <div className="project-btn bg-[#171E25] hover:bg-[#434446]">
                github
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center flex-row-reverse justify-evenly flex-wrap my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src={Kfc} alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className="tracking-widest font-bold text-2xl mb-4">kfc</h1>
            <p className="text-sm">
              Excited to unveil a fully responsive KFC clone, meticulously
              crafted with HTML, CSS, and JavaScript. From mouthwatering menus
              to seamless checkout, it mirrors the original experience.
              Responsive design ensures consistency across all devices, offering
              users a delightful browsing experience.{" "}
            </p>
            <br />
            <p className="tracking-widest">
              <span className="tech-stack text-[#0EA4EC] font-extrabold">
                Tech Stack :{" "}
              </span>{" "}
              html, css, javascript
            </p>
            <div className="btns flex ">
              <a
                href="https://techinalhamza.github.io/kfc.github.io/"
                target="_blank"
              >
                <div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">
                  preview
                </div>
              </a>
              <div className="project-btn bg-[#171E25] hover:bg-[#434446]">
                github
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-evenly flex-wrap my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src={youtubeClone} alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className="tracking-widest font-bold text-2xl mb-4">
              Youtube clone
            </h1>
            <p className="text-sm">
              Hey folks, I've recently built a YouTube clone using HTML, CSS,
              and JavaScript! It's a responsive platform that mimics the
              functionality and feel of YouTube, allowing users to browse and
              watch videos seamlessly across all devices. Give it a try and
              experience the familiar YouTube interface in a whole new way!"{" "}
            </p>
            <br />
            <p className="tracking-widest">
              <span className="tech-stack text-[#0EA4EC] font-extrabold">
                Tech Stack :{" "}
              </span>{" "}
              html, css, javascript
            </p>
            <div className="btns flex ">
              <a
                href="https://techinalhamza.github.io/qutube.github.io/"
                target="_blank"
              >
                <div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">
                  preview
                </div>
              </a>
              <div className="project-btn bg-[#171E25] hover:bg-[#434446]">
                github
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default projects;
