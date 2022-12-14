import React from "react";
import classes from './Button.module.scss'

//reusable button component
const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`${props.className} ${classes.button}`}>
      {props.children}
    </button>
  );
};

export default Button;
