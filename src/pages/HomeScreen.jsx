import React from "react";
import CardApp from "../components/CardApp";
import background from "../assets/back-home.jpg";
import "../css/HomeScreen.css";
import cardsData from "../data/CardsData";

const HomeScreen = () => {
  return (
    <div className="background d-flex h-100 vw-100 position-relative flex-column">
      <div className="h-50 position-relative">
        <img
          src={background}
          alt="Mundo Profesional"
          className="w-100 h-100 top-0 start-0"
        />
        <h4 className="texto mt-5">
          MUNDO PROFESIONAL: Encuentra el profesional que necesitas con la más
          alta calidad de servicio y el mejor precio.
        </h4>
      </div>
      <div className="row justify-content-center">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <CardApp
              titulo={card.titulo}
              contenido={card.contenido}
              imagen={card.imagen}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
