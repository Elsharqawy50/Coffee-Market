import React, { Fragment } from "react";
import MenuItems from "../components/menu/MenuItems";
import { getMenu } from "../helper/getMenu";

const menu = (props) => {
  return (
    <Fragment>
      <MenuItems loadedMenu={props.loadedMenu} />
    </Fragment>
  );
};

//load menu data from firebase to make Next.js pre-render this page at build time 
export const getStaticProps = async () => {
  const loadedMenu = await getMenu();
  return {
    props: {
      loadedMenu,
    },
    revalidate: 3600,
  };
};

export default menu;
