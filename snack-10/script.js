function creaThrottler(callback, limite) {
    let ultimaEsecuzione = 0;
    return function (...args) {
        if (Date.now() - ultimaEsecuzione >= limite) {
            ultimaEsecuzione = Date.now();
            callback(...args);
        }
    }
}

const throttledLog = creaThrottler(() => {
    console.log("Eseguito");
}, 2000);

throttledLog();
throttledLog();
setTimeout(throttledLog, 10000);