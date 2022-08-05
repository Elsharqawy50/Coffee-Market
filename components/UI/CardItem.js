import React from "react";
import Image from "next/image";
import classes from "./CardItem.module.scss";
import Card from "react-bootstrap/Card";
import Button from "../UI/Button";

const ProductItem = (props) => {
  const { image, title, price } = props;

  const loadedPrice = price.toFixed(2);
  return (
    <Card className={classes.card}>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <Image src={image} alt="menu photo" height={250} width={250} />
      </div>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-center">${loadedPrice}</Card.Text>
        <div className="d-flex align-items-center justify-content-center">
          <Button className="px-3 py-2 mt-3`">Add To Card</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;