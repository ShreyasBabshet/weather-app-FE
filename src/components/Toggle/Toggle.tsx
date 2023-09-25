import { useContext, useEffect, useState } from "react";
import styles from "./Toggle.module.scss";
import { ToggleProps } from "./Toggle.types.ts";
import { AppContext } from "../../App.state.tsx";

const Toggle = ({}: ToggleProps) => {
  const context = useContext(AppContext);

  if (!context) return <h3>Page Unavailable</h3>;
  const { dispatch } = context;
  const [unit, setUnit] = useState("C");

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  useEffect(() => {
    dispatch({
      type: "SET_TEMP_UNIT",
      data: unit,
    });
  }, [unit, dispatch]);

  return (
    <div className={styles["ToggleSwitch"]}>
      <div
        className={`${
          unit === "C" ? styles["Selected-c"] : styles["Unselected-c"]
        }`}
        onClick={toggleUnit}
      >
        C
      </div>
      <div
        className={`${
          unit === "F" ? styles["Selected-f"] : styles["Unselected-f"]
        }`}
        onClick={toggleUnit}
      >
        F
      </div>
    </div>
  );
};

export default Toggle;
