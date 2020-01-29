class Popup {
    constructor({ node, closeElement, contentNodes }) {
        this._node = node
        this._closeElement = closeElement
        this._contentNodes = {}
        if (contentNodes.length > 0) {
            contentNodes.forEach((item) => {
                this._contentNodes[item] = document.querySelector(item)
            })
        }
        this._node.addEventListener('click', (event) => this._clickHandler(event))

    }

    _clickHandler(event) {
        if (event.target.classList.contains(this._closeElement)) {
            this.close()
        }
    }

    open(content) {
        this._node.classList.add('popup_is-opened')
        content.classList.remove('popup__content_hidden')
    }

    close() {
        this._node.classList.remove('popup_is-opened')
        Array.from(Object.keys(this._contentNodes)).forEach((item) => {
            if (!this._contentNodes[item].classList.contains('popup__content_hidden')) {
                this._contentNodes[item].classList.add('popup__content_hidden')
            }
        })
    }
}