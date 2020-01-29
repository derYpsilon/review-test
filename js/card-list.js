class CardList {
    constructor(
        node,
        cardsArray,
        createCard,
        likeCard,
        removeCard,
        zoom,
        zoomContent,
    ) {
        this._parentNode = node
        this._cardsArray = cardsArray
        this._createCard = createCard
        this._likeCard = likeCard
        this._removeCard = removeCard
        this._zoom = zoom
        this._zoomContent = zoomContent
    }

    init() {
        this._parentNode.addEventListener('click', (event) => this._onClick(event))
    }

    addCard(item) {
        this._parentNode.appendChild(this._createCard(item))
    }

    render() {
        this._cardsArray.forEach((item) => {
            this.addCard(item)
        })
    }

    _onClick(event) {
        // щёлкнули по лайку
        if (event.target.classList.contains('place-card__like-icon')) {
            this._likeCard(event.target)
            return
        }
        // щёлкнули по иконке удаления
        if (event.target.classList.contains('place-card__delete-icon')) {
            this._removeCard(event.target.closest('.place-card'))
            return
        }
        // Зум
        if (event.target.classList.contains('place-card__image')) {
            const popupImage = document.querySelector('.popup__image')
            popupImage.src = event.target.style.backgroundImage.slice(5, -2)
            this._zoom(this._zoomContent)
            return
        }
    }
}
