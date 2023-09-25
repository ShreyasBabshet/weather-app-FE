import styles from "./LeftPanel.module.scss";
import { LeftPanelProps } from "./LeftPanel.types.ts";
import clouds from "../../assets/cloudy.svg";
import sunny from "../../assets/sun.svg";
import cloudSunny from "../../assets/cloudy-sunny.svg";
import moon from "../../assets/moon.svg";
import moonCloudy from "../../assets/cloudy-moon.svg";
import rainyCloud from "../../assets/rainy-cloud.svg";
import windIcon from "../../assets/wind-arrow.svg";
import humIcon from "../../assets/hum.svg";
import rainIcon from "../../assets/rain.svg";
import { useContext, useState } from "react";
import Card from "../Card/Card.tsx";
import arrowIcon from "../../assets/arrow.svg";
import { AppContext } from "../../App.state.tsx";
import Toggle from "../Toggle/Toggle.tsx";

const weatherIcons: any = {
  clouds: clouds,
  sunny: sunny,
  cloudSunny: cloudSunny,
  moon: moon,
  rainyCloud: rainyCloud,
  moonCloudy: moonCloudy,
};

const LeftPanel = ({}: LeftPanelProps) => {
  const context = useContext(AppContext);
  if (!context) return <h3>Page Unavailable</h3>;
  const { state } = context;
  const weatherData = state?.weatherData;
  const temperatureUnit = state?.temperatureUnit;

  const weatherIcon = state?.weatherIcon;

  const [temperatureArray] = useState([
    { id: 1, temperature: 24, day: "Saturday" },
    { id: 2, temperature: 30, day: "Sunday" },
    { id: 3, temperature: 28, day: "Monday" },
    { id: 4, temperature: 23, day: "Tuesday" },
    { id: 5, temperature: 29, day: "Wednesday" },
  ]);
  return (
    <section className={styles.Container}>
      <section className={styles.ImageContainer}>
        <div className={styles.Img}>
          <img src={weatherIcons[weatherIcon]} alt="Weather Icon" />
        </div>
        <Toggle />
      </section>
      <section className={styles.Temperature}>
        <div className={styles.Value}>{weatherData?.temperature}</div>
        <div className={styles.Unit}>°{temperatureUnit}</div>
      </section>
      <section className={styles.DateContainer}>
        <p className={styles.Date}>{weatherData?.date}</p>
        <p className={styles.Day}>
          {weatherData?.day} | {weatherData?.time}
        </p>
      </section>
      <section className={styles.AdditionalInfo}>
        <p className={styles.info}>
          <img className={styles.WindIcon} src={windIcon} alt="Wind Icon" />
          <span>Wind</span>
          <span>{weatherData?.wind}km/h</span>
        </p>
        <span className={styles.divider}>|</span>
        <p className={styles.info}>
          <img className={styles.WindIcon} src={humIcon} alt="Humidity Icon" />
          <span>Hum</span>
          <span>{weatherData?.humidity}%</span>
        </p>
        <span className={styles.divider}>|</span>
        <p className={styles.info}>
          <img className={styles.WindIcon} src={rainIcon} alt="Rain Icon" />
          <span>Rain</span>
          <span>{weatherData?.rain}%</span>
        </p>
      </section>

      <section className={styles.CardContainer}>
        <div className={styles.CardsList}>
          {temperatureArray.slice(0, 4).map((item) => {
            return (
              <Card
                key={item.id}
                temperature={item.temperature}
                day={item.day}
              />
            );
          })}
        </div>
        <div className={styles.arrowIcon}>
          <img src={arrowIcon} alt="Scroll arrow" />
        </div>
      </section>
    </section>
  );
};

export default LeftPanel;
