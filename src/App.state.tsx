import { AppAction, IAppContext, AppState, IWeatherData } from "./App.types";
import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  getFormatedWeatherData,
  getWeatherIcon,
} from "./services/common.service";
import {
  getSixteenDaysForcast,
  getWetherData,
} from "./services/weather.service";

export const initialState: AppState = {
  searchLocation: "",
  weatherData: {
    wind: "0",
    humidity: "0",
    rain: "0",
    temperature: "0",
    sunrise: "-",
    sunset: "-",
    climateCondition: "-",
    placeName: "-",
    country: "-",
    date: "-",
    day: "-",
    time: "-",
    latitude: 0,
    longitude: 0,
  },
  temperatureUnit: "C",
  weatherIcon: "",
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_SEARCH_LOCATION":
      return { ...state, searchLocation: action.data };
    case "SET_TEMP_UNIT":
      const temperature = state?.weatherData
        ? state?.weatherData.temperature
        : 0;
      if (action.data === "F") {
        const tempInFahrenheit = celsiusToFahrenheit(+temperature).toFixed(2);
        const weatherData: IWeatherData = {
          ...state.weatherData,
          temperature: tempInFahrenheit,
        };
        return { ...state, temperatureUnit: action.data, weatherData };
      } else {
        const tempInCelcius = fahrenheitToCelsius(+temperature).toFixed(2);
        const weatherData: IWeatherData = {
          ...state.weatherData,
          temperature: tempInCelcius,
        };
        return { ...state, temperatureUnit: action.data, weatherData };
      }
    case "SET_WEATHER_DATA":
      const weatherData = action.data;
      return { ...state, weatherData: weatherData };
    case "SET_WEATHER_ICON":
      return { ...state, weatherIcon: action.data };
  }
};

export const setSearchLocation = async (
  dispatch: Dispatch<AppAction>,
  location: string
) => {
  try {
    dispatch({
      type: "SET_SEARCH_LOCATION",
      data: location,
    });
    getDashboardData(dispatch, location);
  } catch (e) {}
};

export const getDashboardData = async (
  dispatch: Dispatch<AppAction>,
  location: string
) => {
  try {
    const responseData = await getWetherData(location);
    const data = responseData?.data;
    const formatedData = getFormatedWeatherData(data);
    const weatherIcon = getWeatherIcon(
      formatedData?.climateCondition,
      formatedData?.time
    );
    dispatch({
      type: "SET_WEATHER_DATA",
      data: formatedData,
    });

    dispatch({
      type: "SET_WEATHER_ICON",
      data: weatherIcon,
    });
    // getForcastData(weatherData.latitude, weatherData.longitude);
  } catch (e) {
    console.log(e);
  }
};

export const getForcastData = async (latitude: number, longitude: number) => {
  try {
    const response = await getSixteenDaysForcast(latitude, longitude);
  } catch (e) {
    console.log(e);
  }
};
export const withProvider = (Component: () => JSX.Element) => {
  return () => {
    return (
      <AppProvider>
        <Component />
      </AppProvider>
    );
  };
};

export const AppContext = createContext<IAppContext | null>(null);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
