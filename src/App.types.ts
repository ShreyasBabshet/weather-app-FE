export interface AppState {
    searchLocation: string,
    weatherData: IWeatherData | null,
    temperatureUnit: string,
    weatherIcon: string
}

export interface AppAction {
    type: "SET_SEARCH_LOCATION" | "SET_WEATHER_DATA" | "SET_TEMP_UNIT" | "SET_WEATHER_ICON",
    data?: any
}

export interface IAppContext {
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
}

export interface IWeatherData {
    wind?: number | string,
    humidity?: number | string,
    rain?: number | string,
    temperature: string,
    sunrise?: string,
    sunset?: string,
    climateDescription?: string,
    climateCondition?: string,
    placeName?: number | string,
    country?: number | string,
    date?: number | string,
    day?: number | string,
    time?: number | string,
    latitude?: number,
    longitude?: number,

}
