function sequenzaOperazioni(operazioni, intervallo) {
    operazioni.forEach((operazione, index) => {
        setTimeout(() => {
            operazione();
        }, intervallo * index);
    });
}

const operazioni = [
    () => console.log("Operazione 1", new Date().toLocaleTimeString()),
    () => console.log("Operazione 2", new Date().toLocaleTimeString()),
    () => console.log("Operazione 3", new Date().toLocaleTimeString())
];

sequenzaOperazioni(operazioni, 5000);