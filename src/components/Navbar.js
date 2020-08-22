import React from "react";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark">
      <a href="#!" className="navbar-brand">
        <img src={process.env.PUBLIC_URL + '/images/menu.png'} width="40" alt="logo"/>
            MimenúQR
      </a>
    </nav>
    </>
  );
};

export default Navbar;
