import MicroModal from 'micromodal';

export default class Modal {
    constructor() {
        this.name = 'modal';
        console.log('%s module', this.name.toLowerCase());

        this.init();
    }

    init() {
        MicroModal.init();
    }
}
