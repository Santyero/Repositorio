import * as React from "react";
import "../styles/normalize.scss";
import "../styles/styles.scss";

import TwoSection from "./twoSection";

// markup
const IndexPage = () => {
  return (
    <main>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
