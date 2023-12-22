import { Fragment } from "react"
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Shoe Board</h1>
        <HeaderCartButton onCartClick={props.onCartClick} />
      </header>
    </Fragment>
  );
};

export default Header;
