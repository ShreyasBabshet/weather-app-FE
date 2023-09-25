import styles from "./Search.module.scss";
import { SearchProps } from "./Search.types.ts";
import searchIcon from "../../assets/search.svg";
import mapIcon from "../../assets/location.svg";
import { useContext, useState } from "react";
import { AppContext, setSearchLocation } from "../../App.state.tsx";
const Search = ({}: SearchProps) => {
  const context = useContext(AppContext);
  if (!context) return <h3>Page Unavailable</h3>;
  const { state, dispatch } = context;
  const weatherData = state?.weatherData;
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchString, setSearchString] = useState("");
  const handleSubmit = () => {
    setSearchOpen(false);
    setSearchLocation(dispatch, searchString);
  };
  return (
    <div className={styles.SearchContainer}>
      {!searchOpen ? (
        <>
          <div className={styles.Location}>
            <img className={styles.MapIcon} src={mapIcon} alt="Loaation Icon" />
            <p className={styles.Place}>
              {weatherData?.placeName}, {weatherData?.country}
            </p>
          </div>
          <button
            onClick={() => {
              setSearchOpen(true);
            }}
            className={styles.ButtonContainer}
          >
            <img
              className={styles.SearchIcon}
              src={searchIcon}
              alt="Search Icon"
            />
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.InputContainer}>
            <input
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
              className={styles.Input}
              type="text"
            />
            <button onClick={handleSubmit} className={styles.ButtonContainer}>
              <img
                className={styles.SearchIcon}
                src={searchIcon}
                alt="Search Icon"
              />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Search;
