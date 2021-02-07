import React from "react";

function Readme() {
  return (
    <div className="readme">
      <div>
        <h1>
          Hi there{" "}
          <img
            src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif"
            width="30px"
            alt=""
          />
          <p></p>
          My name is Lucas. 😁
        </h1>

        <div>
          <img
            className="reactgif"
            align="right"
            width="300px"
            alt="GIF"
            src="https://uploads.toptal.io/blog/image/92137/toptal-blog-image-1455717817638-f1c9424752a145ebf97219ec7a2d6cca.gif"
          />

          <p>
            Participation in the course Front-end Developer in
            <a className="img-link" href="https://infoshareacademy.com">
              infoShare Academy.
            </a>
          </p>
          <p>
            Portfolio linkedin:
            <a
              className="img-link"
              href="https://www.linkedin.com/in/%C5%82ukasz-protosawicki-22473783/"
            >
              lprotosawicki
            </a>
          </p>
          <p>
            Github Repository:
            <a
              className="img-link"
              href="
                https://github.com/lukaszprotosawicki"
            >
              lprotosawicki
            </a>
          </p>
          <p>
            {" "}
            👨‍💻 I’m currently developing my programming skills, staying focused
            on perfecting:
          </p>
          <div className="skills">
            <p>
              <img
                src="https://img.shields.io/badge/Markup_Language-HTML5-%235d8239?logo=HTML5"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Style_Sheet_Language-CSS3-%235d8239?logo=CSS3&logoColor=blue"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Language-JavaScript-%235d8239?logo=JavaScript"
                alt=""
              />
              <img
                src="              https://img.shields.io/badge/Framework-React-%235d8239?logo=React&logoColor=aqua"
                alt=""
              />
              <img
                src="              https://img.shields.io/badge/Runtime_Enviroment-Node.js-%235d8239?logo=Node.js"
                alt=""
              />
              <img
                src="              https://img.shields.io/badge/Version_Control-Git-%235d8239?logo=Git"
                alt=""
              />

              <img
                src="              https://img.shields.io/badge/Database-Firebase-%235d8239?logo=Firebase"
                alt=""
              />
              <img
                src="              https://img.shields.io/badge/Issue_tracking-JIRA-%235d8239?logo=JIRA&logoColor=blue"
                alt=""
              />
              <img
                src="              https://img.shields.io/badge/Agile_framework-Scrum-%235d8239?logo="
                alt=""
              />
              <img
                src="              https://img.shields.io/badge/Tools-REST_API-%235d8239?logo="
                alt=""
              />
            </p>
            <p>
              ⚡ Love playing the Games, 🏋️ CrossFighter, 🏎️ Moto GP and eating
              🥘 Paella.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Readme;
