import React from "react";
import classes from "./MenuItems.module.scss";
import CardItem from "../UI/CardItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MenuItems = (props) => {
  const { loadedMenu } = props;
  const items = loadedMenu.map((item) => (
    <Col className="mb-4" sm={12} md={6} lg={4} xl={3} key={item.id}>
      <CardItem
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        amount={item.amount}
      />
    </Col>
  ));

  return (
    <section className={`${classes.menu} py-5`}>
      <Container>
        <h1 className="text-center mb-5">our menu</h1>
        <Row>{items}</Row>
      </Container>
    </section>
  );
};

export default MenuItems;
