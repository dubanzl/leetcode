function getPrimeNumbers(limit) {
  const primes = [];

  // Loop through all numbers from 2 to the given limit
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;

    // Check divisors from 2 up to the square root of the number
    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
      if (number % divisor === 0) {
        isPrime = false; // Not a prime
        break; // Stop checking, we already know it's not prime
      }
    }

    // If it’s still marked as prime, add it to the list
    if (isPrime) {
      primes.push(number);
    }
  }

  return primes;
}

// Example of use:
const n = 30;
console.log(`Prime numbers up to ${n}:`, getPrimeNumbers(n));
