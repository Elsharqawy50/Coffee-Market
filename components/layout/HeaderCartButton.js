import React from "react";
import { useRouter } from "next/router";
import CartIcon from "../Icons/CartIcon";
import classes from "./HeaderCartButton.module.scss";

const HeaderCartButton = () => {
  const router = useRouter();

  return (
    <button
      className={`${classes.button} ${
        router.pathname === "/cart" ? classes.active : ""
      }`}
    >
      <CartIcon />
      <span className="ps-2">Your Cart</span>
      <span className={`${classes.badge}`}>0</span>
    </button>
  );
};

export default HeaderCartButton;
