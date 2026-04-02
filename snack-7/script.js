function eseguiEferma(messaggio, avvio, stop) {
    setTimeout(() => {
        const timer = setInterval(() => {
            console.log(messaggio);
        }, 500);

        setTimeout(() => {
            clearInterval(timer);
        }, stop);
    }, avvio);
}

eseguiEferma("Ciao!", 1000, 5000);