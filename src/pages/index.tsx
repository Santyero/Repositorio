import * as React from "react";
import "../styles/normalize.scss";
import "../styles/firstSection.scss";
import "../styles/styles.scss";

import TwoSection from "./twoSection";

let name = generateNames();
function generateNames() {
  const names = [
    "Programador",
    "Desenvolvedor",
    "Front-end",
    "Back-end",
    "Full-stack",
    "Mobile",
    "Web",
    "UX",
    "UI",
    "Design",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

// markup
const IndexPage = () => {
  setTimeout(() => {
    name = generateNames();
  }, 1000);
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
      <title>Portifolio Santyero</title>
      <section className="firstSection">
        <div className="name">
          <h1>Santyero Borges</h1>
          <h2 className="ramdomizerName">{name}</h2>
        </div>
      </section>
      <section className="firstSection">
        
      </section>
      {/* <section>

      </section> */}
    </main>
  );
};

export default IndexPage;
