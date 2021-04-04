import {throttle} from 'lodash';
import deviceType from '../../_scripts/helpers/deviceType';
import scrollTo from '../../_scripts/helpers/scrollTo';

export default class ScrollTop {
    constructor() {
        this.name = 'scroll-top';
        console.log('%s module', this.name);

        this.deviceType = deviceType();
        this.windowHeight = window.innerHeight;
        this.el = document.querySelector('.js-scroll-top');

        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        if (this.el) {
            window.addEventListener('scroll', throttle(this.onScroll.bind(this), 300), {passive: true});
            this.el.addEventListener('click', this.onScrollTopClick.bind(this));
        }
    }

    onScrollTopClick(fn) {
        this.el.classList.add('is-active');
        scrollTo(0, this.removeActiveClass.bind(this), 1600);
    }

    onScroll() {
        this.lastScrollPos = window.scrollY;

        if (!this.ticking) {
            window.requestAnimationFrame(() => {
                this.scrollTopVisibility(this.lastScrollPos);
                this.ticking = false;
            });

            this.ticking = true;
        }
    }

    scrollTopVisibility(scrollPos) {
        if (scrollPos > this.windowHeight) {
            this.el.classList.add('is-visible');
        }
        if (scrollPos <= this.windowHeight) {
            this.el.classList.remove('is-visible');
        }
    }

    removeActiveClass() {
        setTimeout(() => this.el.classList.remove('is-active'), 300);
    }
}
