import React, { useState } from "react";
import NavBar from "../components/NavBar/Navbar.js";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Home;