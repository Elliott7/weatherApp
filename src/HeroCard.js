export default function createCard(location, currentWeather, temp, high, low){
    const mainDiv = document.createElement('div')
    mainDiv.classList.add('cont')
    mainDiv.setAttribute('id', 'heroCard')

    const heading = document.createElement('p')
    heading.innerText = location
    heading.classList.add('location')
    mainDiv.appendChild(heading)

    const weather = document.createElement('p')
    weather.innerText = currentWeather
    weather.classList.add('weather')
    mainDiv.appendChild(weather)

    const temperature = document.createElement('p')
    temperature.innerText = temp
    temperature.classList.add('temp')
    mainDiv.appendChild(temperature)

    const highTemp = document.createElement('span')
    highTemp.innerText = high
    highTemp.classList.add('high')
    mainDiv.appendChild(highTemp)

    const lowTemp = document.createElement('span')
    lowTemp.innerText = low
    lowTemp.classList.add('low')
    mainDiv.appendChild(lowTemp)

    return mainDiv
}