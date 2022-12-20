import React from "react";
import Navbar from "../../Pages/Navbar";
import Header from "../../Pages/Header"
import styles from "./main.module.css";
const Main = (props) => {

  return (
    <div className={styles.container}>
        <Navbar />
        <Header/>
    </div>
  );
};

export default Main;
