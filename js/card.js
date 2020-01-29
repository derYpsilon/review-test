class Card {
    static create({ name, link }) {
        /* 
            Вообще, тут лучше было бы использовать тэг template, 
            но по идее студенты про него на этом этапе еще не в курсе, да и задача стоит у них
            руками элементы пощупать 
        */
        const fragment = document.createDocumentFragment()

        const oneCard = document.createElement('div')
        oneCard.classList.add('place-card')

        const imgCard = document.createElement('div')
        imgCard.classList.add('place-card__image')
        imgCard.style.backgroundImage = `url(${link})`

        const btnImgCard = document.createElement('button')
        btnImgCard.classList.add('place-card__delete-icon')

        const descCard = document.createElement('div')
        descCard.classList.add('place-card__description')

        const h3Card = document.createElement('h3')
        h3Card.classList.add('place-card__name')
        h3Card.textContent = name

        const btnLike = document.createElement('button')
        btnLike.classList.add('place-card__like-icon')

        //сливаем их в один
        fragment.appendChild(imgCard)
        imgCard.appendChild(btnImgCard)
        fragment.appendChild(descCard)
        descCard.appendChild(h3Card)
        descCard.appendChild(btnLike)
        oneCard.appendChild(fragment)

        return oneCard
    }
    static remove(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
        element.parentNode.removeChild(element)
    }
    static like(element) {
        element.classList.toggle('place-card__like-icon_liked')
    }
}
