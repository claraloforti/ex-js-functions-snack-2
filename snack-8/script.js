function contoAllaRovescia(num) {
    const timer = setInterval(() => {
        console.log(num);
        num = num - 1;
        if (num < 0) {
            console.log("Tempo scaduto!");
            clearInterval(timer);
        }
    }, 500);
}

contoAllaRovescia(10);