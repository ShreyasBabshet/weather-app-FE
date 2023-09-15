import { useState } from "react";
import styles from "./Card.module.scss";
import { CardProps } from "./Card.types.ts";
import cloundyIcon from "../../assets/cloudy.svg";
import cloudySunnyIcon from "../../assets/cloudy-sunny.svg";
import sunnyIcon from "../../assets/sunny.svg";
const Card = ({ temperature, day }: CardProps) => {
  return (
    <div className={styles.CardContainer}>
      <span className={styles.Title}>{temperature} °C</span>
      <img
        className={styles.Icon}
        src={temperature > 26 ? cloudySunnyIcon : cloundyIcon}
        alt=""
      />
      <span>{day}</span>
    </div>
  );
};

export default Card;
