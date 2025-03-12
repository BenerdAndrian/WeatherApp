import { displayTextData } from "./assets/modules/DOM";
import { findingAreaWeather } from "./assets/modules/eventHandler";

import "./styles.css";
const weatherApp=document.querySelector(".weatherApp");
const region=document.querySelector(".region");
const temp=document.querySelector(".temperature");
const status=document.querySelector(".state");
async function getWeatherData(url){
    try{
        const response= await fetch(url)
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const weatherData=await response.json()
        const celcius=farenheitToCelcius(weatherData.currentConditions.temp)
        const theIcon=getIconState(weatherData.currentConditions.conditions)
        const state=theIcon+weatherData.currentConditions.conditions;
        console.log(weatherData);
        displayTextData(region,weatherData.address);
        displayTextData(temp,celcius)
        displayTextData(status,state)
    }catch(error){
        console.error(error)
    }
    
}
function farenheitToCelcius(farenheit){
    return ((farenheit-32)/1.8).toFixed(1)+"°C"
}
function getIconState(status){
    let icon;
    switch(status){
        case "cloudy": icon='☁️';break;
        case "Partially cloudy":icon= '☁️';break;
        case "sunny": icon='🌤️';break;
        case "rainy":icon= '🌧️';break;
        default: icon='🎑';break;
    }
    return icon;
}
export function settingAreaForApiUrl(inputValue){
    URL=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValue}?key=R9Y3JEJJBA9SFRHKD32F92GMQ`
    getWeatherData(URL)
}
findingAreaWeather()