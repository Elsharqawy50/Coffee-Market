import React from "react";
import { useRouter } from "next/router";
import CartIcon from "../Icons/CartIcon";
import classes from "./HeaderCartButton.module.scss";
import { useSelector } from "react-redux";

const HeaderCartButton = () => {
  const router = useRouter();
  const cartItems = useSelector((state)=>state.cartItems.items)

  const badgeNumber = cartItems.reduce((curNum, item) => {
    return curNum + item.amount
  },0)

  return (
    <button
      className={`${classes.button} ${
        router.pathname === "/cart" ? classes.active : ""
      }`}
    >
      <CartIcon />
      <span className="ps-2">Your Cart</span>
      <span className={`${classes.badge}`}>{badgeNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
