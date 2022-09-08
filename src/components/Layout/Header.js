import { Fragment } from "react";

import HeaderCartButton from '../Layout/HeaderCartButton';

import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MealsApp</h1>
        <HeaderCartButton onClick={props.onCartClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Food on a Table!" />
      </div>
    </Fragment>
  );
};

export default Header;
