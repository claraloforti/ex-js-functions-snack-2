function eseguiEferma(messaggio, intervallo, stop) {
    const timer = setInterval(() => {
        console.log(messaggio);
    }, intervallo);

    setTimeout(() => {
        clearInterval(timer);
    }, stop);
}

eseguiEferma("Ciao!", 1000, 5000);