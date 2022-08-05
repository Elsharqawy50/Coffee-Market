import React, { Fragment } from "react";
import Products from "../components/products/Products";
import { getProducts } from "../helper/getProducts";

const products = (props) => {
  return (
    <Fragment>
      <Products products={props.loadedProducts} />
    </Fragment>
  );
};

//load menu data from firebase to make Next.js pre-render this page at build time 
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
