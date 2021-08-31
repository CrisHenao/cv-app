import React from "react";
import Header from "../components/Header";
import Illustracion from "../assets/images/dev-illustracion.svg";

export default function MainLayout(props) {
  return (
    <React.Fragment>
      <section className="background__main">
        <header>
          <Header />
        </header>
        <section className="content__main">
          <section className="main__social">
            <span className="main__social--logo twitter"></span>
            <span className="main__social--logo facebook"></span>
            <span className="main__social--logo linkedin"></span>
            <span className="main__social--logo instagram"></span>
          </section>
          <section className="main__information">
            <h4>Hello I'm</h4>
            <h3>Cristian Henao</h3>
            <h5>Software & Web Developer</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              ratione dolorum doloribus reprehenderit sequi. Facilis, amet
              debitis exercitationem magnam reiciendis et consequatur.
            </p>
            <button className="main__information--hire">Hire Me</button>
          </section>
          <section className="main__img">
            <img alt="Illustracion" src={Illustracion} />
          </section>
        </section>
      </section>
      <main>
        <section className="main__container">{props.children}</section>
      </main>
      <footer></footer>
    </React.Fragment>
  );
}
