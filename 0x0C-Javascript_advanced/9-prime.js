function countPrimeNumbers() {
    for (var i = 2; i <= 100; i++) {

        var isPrime = true;

        for (var j = 2; j < i; j++) {
            if (i % j === 0 && i !== j) {
                isPrime = false;
            }
        }
        if (isPrime === true) {
            console.log(i);
        }
    }
}
const timeBefore = performance.now();
countPrimeNumbers();
const timeAfter = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${timeAfter - timeBefore} milliseconds.`);