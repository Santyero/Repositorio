import * as React from "react";
import "../styles/normalize.scss";
import "../styles/styles.scss";

import TwoSection from "./twoSection";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Portifolio Santyero</title>
      <section className="firstSection">
        <div className="">
          <h1>
            Santyero Santos
          </h1>
        </div>
      </section>
      <TwoSection />
    </main>
  );
};

export default IndexPage;
