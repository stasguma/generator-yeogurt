export default class UploadBtn {
    constructor() {
        this.name = 'upload-btn';
        console.log('%s module', this.name.toLowerCase());

        this.elms = Array.from(document.querySelectorAll('.js-upload-input'));

        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.elms &&
            this.elms.forEach(el => {
                el.addEventListener('change', this.onChange.bind(this));
            });
    }

    onChange({ target }) {
        this.handleFiles(target.files, target);
    }

    handleFiles(files, target) {
        const buttonEl = target.closest('.js-upload-btn');
        const titleEl = buttonEl.querySelector('.js-upload-btn-title');

        if (!files.length) {
            titleEl.textContent = titleEl.dataset.defaultTitle;
        }
        console.log('files', files);

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (!file.type.startsWith('image/')) {
                alert('Возможно загрузить только картинку.');
                continue;
            }

            const img = document.createElement('img');
            img.classList.add('obj');
            img.file = file;
            console.log(file);
            // preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

            const reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {
                    console.log(e.target);
                    if (files.length > 1) {
                        titleEl.textContent = `Выбрано ${files.length}шт.`;
                    } else {
                        titleEl.textContent = file.name;
                    }
                    // aImg.src = e.target.result;
                };
            })(img);
            reader.readAsDataURL(file);
        }
    }

    // printFile(file) {
    //     var reader = new FileReader();
    //     reader.onload = function(evt) {
    //         console.log(evt.target.result);
    //     };
    //     reader.readAsText(file);
    // }
}
