import * as React from "react";
import "../styles/normalize.scss";
import "../styles/firstSection.scss";
import "../styles/styles.scss";


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
