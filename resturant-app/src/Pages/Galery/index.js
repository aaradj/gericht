import React from "react";
import styles from "./galery.module.css";
import PageLayout from "../../components/PageLayout";

const Galery = () => {
    //IMAGES
  const spoon = require("../../assets/spoon.png");
  const img1 = require("../../assets/gallery04.png");
  const img2 = require("../../assets/gallery02.png");
  const img3 = require("../../assets/gallery03.png");
  
  return (
    <PageLayout>

      <div className={styles.container}>

        <div className={styles.text}>

          <div className={styles.instagram}>
            <p>Instagram</p>
            <img src={spoon} alt="spoon" />
          </div>

          <div className={styles.title}>

            <h2>Photo Gallery</h2>

          </div>

          <div className={styles.paragraph}>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Delectus
            Ipsum, Voluptatibus Natus Fuga
          </div>

          <div className={styles.button}>view more</div>

        </div>

        <div className={styles.photos}>

          <div className={styles.img}>

            <img src={img1} alt="galery" />

          </div>

          <div className={styles.img}>

            <img src={img2} alt="galery" />
          </div>

          <div className={styles.img}>

            <img src={img3} alt="galery" />
          </div>

        </div>

      </div>

    </PageLayout>
  );


};


export default Galery;
