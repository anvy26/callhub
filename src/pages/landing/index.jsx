import Button from "../../components/button";
import Header from "../../components/header";
import goggles from "../../icons/goggles.png";
import left from "../../icons/left.svg";
import right from "../../icons/right.svg";
import down from "../../icons/down.svg";
import Card from "../../components/card";
import belt from "../../icons/belt.png";
import parfum from "../../icons/parfum.png";
import gloves from "../../icons/gloves.png";
import coat from "../../icons/coat.png";
import pant from "../../icons/pant.png";
import shoe from "../../icons/shoes.png";
import sock from "../../icons/socks.png";
import gg2 from "../../icons/goggles2.png";
import hat from "../../icons/hat.png";

const grid = [
  {
    src: belt,
    heading: "Cintúron de Cuero Negro",
    subheading: "$3,770.00 MXN",
    button_text: "Comprar",
    width: "252px",
  },
  {
    src: parfum,
    heading: "Perfume Negro",
    subheading: "$3,770.00 MXN",
    button_text: "Comprar",
    width: "204px",
  },
  {
    src: gloves,
    heading: "Guantes de Cuero Negro",
    subheading: "$3,770.00 MXN",
    button_text: "Comprar",
    width: "204px",
  },
  {
    src: coat,
    heading: "Saco Negro",
    subheading: "$3,770.00 MXN",
    button_text: "Comprar",
    width: "219px",
  },
  {
    src: pant,
    heading: "Pantalon Negro",
    subheading: "$3,770.00 MXN",
    button_text: "Comprar",
    width: "130px",
  },
  {
    src: shoe,
    heading: "Zapatos Negro",
    subheading: "$3,770.00 MXN",
    button_text: "Comprar",
    width: "200px",
  },
  {
    src: sock,
    heading: "Calcetines Negro",
    subheading: "$3,770.00 MXN",
    button_text: "Comprar",
    width: "136px",
  },
  {
    src: gg2,
    heading: "Lentes Negro",
    subheading: "$3,770.00 MXN",
    button_text: "Comprar",
    width: "221px",
  },
  {
    src: hat,
    heading: "Sombrero Negro",
    subheading: "$3,770.00 MXN",
    button_text: "Comprar",
    width: "178px",
  },
];

export default function Landing() {
  return (
    <div className="landing__container">
      <Header />
      <div className="hero__section__container">
        <div className="hero__section__content">
          <div className="hero_section__text">
            <div className="hero_section__text__content">
              <div className="hero_section__text__content__first heading__text">
                Kasia Aviator
              </div>
              <div className="hero_section__text__content__second normal__text">
                Imagina unos lentes de sol absolutamente impresionantes,
                diseñados para aquellos que buscan una combinación perfecta
                entre estilo y funcionalidad
              </div>
              <div className="hero_section__text__content__third">
                <div>
                  <span>Precio habitual: </span>
                  <span className="cross__line subheading__text">
                    $4,420.00 MXN
                  </span>
                </div>
                <div>
                  <span>Precio de oferta: </span>
                  <span className="subheading__text">$3,770.00 MXN</span>
                </div>
              </div>
              <Button text="Comprar" />
            </div>
          </div>
          <div className="hero__section__carousal">
            <img
              src={goggles}
              alt="goggles"
              className="hero__section__carousal__img"
            />
            <div className="carousal__navigation">
              <img src={left} alt="left" />
              <span>Imagen 1</span>
              <img src={right} alt="right" />
            </div>
          </div>
        </div>
        <div className="hero__section__extra">
          <img src={down} />
          <span>Detalles del producto</span>
        </div>
      </div>
      <div className="main__section">
        <div className="main__section__category">
          <span className="normal__text">Fashion</span>
          <span className="normal__text main__section__category__text">
            Travel
          </span>
          <span className="normal__text">Every Gay</span>
        </div>
        <div className="main__grid grid__container">
          {grid.map((item) => (
            <div className="grid__item">
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
