import React from "react";
import project1 from "../img/1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";

function Textprojects() {
  return (
    <div className="readme">
      <div className="contener-projects">
        <h1>My projects:</h1>
      </div>
      <div className="content-projects">
        <div>
          <p>Project 1</p>
          <div className="box-project">
            <a href="https://lukaszprotosawicki.github.io/New-Beginnings-Projects/project4/">
              <img className="size-img" src={project1} alt="" />
            </a>
          </div>
        </div>
        <div>
          <p>Project 2</p>
          <div className="box-project">
            <a href="https://lukaszprotosawicki.github.io/New-Beginnings-Projects/project3/">
              <img className="size-img" src={project2} alt="" />
            </a>
          </div>
        </div>
        <div>
          <p>Project 3</p>
          <div className="box-project">
            <a href="https://lukaszprotosawicki.github.io/New-Beginnings-Projects/project1/">
              <img className="size-img" src={project3} alt="" />
            </a>
          </div>
        </div>
        <div>
          <p>Project 4</p>
          <div className="box-project"></div>
        </div>
      </div>
    </div>
  );
}

export default Textprojects;
