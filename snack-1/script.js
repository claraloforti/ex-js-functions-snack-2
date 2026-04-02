function sommaDichiarativa(num1, num2) {
    return num1 + num2;
}

const sommaAnonima = function (num1, num2) {
    return num1 + num2;
}

const sommaArrow = (num1, num2) => num1 + num2;


console.log(sommaDichiarativa(1, 2));
console.log(sommaAnonima(2, 2));
console.log(sommaArrow(4, 3));