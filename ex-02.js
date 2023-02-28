function calcFibo(numberToCheck) {
    let limitCalc = numberToCheck

    if (numberToCheck < 8) limitCalc = 8

    let fibonacciNumbers = [0, 1]
    for (let i = 2; i < limitCalc; i++) {
        fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]
    }
    return fibonacciNumbers.includes(numberToCheck) ? 
    `O número ${numberToCheck} faz parte da sequência Fibonacci.` : 
    `O número ${numberToCheck} não faz parte da sequência Fibonacci.`
}
console.log(calcFibo(4))
console.log(calcFibo(21))

