import cart from "../../icons/cart.svg";
import Button from "../button";

export default function Card(props) {
  return (
    <div className="card__container">
      <img src={cart} alt="cart-icon" className="card__cart__icon" />
      <div className="card__image__placeholder">
        <img
          style={{ width: props.width }}
          src={props.src}
          className="card__image card__container__item"
        ></img>
      </div>
      <div className="card__extras">
        <div className="heading__text card__container__item card__extras__heading">
          <span>{props.heading} </span>
        </div>
        <div className="subheading__text card__container__item card__extras__subheading">
          <span>{props.subheading}</span>
        </div>
        <Button
          classname="card__button card__container__item"
          text={props.button_text}
        />
      </div>
    </div>
  );
}
