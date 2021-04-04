export default class Toggler {
    constructor() {
        this.name = 'toggler';
        console.log('%s module', this.name);

        this.toggler = document.querySelectorAll('[data-toggler]');

        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.toggler &&
            this.toggler.forEach(el => {
                el.addEventListener('click', this.onToggle.bind(this));
            });
    }

    onToggle({ target }) {
        event.preventDefault();

        const wrapper = document.getElementById(target.dataset.target.slice(1));
        wrapper.classList.toggle('show');
        const ariaEl = target.closest('[aria-expanded]');

        this.setAriaExpanded(ariaEl);
    }

    setAriaExpanded(el, fn = null) {
        const isExpanded = el.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            el.setAttribute('aria-expanded', false);
        }
        else {
            if (typeof fn === 'function') {
                fn();
            }
            el.setAttribute('aria-expanded', true);
        }
    }
}
