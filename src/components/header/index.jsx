import Burger from "../burger";
import Cart from "../cart";

export default function Header() {
  return (
    <header className="header__container">
      <Burger />
      <span className="header__heading__text heading__text">alpine</span>
      <Cart />
    </header>
  );
}
