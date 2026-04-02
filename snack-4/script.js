function creaTimer(ms) {
    return function () {
        setTimeout(() => {
            console.log('Tempo scaduto!');
        }, ms)
    }
}

const timer = creaTimer(3000);
timer();