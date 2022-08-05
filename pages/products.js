import React, { Fragment } from "react";
import Products from "../components/products/Products";
import { getProducts } from "../helper/getProducts";

const products = (props) => {
  return (
    <Fragment>
      <Products Products={props.loadedProducts} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const loadedProducts = await getProducts();
  return {
    props: {
      loadedProducts,
    },
    revalidate: 3600,
  };
};

export default products;
