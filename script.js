//declare variables to reference later 
const apikey = "6fcd46ca0bc9014cd6e642c6441a435a";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const submitBtn = document.getElementById("submitBtn");

//do the api call to return the data
const url = (city) =>
`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6fcd46ca0bc9014cd6e642c6441a435a`

//function to tell the app what to do with the json returned data 
async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();
    //console log the data to show it returns something in devtools 
    console.log(respData);
    addWeatherToPage(respData);
}

//function to put the data onto a spot on the page and generate html
function addWeatherToPage(data) {
    const temp = Ktoc(data.main.temp);
    const weather = document.createElement("div");
    weather.classList.add("weather");

//need the current date 
let today = new Date();

//do the same thing but for 7 day forecast 
    const forecast = document.createElement("div");
    forecast.classList.add("forecast")
    
//modify the html from js so that data goes in the browser window 
    weather.innerHTML = `<h2><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> 
    ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/></h2>
    <small>${data.weather[0].main}</small>
    <h4> ${today} </h4>`;
    
    //make sure it's blank so data is displayed  
    main.innerHTML = "";
    //append the child element 
    main.appendChild(weather);
}
//submit button 


//call the Ktoc const that was established above 
function Ktoc(K) {
    return Math.floor(K - 273.15);
};

//add the event listener so the search button is interactive 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = search.value;
    if(city) {
        getWeatherByLocation(city);
    }
});


