export default function() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let type = '';

    if (windowWidth < 768) {
        type = 'mobile';
    } else if (windowWidth > 767 && windowWidth < 1200) {
        type = 'tablet';
    } else {
        type = 'desktop';
    }

    return type;
}
