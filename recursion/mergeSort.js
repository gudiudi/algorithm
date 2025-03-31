const mergeSort = (nums) => {
	if (nums.length <= 1) return nums;

	const mid = Math.floor(nums.length / 2);
	const left = mergeSort(nums.slice(0, mid));
	const right = mergeSort(nums.slice(mid));

	return merge(left, right);
};

const merge = (left, right) => {
	const result = [];
	let i = 0;
	let j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}

	return [...result, ...left.slice(i), ...right.slice(j)];
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
