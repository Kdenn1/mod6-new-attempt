//declare variables to reference later 
const apikey = "6fcd46ca0bc9014cd6e642c6441a435a";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//do the api call to return the data
const url = (city) =>
`http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=6fcd46ca0bc9014cd6e642c6441a435a`

//function to tell the app what to do with the json returned data 
async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();
    //console log the data to show it returns something in devtools 
    console.log(respData);
    addWeatherToPage(respData);
}

//function to put the data onto a spot on the page and generate html
function addWeatherToPage(data)

 


