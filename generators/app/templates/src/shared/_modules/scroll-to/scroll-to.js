import scrollTo from '../../_scripts/helpers/scrollTo';

export default class ScrollTo {
    constructor() {
        this.name = 'scroll-to';
        console.log('%s module', this.name);

        this.elements = document.querySelectorAll('[data-scroll-to]');

        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.elements.length &&
            this.elements.forEach(el => {
                el.addEventListener('click', this.clickHandler.bind(this));
            });
    }

    clickHandler({target}) {
        event.preventDefault();

        const el = document.getElementById(target.dataset.scrollTo);
        scrollTo(el.offsetTop, null, 1600);
    }
}
