import moment from 'moment-timezone';
import { getGeoLocation } from './weather.service';
import { AppAction } from '../App.types';
import { Dispatch } from 'react';
import { setSearchLocation } from '../App.state';
export const getCurrentDate = (timezone: number) => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const presentDayIndex = currentDate.getDay();
    const month = currentDate.toLocaleDateString('default', { month: 'short' });
    const year = currentDate.getFullYear().toString().slice(-2);

    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const presentDay = daysArray[presentDayIndex];
    function getOrdinalSuffix(day: number): string {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }

    const ordinalDay = `${day}${getOrdinalSuffix(day)}`;
    const currentTime = moment().utcOffset(timezone / 60).format('h:mm A');
    return [
        `${ordinalDay} ${month} '${year}`,
        `${presentDay}`,
        `${currentTime}`
    ];
}

export const getFormatedTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = (hours % 12) || 12;
    const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')}`;
    return formattedTime;
}


export const fahrenheitToCelsius = (fahrenheit: number): number => {
    const celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}
export const celsiusToFahrenheit = (celsius: number): number => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
export const kelvinToCelsius = (kelvin: number) => {
    const celsius = kelvin - 273.15;
    return celsius;
}

export const getCurrentLocation = async (dispatch: Dispatch<AppAction>) => {
    try {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const locationResponse = await getGeoLocation(latitude, longitude);
                setSearchLocation(dispatch, locationResponse)
            }, (error) => {
                throw new Error(error.message);
            });
        }
    }
    catch (e) {
        console.log(e);
    }

}

export const getWeatherIcon = (weatherType: any, time: any) => {
    console.log(weatherType)
    const isDay = isDayTime(time);
    console.log(isDay);
    switch (weatherType) {
        case "Clouds":
            return isDay ? 'cloudSunny' : 'moonCloudy';
        case "Clear":
            return isDay ? 'sunny' : 'moon';
        case "Rain":
            return 'rainyCloud';
        default:
            return 'clouds';
    }
}

export const isDayTime = (time: string) => {
    const hours = +time.split(':')[0];
    const type = time.split(' ')[1];
    if (type === 'AM' && hours >= 6) {
        return true;
    } else if (type === 'PM' && hours >= 1 && hours < 6) {
        return true;
    }
    return false
}

export const getFormatedWeatherData = (data: any) => {
    const dateArray = getCurrentDate(data?.timezone);
    const formatedSunrise = getFormatedTime(Object(data)?.sys?.sunrise);
    const formatedSunset = getFormatedTime(Object(data)?.sys?.sunset);
    const tempInC = kelvinToCelsius(Object(data)?.main?.temp).toFixed(2);

    const weatherData = {
        wind: Object(data)?.wind?.speed || "-",
        humidity: Object(data)?.main?.humidity || "-",
        rain: Object(data)?.rain?.["1h"] || "0",
        temperature: tempInC || "-",
        sunrise: formatedSunrise || "-",
        sunset: formatedSunset || "-",
        climateCondition: Object(data)?.weather?.[0]?.main || "-",
        climateDescription: Object(data)?.weather?.[0]?.description || "-",
        placeName: Object(data)?.name || "-",
        country: Object(data)?.sys?.country || "-",
        date: dateArray[0] || "-",
        day: dateArray[1] || "-",
        time: dateArray[2] || "-",
        latitude: data?.coord?.lat,
        longitude: data?.coord?.lon,
    };
    return weatherData;
}