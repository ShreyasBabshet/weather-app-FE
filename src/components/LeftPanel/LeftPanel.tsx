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
const LeftPanel = ({}: LeftPanelProps) => {
  const context = useContext(AppContext);
  if (!context) return <></>;
  const { state } = context;
  const weatherData = state?.weatherData;
  const temperatureUnit = state?.temperatureUnit;

  const weatherIcons: any = {
    clouds: clouds,
    sunny: sunny,
    cloudSunny: cloudSunny,
    moon: moon,
    rainyCloud: rainyCloud,
    moonCloudy: moonCloudy,
  };

  const weatherIcon = state?.weatherIcon;

  const [temperatureArray, setArray] = useState([
    { temperature: 24, day: "Friday" },
    { temperature: 30, day: "Friday" },
    { temperature: 28, day: "Friday" },
    { temperature: 22, day: "Friday" },
    { temperature: 29, day: "Friday" },
  ]);
  return (
    <div className={styles.Container}>
      <div className={styles.ImageContainer}>
        <div className={styles.Img}>
          <img src={weatherIcons[weatherIcon]} alt="" />
        </div>
        <Toggle />
      </div>
      <div className={styles.Temperature}>
        <div className={styles.Value}>{weatherData?.temperature}</div>
        <div className={styles.Unit}>°{temperatureUnit}</div>
      </div>
      <div className={styles.DateContainer}>
        <p className={styles.Date}>{weatherData?.date}</p>
        <p className={styles.Day}>
          {weatherData?.day} | {weatherData?.time}
        </p>
      </div>
      <div className={styles.AdditionalInfo}>
        <p className={styles.info}>
          <img className={styles.WindIcon} src={windIcon} alt="" />
          <span>Wind</span>
          <span>{weatherData?.wind}km/h</span>
        </p>
        <span className={styles.divider}>|</span>
        <p className={styles.info}>
          <img className={styles.WindIcon} src={humIcon} alt="" />
          <span>Hum</span>
          <span>{weatherData?.humidity}%</span>
        </p>
        <span className={styles.divider}>|</span>
        <p className={styles.info}>
          <img className={styles.WindIcon} src={rainIcon} alt="" />
          <span>Rain</span>
          <span>{weatherData?.rain}%</span>
        </p>
      </div>

      <div className={styles.CardContainer}>
        <div className={styles.CardsList}>
          {temperatureArray.slice(0, 4).map((item) => {
            return <Card temperature={item.temperature} day={item.day} />;
          })}
        </div>
        <div className={styles.arrowIcon}>
          <img src={arrowIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
