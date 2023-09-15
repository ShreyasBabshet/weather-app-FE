import RoundedCard from "../RoundedCard/RoundedCard.tsx";
import Search from "../Search/Search.tsx";
import styles from "./RightPanel.module.scss";
import { RightPanelProps } from "./RightPanel.types.ts";
import infoImage from "../../assets/info.svg";
import airQualityImage from "../../assets/air-quality.svg";
import uvIndexImage from "../../assets/uv-index.svg";
import { useContext } from "react";
import { AppContext } from "../../App.state.tsx";
const RightPanel = ({}: RightPanelProps) => {
  const context = useContext(AppContext);
  if (!context) return <></>;
  const { state } = context;
  const sunrise = state?.weatherData?.sunrise;
  const sunset = state?.weatherData?.sunset;

  return (
    <div className={styles.MainContainer}>
      <Search />
      <div className={styles.TimeContainer}>
        <div className={styles.Time}>
          <h3>Sunrise</h3>
          <RoundedCard primaryTime={sunrise} secondaryTime="11:45" />
        </div>
        <div className={styles.CenterBox}>
          <h3>Golden Hour</h3>
          <RoundedCard primaryTime="11:22" secondaryTime="11:45" />
        </div>
        <div className={styles.Time}>
          <h3>Sunset</h3>
          <RoundedCard primaryTime={sunset} secondaryTime="11:45" />
        </div>
      </div>
      <div className={styles.Info}>
        <div className={styles.Divider}></div>
        <div className={styles.InfoImage}>
          <img src={infoImage} alt="" />
        </div>
      </div>
      <div className={styles.RatioContainer}>
        <div className={styles.Ratio}>
          <h3>Air Quality</h3>
          <img src={airQualityImage} alt="" />
        </div>
        <div className={styles.Ratio}>
          <h3>UV Index</h3>
          <img src={uvIndexImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
