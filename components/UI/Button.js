import React from "react";
import classes from './Button.module.scss'

const Button = (props) => {
  return (
    <button className={`${props.className} ${classes.button}`}>
      {props.children}
    </button>
  );
};

export default Button;
