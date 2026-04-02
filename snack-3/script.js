function eseguiOperazione(a, b, operazione) {
    return operazione(a, b);
}

const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

console.log(eseguiOperazione(2, 3, somma));
console.log(eseguiOperazione(2, 3, moltiplica));