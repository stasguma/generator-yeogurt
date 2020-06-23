export default class Tabs {
    constructor() {
        this.name = 'tabs';
        console.log('%s module', this.name.toLowerCase());

        this.menuElements = document.querySelectorAll('[data-tab]');

        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.menuElements.length &&
            this.menuElements.forEach(el => {
                el.addEventListener('click', this.onChange.bind(this));
            });
    }

    clear() {
        this.menuElements.forEach(el => {
            el.parentElement.classList.remove('is-active');
            const id = el.getAttribute('data-tab');
            document.getElementById(id).classList.remove('is-active');
        });
    }

    onChange({ target, currentTarget }) {
        event.preventDefault();

        this.clear();
        target.parentElement.classList.add('is-active');
        const id = currentTarget.getAttribute('data-tab');
        const contentEl = document.getElementById(id);
        contentEl.classList.add('is-active');
    }
}
