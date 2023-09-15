import axiosInstance from "../axios.service";

export const getWetherData = async (cityName?: string) => {
    try {
        const data = await axiosInstance.get(`/weather?q=${cityName}`);
        console.log(data)
        return data;
    }
    catch (e) {
        console.log(e);
    }
}


export const getSixteenDaysForcast = async (latitude: number, longitude: number) => {
    const responseData = await axiosInstance.get(`/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=4`);
    return responseData;
}

export const getGeoLocation = async (latitude: number, longitude: number) => {
    try {
        const responseData = await axiosInstance.get(`/weather?lat=${latitude}&lon=${longitude}`);
        return responseData?.data?.name;
    }
    catch (e) {
        console.log(e);
    }
}