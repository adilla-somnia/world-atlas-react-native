import axios from "axios";

const API_URL = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,area,region,subregion,languages,currencies,borders'

export async function getCountries() {
  try {
    // request GET do forecast
    const response = await axios.get(API_URL);

    //console.log(response.data)
    if (Object.keys(response.data).length > 0) {
      return response.data;
    } else {
      return "nothing is being returned from the api";
    }

  } catch (error) {
    console.log("Error when trying to get the forecast from API:", error)
    return error;
  }
}