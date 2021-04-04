export default class Overlay {
    constructor() {
        this.name = 'overlay';
        console.log('%s module', this.name.toLowerCase());

        this.el = document.querySelector('.js-overlay');

        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.el &&
            this.el.addEventListener('click', this.onClickOverlay.bind(this));
    }

    onClickOverlay(event) {
        this.el.classList.remove('is-visible');
    }
}
