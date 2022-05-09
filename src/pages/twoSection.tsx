import * as React from "react";
import "../styles/twoScetion.scss";

function GenerateBlock() {
  return (
    <div className="gitBlock">
      sasd
    </div>
  );
}

// markup
const TwoSection = () => {
  return (
    <section className="twoSection">
      <div className="gitBlocks">
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
