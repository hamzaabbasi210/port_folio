import React from "react";
import "./Skills.css";
import html from "/assets/html-d8484e8b.png";
import css from "/assets/css-f0ecea9c.png";
import js from "/assets/js-ad87d233.png";
import react from "/assets/react-js-icon-1d5b7448.png";
import tailwind from "/assets/tailwind-b1493352.png";
import git from "/assets/git-f810e4da.png";
import bootstrap from "/assets/bootstrap-icon-css.png";
import wordpress from "/assets/wordpress.png";
import shopify from "/assets/shopify.png";
import expressJs from "/assets/express.png";
import nodeJs from "/assets/nodejs.png";
import mongooDB from "/assets/mongoodb.png";
function Skills__Card() {
  let skillsData = [
    { id: 1, title: "html", img: html },
    { id: 2, title: "css", img: css },
    { id: 3, title: "javascript", img: js },
    { id: 5, title: "tailwind", img: tailwind },
    { id: 6, title: "bootstrap", img: bootstrap },
    { id: 8, title: "wordpress", img: wordpress },
    { id: 9, title: "Shopify", img: shopify },
    { id: 12, title: "MongooDB", img: mongooDB },
    { id: 10, title: "Express Js", img: expressJs },
    { id: 4, title: "react", img: react },
    { id: 11, title: "Node Js", img: nodeJs },
    { id: 7, title: "git", img: git },
  ];

  return (
    <>
      <div className="skills-items  m-auto gap-5 ">
        {skillsData.map((val) => (
          <div
            key={val.id}
            className="skill-card transition-all  flex flex-col items-center bg-[#242D3A] justify-between pt-[1rem] pb-[.5rem] rounded"
          >
            <img src={val.img} alt="img" className="w-[6rem]" />
            <h1>{val.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills__Card;
