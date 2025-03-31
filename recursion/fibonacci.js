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

console.log(fibonacciIterative(8));
