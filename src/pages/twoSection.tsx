import * as React from "react";
import "../styles/twoScetion.scss";

function GenerateBlock() {
  return (
    <div className="project">
      <a className="title" href="#aa" >
        <i className="fa-solid fa-folder"></i>
        <h3 className="nameProject">Project</h3>
      </a>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        consectetur, nisl eget congue consectetur, nisl nunc egestas purus, eu
        tincidunt nisl nunc eget purus.
      </p>
    </div>
  );
}

// markup
const TwoSection = () => {
  return (
    <section className="twoSection">
      <div className="gitProjects">
        <GenerateBlock />
        <GenerateBlock />
        <GenerateBlock />
        <GenerateBlock />
        <GenerateBlock />
        <GenerateBlock />
        <GenerateBlock />
        <GenerateBlock />
      </div>
    </section>
  );
};

export default TwoSection;
