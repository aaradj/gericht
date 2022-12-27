import React from "react";
import styles from "./laurels.module.css";

const Laurels = () => {
  const laurels = require("../../assets/laurels.png");
  const spoon = require("../../assets/spoon.png");
  const award1 = require("../../assets/award01.png");
  const award2 = require("../../assets/award02.png");
  const award3 = require("../../assets/award03.png");
  const award5 = require("../../assets/award05.png");
  const awards = [
    {
      title: "Rising Star",
      text: "Lorem ipsum dolor sit amet, consectetur.",
      img: award1,
      id: 1,
    },
    {
      title: "Bib Gourmond",
      text: "Lorem ipsum dolor sit amet, consectetur.",
      img: award2,
      id: 2,
    },
    {
      title: "Outstanding Chef",
      text: "Lorem ipsum dolor sit amet, consectetur.",
      img: award3,
      id: 3,
    },
    {
      title: "AA Hospitality ",
      text: "Lorem ipsum dolor sit amet, consectetur.",
      img: award5,
      id: 4,
    },
  ];

  return (
    <div className={styles.container} id="award">
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.textTitle}>
            <p>Awards & recognition</p>
            <img src={spoon} alt="spoon" />
          </div>
          <h3>Our Laurels</h3>
        </div>
        <div className={styles.awards}>
            {
                awards.map(item=>{
                    return(
                        <div className={styles.award} key={item.id}>
                                <img src={item.img} alt="award" />
                                <div className={styles.awardText}>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
      <div className={styles.image}>
        <img src={laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
