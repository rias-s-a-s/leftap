"use client";

import MenuPrincipal from "./MenuPrincipal";

const Main = ({ children }) => {
  return (
    <div>
      <MenuPrincipal />
      {children}
    </div>
  );
};

export default Main;
