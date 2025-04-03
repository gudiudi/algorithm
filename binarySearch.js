const nums = [1, 5, 8, 15, 20, 40, 100];

const binarySearch = (nums, target) => {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) return mid;
		if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
};

console.log(binarySearch(nums, 20));
