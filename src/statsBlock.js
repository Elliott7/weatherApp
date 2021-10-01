export default function createBlock(heading, value){
    const container = document.createElement('div')
    container.classList.add('block-container')

    const head = document.createElement('p')
    head.innerText = heading.toUpperCase()
    head.classList.add('block-heading')
    container.appendChild(head)

    const content = document.createElement('p')
    content.innerText = value
    content.classList.add('block-content')
    container.appendChild(content)

    return container
}