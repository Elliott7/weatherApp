export default function createRow(arr){
    const containerCard = document.createElement('tr')
    containerCard.classList.add('daily-row')

    const day = document.createElement('td')
    day.classList.add('left-align')
    day.innerText = arr[0]
    containerCard.appendChild(day)

    const forecastPicture = document.createElement('td')
    const picture = document.createElement('img')
    picture.classList.add('forecast-picture')
    picture.src = arr[1]
    forecastPicture.appendChild(picture)
    containerCard.appendChild(forecastPicture)

    const rain = document.createElement('td')
    rain.innerText = `${(arr[2] * 100).toFixed(0)}%`
    containerCard.appendChild(rain)

    const humidity = document.createElement('td')
    humidity.innerText = `${arr[3]}%`
    containerCard.appendChild(humidity)

    const temp = document.createElement('td')
    temp.classList.add("right-align")
    temp.innerText = `${arr[4].toFixed(0)}°  ${arr[5].toFixed(0)}°`
    containerCard.appendChild(temp)

    return containerCard
}

