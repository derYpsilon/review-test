class Popup {
    constructor({ node, close, init, submit, formName }) {
        this._node = node
        this._closeElement = close

        if (init) init()

        if (submit) {
            document.forms[formName].addEventListener('submit', (event) => submit(event))
        }
        this._closeElement.addEventListener('click', () => this.close())
    }

    open() {
        this._node.classList.add('popup_is-opened')
    }

    close() {
        this._node.classList.remove('popup_is-opened')
    }
}