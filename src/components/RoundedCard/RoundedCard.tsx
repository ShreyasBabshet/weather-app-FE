import styles from "./RoundedCard.module.scss";
import { RoundedCardProps } from "./RoundedCard.types.ts";
import clockIcon from "../../assets/clock.svg";
const RoundedCard = ({ primaryTime, secondaryTime }: RoundedCardProps) => {
  return (
    <div className={styles.Container}>
      <img className={styles.Icon} src={clockIcon} alt="clock image" />
      <p className={styles.Primary}>{primaryTime}</p>
      <p className={styles.Secondary}>{secondaryTime}</p>
    </div>
  );
};

export default RoundedCard;
