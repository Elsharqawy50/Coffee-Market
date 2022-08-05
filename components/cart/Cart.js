import React from "react";
import classes from "./Cart.module.scss";
import Card from "react-bootstrap/Card";
import Button from "../UI/Button";
import Container from "react-bootstrap/Container";
import CartProduct from "./CartProduct";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Link from "next/link";
import { CartItemsActions } from "../../store/CartItemsSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cartItems.items);
  const totalAmount = useSelector((state) => state.cartItems.totalAmount);

  //make two numbers of digits to appear after the decimal point
  const totalAmountNum = totalAmount.toFixed(2);

  //check if cart items added to cart to manage state of cart page
  const hasItems = cartItems.length > 0;

  const items = cartItems.map((item) => (
    <CartProduct
      key={item.id}
      id={item.id}
      image={item.image}
      title={item.title}
      price={item.price}
      amount={item.amount}
    />
  ));

  const restItemsHandler = () => {
    dispatch(CartItemsActions.restItems())
  }

  return (
    <section className={`${classes.cart} py-5`}>
      <Container>
        <h1 className="text-center mb-5">shopping Cart</h1>
        <Card className={classes.card}>
          <Card.Body>
            {!hasItems && (
              <div className={`text-center fw-bold ms-4 p-4 ${classes.empty}`}>
                Your cart is empty
              </div>
            )}
            <ul className="ps-4">{items}</ul>
            <div
              className={`d-flex justify-content-between align-items-center ps-4 ${classes.totalAmount}`}
            >
              <span>Total Amount</span>
              <span>${totalAmountNum}</span>
            </div>
            <div className="d-flex align-items-center justify-content-end gap-3">
              {hasItems && (
                <Link href="/">
                  <a>
                    <Button onClick={restItemsHandler} className="px-3 py-2 mt-2">Order</Button>
                  </a>
                </Link>
              )}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Cart;
