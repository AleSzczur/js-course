class FinalText {
    text() {
        return "Thank you for using the calculator"
    }
}

class Calculator extends FinalText {
    constructor(value1) {
        super();
        this.value = value1;
    }

    addition(value1, value2) {
        return value1 + value2 + this.value
    }

    multiplication(value1, value2) {
        return value1 * value2 + this.value
    }

}

const doTheCalculation = new Calculator(5)
// const doTheCalculation2 = new Calculator(true)
// const doTheCalculation3 = new Calculator("Eloszeq")
let wynik =
    doTheCalculation.addition(doTheCalculation.addition(5, 5), 5)

result = doTheCalculation.multiplication(2, 4);

console.log(doTheCalculation.text())