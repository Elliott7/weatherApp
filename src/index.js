import createBlock from "./statsBlock";
import './style.css'
import './loadingAnimation.css'
import createCard from "./HeroCard"
import forecastCard from './forecastCard'
import myImage from "./logo2.png"
import moonLink, {moonLabeling} from "./moonPhase";
import createRow from "./createRow";


    // Initializes the search box and conversion button
(() => {
    const userInput = document.getElementById('searchBox')
    const searchForm = document.getElementById('searchTerm')
    searchForm.addEventListener('submit', (event)=> {
        event.preventDefault()
        main(userInput.value)
        userInput.value = ''
    })
    document.getElementById('deg').addEventListener('click', ()=>{
        changeTemperature()
        updateButton()
    })
})();

const trackers = (() => {
    let currentLat
    let currentLon
    let count = 0
    let cityName
    const updateCoords =(lat, lon, city) => {
        currentLat = lat
        currentLon = lon
        cityName = city
    }
    const getCoords = () => [currentLat, currentLon]
    const updateCount = () => {
        if (count === 0){
            count = 1
        } else{
            count = 0
        }
    }
    const getCount = () => {
        updateCount()
        return count
    }
    const returnCount = () => count
    const getCity = () => cityName
    return {updateCoords, getCoords, getCount, getCity, returnCount}
})();


function getAPILink(searchfor='London', units = 'metric', latitude=undefined, longitude=undefined){
    const weatherAPIKey = "cfd1ee8bdfb2fc9de48554d62e4fc0c1"
    let latLonApiEndpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${searchfor}&units=${units}&appid=${weatherAPIKey}`
    let fullDataApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&exclude=minutely&appid=${weatherAPIKey}`
    if (latitude === undefined){
        return latLonApiEndpoint
    } else {
        return fullDataApi
    }
}

function errorMessage(){
    document.getElementById('error').classList.toggle('hide')
    document.getElementById('searchBox').classList.toggle('wrong-search-term')
    document.getElementById('searchButton').classList.toggle('wrong-search-term')
}

function updateSegments(data, location){
    const tz = data.timezone_offset
    updateHeroCard(data.daily, location).run()
    updateForecastSection(data.daily, tz)

   // Update stats section with current data
    const extractCurrentData = extractCurrentStats(data.current)
    updateBlocks(extractCurrentData)
    createForecastTable(data.daily).createTable()
}

async function main(searchTerm){
    try {
        toggleLoader()
        const initialLink = await getAPIData(getAPILink(searchTerm))
        const {lat, lon} = initialLink.city.coord
        const {name} = initialLink.city
        trackers.updateCoords(lat, lon, name)
        const updatedLink = getAPILink('','metric', lat, lon)
        const tableOfData = await getAPIData(updatedLink)
        updateSegments(tableOfData, name)
        setTimeout(toggleLoader, 500)

    } catch (error){
        setTimeout(toggleLoader, 500)
        errorMessage()
        setTimeout(errorMessage, 4000)
        console.log(error.message)
    }

}
main("Brisbane")


function getAPIData(url){
    return fetch(url, {mode:"cors"})
        .then(response => response.json())
        .catch(error => {throw Error (error)})
}

function addLogo(){
    const logoDiv = document.getElementById('logo')
    const myLogo = new Image()
    myLogo.src = myImage
    myLogo.classList.add("logo")
    logoDiv.appendChild(myLogo)
}
addLogo()


async function changeTemperature() {
    try {
        const newLink = changeTempLink()
        const data = await getAPIData(newLink)
        updateHeroCard(data.daily, trackers.getCity()).run()
        updateForecastSection(data.daily)
        const extractCurrentData = extractCurrentStats(data.current)
        updateBlocks(extractCurrentData)
    } catch (error) {
        console.log(error.message)
    }
}

function changeTempLink(){
    let link
    let [lat, lon] = trackers.getCoords()
    if (trackers.getCount()){
        link = getAPILink('', 'imperial', lat, lon )
    } else {
        link = getAPILink('', 'metric', lat, lon )
    }
    return link
}

function updateButton(){
    if (trackers.returnCount()){
        document.getElementById('deg').innerHTML = `C° / <b>F°</b>`
    } else {
        document.getElementById('deg').innerHTML = `<b>C° </b>/ F°`
    }
}

function toggleLoader(){
    const loader = document.getElementById("loader")
    loader.classList.toggle("hide")
}

/**************** ******************/
/*********** Hero section **********/
/**************** ******************/

// Hero Main Card
function updateHeroCard(data, city){
    const keyTemp = document.getElementById("keyTemp")

    const extractHeroData = () => {
        const today = data[0]
        const weather = today.weather[0].main
        let {day, max, min} = today.temp
        day = `${day.toFixed(0)}°`
        max = `H:${max.toFixed(0)}°`
        min = `L:${min.toFixed(0)}°`
        return [city, weather, day, max, min]
    }

    const deleteChild = () => {
        const childToRemove = document.getElementById('heroCard')
        keyTemp.removeChild(childToRemove)
    }

    const createNewCard = () => {
        const create = extractHeroData()
        const newCard = createCard(create[0], create[1], create[2], create[3], create[4])
        keyTemp.appendChild(newCard)
    }

    const run =()  => {
        deleteChild()
        createNewCard()
    }
    return {run}
}

function updateForecastSection(data, tz){
    const parent = document.getElementById('rangeOfTemps')
    const refreshContainer = () => {
        const child = document.getElementById('forecastContainer')
        parent.removeChild(child)
        const container = document.createElement('div')
        container.setAttribute('id', 'forecastContainer')
        return container
    }
    const addSuffix = (num) => {
        const st = [1, 21, 31]
        const nd = [2, 22]
        const rd = [3, 23]
        if (st.includes(num)){
            return `${num}st`
        } else if (nd.includes(num)){
            return `${num}nd`
        } else if (rd.includes(num)){
            return `${num}rd`
        } else {
            return `${num}th`
        }
    }

    const createFlipCard = (inpData) => {
        const {sunrise, sunset, clouds, moon_phase} = inpData
        const {morn, day, eve, night} = inpData.temp
        const flip = `Sunrise: ${convertTime(sunrise+tz, false)} am
        Sunset: ${convertTime(sunset+tz, false)} pm
        Morning: ${morn.toFixed(0)}°
        Day: ${day.toFixed(0)}°
        Evening: ${eve.toFixed(0)}°
        Night: ${night.toFixed(0)}°
        Cloudiness: ${clouds}%
        ${moonLabeling(moon_phase)}
        `
        return flip
    }

    const cleanData = () => {
        let cleanedData = []
        for (let i = 0; i < 8; i++) {
            let roundOfData = []
            const days = ["Sun","Mon", "Tue", "Wed", "Thu","Fri", "Sat"]
            const {dt, moon_phase} = data[i]
            const date = new Date(dt * 1000)
            const dayNum = date.getDay()
            const dayOfMonth = addSuffix(date.getDate())
            const moonPhaseLink = moonLink(moon_phase)
            const {icon, description} = data[i].weather[0]
            const {day} = data[i].temp
            const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
            roundOfData.push(dayOfMonth, days[dayNum], description, imgUrl, day, moonPhaseLink, createFlipCard(data[i]))
            cleanedData.push(roundOfData)
        }
        return cleanedData
    }

    const createCards = () => {
        const cont = refreshContainer()
        const cleanedData = cleanData()
        for (let pack of cleanedData){
            cont.appendChild(forecastCard(pack))
        }
        parent.appendChild(cont)
    }
    createCards()
}

function addListEventListeners(){
    const shortcuts = document.getElementsByClassName('shortcut')
    const locations = ["London", "Beijing", "Brisbane", "Los Angeles", "New York"]
    for (let i = 0; i < shortcuts.length; i++){
        shortcuts[i].addEventListener('click', () => {
            main(locations[i])
        })
    }
}
addListEventListeners();

function test(){
    window.addEventListener('load', () => {

    })
}

/**************** ******************/
/********** Stats section **********/
/**************** ******************/

// Creates the html blocks within the stats section
(() => {
    const statsTop = document.getElementById('stats-top')
    const statsBot = document.getElementById('stats-bot')
    for (let i=0; i<10; i++){
        let newBlock = createBlock('heading', 'value')
        if (i<5){
            statsTop.appendChild(newBlock)
        } else {
            statsBot.appendChild(newBlock)
        }
    }
})();



function convertTime(unixTime, norm){
    const date = new Date(unixTime* 1000)
    if (norm){
        const hours = date.getHours()
        const minutes = "0" + date.getMinutes()
        const seconds = "0" + date.getSeconds()
        return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
    }
    else{
        const hours = (date.getUTCHours() + 24) % 12 || 12
        const minutes = "0" + date.getUTCMinutes()
        return `${hours}:${minutes.substr(-2)}`
    }


}

function knotsConversion(windSpeed){
    if (trackers.returnCount()){
        return (windSpeed / 1.15078).toFixed(2)
    }
    return (windSpeed * 1.943844).toFixed(2)
}

function extractCurrentStats(data){
    const {sunrise, sunset, temp, feels_like, pressure, humidity, uvi, clouds, visibility, wind_speed} = data
    const wind = knotsConversion(wind_speed)
    return({
        "sunrise": convertTime(sunrise, true),
        "sunset": convertTime(sunset, true),
        "Temperature": `${temp.toFixed(0)}°`,
        "Feels Like": `${feels_like.toFixed(0)}°`,
        "Humidity": `${humidity} %`,
        "Pressure": `${pressure} hPa`,
        "UV Index": uvi,
        "Cloudiness": `${clouds} %`,
        "Visibility":`${visibility/1000} Kms`,
        "Wind Speed": `${wind} Knots`
    })
}

// Iterates through the data and updates the headings and values elements
function updateBlocks(data){
    const headings = document.getElementsByClassName("block-heading")
    const values = document.getElementsByClassName("block-content")
    const keys = Object.keys(data)
    const vals = Object.values(data)
    for (let i = 0; i < headings.length; i++){
        headings[i].innerText = keys[i].toUpperCase()
        values[i].innerText = vals[i]
    }
}

/**************** ******************/
/********** Table section **********/
/**************** ******************/


function createForecastTable(data){
    const cleanData = () => {
        let cleanedData = []
        for (let i = 0; i < 8; i++) {
            let roundOfData = []
            const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
            const {dt, humidity, pop} = data[i]
            const date = new Date(dt * 1000)
            const dayNum = date.getDay()
            const {icon} = data[i].weather[0]
            const {max, min} = data[i].temp
            const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
            roundOfData.push(days[dayNum], imgUrl, pop, humidity, max, min)
            cleanedData.push(roundOfData)
        }
        return cleanedData
    }
    const removeOldChild = () => {
        const remove = document.getElementById('tbody')
        document.getElementById('table').removeChild(remove)
    }
    const createTable = () => {
        removeOldChild()
        const table = document.getElementById('table')
        const tbody = document.createElement('tbody')
        tbody.setAttribute('id', 'tbody')
        const data = cleanData()
        for (let i = 0; i < data.length-1; i++){
            tbody.appendChild(createRow(data[i]))
        }
        table.appendChild(tbody)
    }
    return {createTable}
}

let x = document.getElementById('testingdsaf')