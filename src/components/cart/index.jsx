import carticon from "../../icons/cart.svg";

export default function Cart() {
  return (
    <div className="cart__container normal__text">
      <span className="cart__car">Car</span>
      <img src={carticon} alt="cart-icon" className="cart__image" />
      <span className="cart__login">Login</span>
    </div>
  );
}
