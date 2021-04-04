// Easing Equations
// https://gist.github.com/creotiv/effdedbe7c5526a493bf

Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
};

Math.easeInCubic = function(t, b, c, d) {
    var tc = (t /= d) * t * t;
    return b + c * tc;
};

Math.easeInOutQuintic = function(t, b, c, d) {
    var ts = (t /= d) * t,
        tc = ts * t;
    return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};

Math.easeInOutQuart = function(t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
};

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
const requestAnimFrame = (function() {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
})();

export default function scrollTo(to, callback, duration = 500) {
    const start = position();
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = function() {
        // increment the time
        currentTime += increment;
        // find the value with the easing function
        const val = Math.easeInOutQuart(currentTime, start, change, duration);
        // move the document.body
        move(val);
        // do the animation unless its over
        if (currentTime < duration) {
            requestAnimFrame(animateScroll);
        }
        else {
            if (callback && typeof callback === 'function') {
                // the animation is done so lets callback
                callback();
            }
        }
    };
    animateScroll();
}

// because it's so fucking difficult to detect the scrolling element, just move them all
function move(amount) {
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
}
function position() {
    return (
        document.documentElement.scrollTop ||
        document.body.parentNode.scrollTop ||
        document.body.scrollTop
    );
}
