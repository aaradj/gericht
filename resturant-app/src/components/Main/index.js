import React from "react";
import Navbar from "../../Pages/Navbar";
import Header from "../../Pages/Header"
import AboutUs from "../../Pages/AboutUs";
import styles from "./main.module.css";
import SpecialMenu from "../../Pages/SpecialMenu";
const Main = () => {

  return (
    <div className={styles.container}>
        <Navbar />
        <Header/>
        <AboutUs />
        <SpecialMenu />
    </div>
  );
};

export default Main;
