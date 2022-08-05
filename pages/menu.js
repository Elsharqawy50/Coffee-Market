import React from "react";
import MenuItems from "../components/menu/MenuItems";
import { getMenu } from "../helper/getMenu";

const menu = (props) => {
  return (
    <div>
      <MenuItems loadedMenu={props.loadedMenu} />
    </div>
  );
};

export const getStaticProps = async () => {
  const loadedMenu = await getMenu()
  return {
    props: {
      loadedMenu,
    },
    revalidate: 3600,
  };
};

export default menu;
