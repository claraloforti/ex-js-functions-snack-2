function creaContatoreAutomatico(ms) {
    let contatore = 0;
    return function () {
        const timer = setInterval(() => {
            contatore = contatore + 1;
            console.log(`Contatore: ${contatore}`);
            if (contatore === 10) {
                clearInterval(timer);
            }
        }, ms);
    }
}

const timer = creaContatoreAutomatico(300);
timer();