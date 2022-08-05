import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import HeaderCartButton from "./HeaderCartButton";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const MainNavbar = () => {
  // make next wait till the component load 
  const [domLoaded, setDomLoaded] = useState(false);
  // manage the state of offcanvas to make it close after click on link on small devices
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  //use router to check the pathname on url to put class active to navbar-link
  const router = useRouter();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <header>
      {domLoaded && (
        <Navbar className="navbar" expand="lg">
          <Container>
            <Link href="/" passHref>
              <Navbar.Brand className="navbarBrand">
                <Image
                  src="/nav/logo.png"
                  alt="logo"
                  width={60}
                  height={56.3}
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              className="navbar-toggler"
              aria-controls={`offcanvasNavbar-expand-lg`}
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
            >
              <Offcanvas.Header closeButton className="offcanvasHeader">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Coffee Market
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvasNav">
                <Nav className="ms-auto pe-3 nav">
                  <Link href="/" passHref>
                    <a
                      onClick={() => setShowOffcanvas(!showOffcanvas)}
                      className={`p-2 d-lg-flex  justify-content-center align-items-center ${
                        router.pathname === "/" ? "active" : ""
                      }`}
                    >
                      <span className="ms-2">Home</span>
                    </a>
                  </Link>
                  <Link href="/menu" passHref>
                    <a
                      onClick={() => setShowOffcanvas(!showOffcanvas)}
                      className={`p-2 d-lg-flex justify-content-center align-items-center ${
                        router.pathname === "/menu" ? "active" : ""
                      }`}
                    >
                      <span className="ms-2">Menu</span>
                    </a>
                  </Link>
                  <Link href="/products" passHref>
                    <a
                      onClick={() => setShowOffcanvas(!showOffcanvas)}
                      className={`p-2 d-lg-flex  justify-content-center align-items-center ${
                        router.pathname === "/products" ? "active" : ""
                      }`}
                    >
                      <span className="ms-2">Products</span>
                    </a>
                  </Link>
                  <Link href="/cart" passHref>
                    <a
                      onClick={() => setShowOffcanvas(!showOffcanvas)}
                      className={`p-2 d-flex justify-content-center align-items-center ${
                        router.pathname === "/cart" ? "active" : ""
                      }`}
                    >
                      <div className="ms-2">
                        <HeaderCartButton />
                      </div>
                    </a>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default MainNavbar;
