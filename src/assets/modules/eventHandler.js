import { settingAreaForApiUrl } from "../.."
export function findingAreaWeather(){
    const findIcon=document.querySelector(".find-icon")
    const input=document.querySelector("input")
    findIcon.addEventListener("click",()=>{
        console.log("icon clicked")
        if(input.value){
            settingAreaForApiUrl(input.value)
        }
    })
}