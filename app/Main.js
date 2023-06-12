"use client";

import MenuPrincipal from "./MenuPrincipal";

const Main = ({ children }) => {
  return (
    <>
      <MenuPrincipal>{children}</MenuPrincipal>
    </>
  );
};

export default Main;
