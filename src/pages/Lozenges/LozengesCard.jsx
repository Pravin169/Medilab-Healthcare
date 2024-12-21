import React from "react";
import Cherry from "../../assets/images/Lozenges/cherry.jpeg";
import Ginger from "../../assets/images/Lozenges/ginger.jpeg";
import Orange from "../../assets/images/Lozenges/orange.jpeg";
import Honey from "../../assets/images/Lozenges/honey.jpeg";
import Mint from "../../assets/images/Lozenges/mint.jpeg";
import Lemon from "../../assets/images/Lozenges/lemon.jpeg";

const LozengesCard = () => {
  const flavors = [
    { title: "Mint", img: Mint },
    { title: "Lemon", img: Lemon },
    { title: "Cherry", img: Cherry },
    { title: "Honey", img: Honey },
    { title: "Ginger", img: Ginger },
    { title: "Orange", img: Orange },
  ];

  return (
    <div style={styles.cardContainer}>
      <h3> Flavors </h3>
      <div style={styles.card}>
        {flavors.map((flavor, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            style={{
              ...styles.cardContent,
              backgroundImage: `url(${flavor.img})`,
            }}
          >
            <div style={styles.titleContainer}>
              <h3 style={styles.title}>{flavor.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    marginTop: "20px",
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  cardContent: {
    width: "150px",
    height: "200px",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  },
  titleContainer: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "10px",
    textAlign: "center",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  title: {
    fontSize: "16px",
    color: "#fff",
    fontWeight: "bold",
    margin: 0,
  },
};

export default LozengesCard;
