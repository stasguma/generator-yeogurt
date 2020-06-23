import Choices from 'choices.js';

export default class ChoicesSelect {
    constructor() {
        this.name = 'choices-select';
        console.log('%s module', this.name.toLowerCase());

        this.singleEls = Array.from(
            document.querySelectorAll('.choices-select')
        );

        this.init();
    }

    init() {
        this.singleEls.forEach(el => {
            const choice = new Choices(el, {
                classNames: {
                    selectedState: 'is-selected'
                },
                searchEnabled: false,
                shouldSort: false,
                classNames: {
                    containerInner: el.dataset.choicesInner || 'choices__inner'
                },
                callbackOnCreateTemplates: () => ({
                    choice(classes, choice) {
                        const i = Choices.defaults.templates.choice.call(
                            this,
                            classes,
                            choice
                        );
                        if (choice.selected) i.classList.add('is-selected');
                        return i;
                    }
                })
            });
        });
    }
}
