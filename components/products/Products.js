import React from "react";
import classes from "./Products.module.scss";
import CardItem from "../UI/CardItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Products = (props) => {
  //destructuring products items that passed from products page
  const { products } = props;
  const items = products.map((item) => (
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
    <section className={`${classes.products} py-5`}>
      <Container>
        <h1 className="text-center mb-5">our products</h1>
        <Row>{items}</Row>
      </Container>
    </section>
  );
};

export default Products;
