// select the element using Id

const inputbox = document.getElementById("input-box");
const inputbtn = document.getElementById("input-btn")
const locationpara = document.getElementById("location-para")
const temp = document.getElementById("temp")
const feeltemp = document.getElementById("feeltemp")
const chancerain = document.getElementById("chance-rain")
const windhead = document.getElementById("wind-head")
const uvstatus = document.getElementById("uv")
const humidity = document.getElementById("humidity-head")
const ozone = document.getElementById("ozone")
const so2 = document.getElementById("so2head")
const no2 = document.getElementById("no2head")
const co = document.getElementById("cohead")


// fetch the data through api
async function getData(cityName) {
    try {
        const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=11ecdc311d7d46babf6150434240604&q=${cityName}&aqi=yes`);
       return data.json();
    } catch (err) {
        console.error(err)
    }
}

async function Data(cityName){
    try {
        const result = await getData(cityName);
        console.log(result)
        locationpara.innerText = `${result.location.name},${result.location.region}`
        temp.innerHTML = `${result.current.temp_c}&deg;C`
        feeltemp.innerHTML = `Feels Like: ${result.current.feelslike_c}&deg;C`

        chancerain.innerText =`${result.current.cloud}%`;
        windhead.innerText =`${result.current.wind_kph}/kph`;
        uvstatus.innerText =`${result.current.uv}`;
        humidity.innerText =`${result.current.humidity}`;

        ozone.innerText =`${result.current.air_quality.o3}`;
        so2.innerText =`${result.current.air_quality.so2}`;
        no2.innerText =`${result.current.air_quality.no2}`;
        co.innerText =`${result.current.air_quality.co}`;
    } catch (err) {
        console.error(err);
    }
}

Data("Bhopal") 

inputbtn.addEventListener("click", () => {
    let city = inputbox.value 
    console.log(city)
    if(city === ""){
        city = "bhopal"
    }
    Data(city)    
})

