function stampaOgniSecondo(messaggio) {
    return setInterval(() => {
        console.log(`sto stampando ogni secondo: ${messaggio}`);
    }, 1000);
}

const output = stampaOgniSecondo("ciao");

setTimeout(() => {
    clearInterval(output);
}, 5000);