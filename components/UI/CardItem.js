import React from "react";
import Image from "next/image";
import classes from "./CardItem.module.scss";
import Card from "react-bootstrap/Card";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { CartItemsActions } from "../../store/CartItemsSlice";

const CardItem = (props) => {
  const { image, title, price, id, amount } = props;
  const dispatch = useDispatch();

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
  };

  const loadedPrice = price.toFixed(2);
  return (
    <Card className={classes.card}>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <Image src={image} alt="item photo" height={250} width={250} />
      </div>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-center fw-bold">${loadedPrice}</Card.Text>
        <div className="d-flex align-items-center justify-content-center">
          <Button onClick={addItemHandler} className="px-3 py-2 mt-3`">
            Add To Card
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
