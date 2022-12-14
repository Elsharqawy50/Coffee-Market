import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Hero.module.scss";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import Button from "../UI/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hero = () => {
  return (
    <Fragment>
      <section className={`d-flex align-items-center ${classes.hero}`}>
        <Container>
          <div className={classes.wrapper}>
            <Image
              src="/home-page/bg-Img.jpg"
              alt="background image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <Row>
            <Col sm={6} className={classes.banner}>
              <div>
                <h1>coffee house</h1>
                <p className="mt-3">
                  We believe a cup of coffee is one of the most important,
                  simple pleasures in life.
                </p>
              </div>
              <Link href={"/menu"}>
                <a>
                  <Button className={`px-3 py-2 mt-3`}>
                    Menu
                    <ArrowRightIcon />
                  </Button>
                </a>
              </Link>
              <Link href={"/products"} passHref>
                <a>
                  <Button className={`ms-4 px-3 py-2 mt-3`}>
                    Products
                    <ArrowRightIcon />
                  </Button>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Hero;
