import React from "react";
import Navbar from "../../Pages/Navbar";
import Header from "../../Pages/Header"
import AboutUs from "../../Pages/AboutUs";
import styles from "./main.module.css";
import SpecialMenu from "../../Pages/SpecialMenu";
import Chef from "../../Pages/Chef";
import Intro from "../../Pages/Intro";
const Main = () => {

  return (
    <div className={styles.container}>
        <Navbar />
        <Header/>
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
    </div>
  );
};

export default Main;
