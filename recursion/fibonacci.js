const fibonacciIterative = (n) => {
	let a = 1;
	let b = 1;
	const result = [0, 1, 1];

	for (let i = 3; i < n; i++) {
		const current = a + b;
		result.push(current);
		b = a;
		a = current;
	}

	return result;
};

const fibonacciRecursive = (n) => {
	if (n < 3) return [0, 1];

	const sequence = fibonacciRecursive(n - 1);
	const fib = sequence[sequence.length - 1] + sequence[sequence.length - 2];
	return [...sequence, fib];
};

console.log(fibonacciIterative(8));
console.log(fibonacciRecursive(8));

/* Even Fibs */
const fibs = (n, sequence = [1, 2]) => {
	if (sequence.length >= n)
		return [...sequence]
			.filter((x) => x % 2 === 0)
			.reduce((acc, value) => acc + value, 0);

	const fib = sequence[sequence.length - 1] + sequence[sequence.length - 2];
	return fibs(n, [...sequence, fib]);
};

fibs(10);

const evenFib = (limit) => {
	let a = 1;
	let b = 2;
	let result = b;

	while (b < limit) {
		const fib = a + b;
		a = b;
		b = fib;

		if (b % 2 === 0) {
			result += fib;
		}
	}

	return result;
};

console.log(evenFib(4000000));
