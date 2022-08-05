import React from "react";
import classes from "./CartProduct.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {CartItemsActions} from '../../store/CartItemsSlice'

const CartProduct = (props) => {
  const { image, title, price, amount,id } = props;
  const dispatch = useDispatch()

  //make two numbers of digits to appear after the decimal point
  const priceNum = price.toFixed(2)

  const addItemHandler = () => {
    dispatch(
      CartItemsActions.addItem({
        id,
        price,
        image,
        title,
        amount,
      })
    );
  }

  const removeItemHandler = () => {
    dispatch(
      CartItemsActions.removeItem(id)
    );
  }


  return (
    <li
      className={`${classes["cart-item"]} d-flex justify-content-between align-items-center my-3 py-3`}
    >
      <div className="d-flex">
        <Image src={image} alt="item photo" height={70} width={70} />
        <div className="ms-2">
          <h4 className="mb-1">{title}</h4>
          <div className={`${classes.summary} d-flex align-items-center`}>
            <span className={`${classes.price} me-5 fw-bold`}>${priceNum}</span>
            <span className={`${classes.amount} fw-bold`}>x {amount}</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row">
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartProduct;
