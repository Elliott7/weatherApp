export default function forecastCard(arr){
    const containerCard = document.createElement('div')
    containerCard.classList.add('forecast-card')

    const date = document.createElement('p')
    date.classList.add('date-card')
    date.innerText = arr[0]
    containerCard.appendChild(date)

    const day = document.createElement('p')
    day.classList.add('day-card')
    day.innerText = arr[1]
    containerCard.appendChild(day)

    const desc = document.createElement('p')
    desc.classList.add('description', 'on-hover')
    desc.innerText = arr[2]
    containerCard.appendChild(desc)

    const picture = document.createElement('img')
    picture.classList.add('picture', 'on-hover')
    picture.alt = "Weather type"
    picture.src = arr[3]
    containerCard.appendChild(picture)

    const temp = document.createElement('p')
    temp.classList.add('high', 'on-hover')
    temp.innerText = `${arr[4].toFixed(0)}°`
    containerCard.appendChild(temp)

    const moon = document.createElement('img')
    moon.classList.add('moon')
    moon.alt = 'Moon Phase'
    moon.src = arr[5]
    containerCard.appendChild(moon)

    const information = document.createElement('p')
    information.classList.add('info')
    information.innerText = arr[6]
    containerCard.appendChild(information)

    return containerCard
}