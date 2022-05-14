import * as React from "react";
import "../styles/twoScetion.scss";

function GenerateBlock() {
  return (
    <div className="project">
      <i class="fa-solid fa-folders"></i>
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
