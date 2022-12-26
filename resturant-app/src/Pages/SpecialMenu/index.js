import React from "react";
import PageLayout from "../../components/PageLayout";
import styles from "./specialMenu.module.css";

const SpecialMenu = () => {
  const wineBeer = [
    {
      name: "Chapel Hill Shiraz",
      price: 56,
      countery: "AU",
      size: "Bottle",
      id: 1,
    },
    {
      name: "Catena Malbec",
      price: 59,
      countery: "AR",
      size: "Bottle",
      id: 2,
    },
    {
      name: "La Vieille Rosé",
      price: 44,
      countery: "FR",
      size: "750 ml",
      id: 3,
    },
    {
      name: "Rhino Pale Ale",
      price: 31,
      countery: "CA",
      size: "750 ml",
      id: 4,
    },
    {
      name: "Irish Guinness",
      price: 26,
      countery: "IE",
      size: "750 ml",
      id: 5,
    },
  ];
  const cocktails = [
    {
      name: "Aperol Spritz",
      price: 20,
      description: "Aperol | Villa Marchesi prosecco | soda | 30ml",
      id: 1,
    },
    {
      name: "Dark 'N' Stormy",
      price: 16,
      description: "Dark rum | Ginger beer | Slice of lime.",
      id: 2,
    },
    {
      name: "Daiquiri",
      price: 10,
      description: "Rum | Citrus juice | Sugar",
      id: 3,
    },
    {
      name: "Old Fashioned",
      price: 31,
      description: "Bourbon | Brown sugar | Angostura Bitters",
      id: 4,
    },
    {
      name: "Negroni",
      price: 26,
      description: "Gin | Sweet Vermouth | Campari | Orange garnish",
      id: 5,
    },
  ];
  const spoon = require("../../assets/spoon.png");
  const menu = require("../../assets/menu.png");
  return (
    <PageLayout>
      <div className={styles.container} id="menu">
        <div className={styles.header}>
          <div className={styles.textTitle}>
            <p>Menu that fits you palatte</p>
            <img src={spoon} alt="spoon" />
          </div>
          <h2>Today’s Special</h2>
        </div>
        <div className={styles.main}>
          <div className={styles.menu}>
            <h2>Wine & Beer</h2>
            <div className={styles.items}>
              {wineBeer.map((item) => {
                return (
                  <div className={styles.item} key={item.id}>
                    <div className={styles.head}>
                      <div>
                        <h3>{item.name}</h3>
                      </div>
                      <div className={styles.line}></div>
                      <div>
                        <p>${item.price}</p>
                      </div>
                    </div>
                    <div className={styles.details}>
                      <p>
                        {item.countery} | {item.size}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.image}>
            <img src={menu} alt="menu" />
          </div>
          <div className={styles.menu}>
            <h2>Cocktails</h2>
            <div className={styles.items}>
              {cocktails.map((item) => {
                return (
                  <div className={styles.item} key={item.id}>
                    <div className={styles.head}>
                      <div>
                        <h3>{item.name}</h3>
                      </div>
                      <div className={styles.line}></div>
                      <div>
                        <p>${item.price}</p>
                      </div>
                    </div>
                    <div className={styles.details}>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <p>View More</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default SpecialMenu;
