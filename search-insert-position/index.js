const searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

				const isTarget = nums[mid] === target;
				const isLowerThenTarget = nums[mid] < target;
a
        if (isTarget) {
            return mid; // Encontrou
        } else if (isLowerThenTarget) {
            low = mid + 1; // Ajuste o low
        } else {
            high = mid - 1; // Ajuste o high
        }
    }

    return low; // Return the index for insertion position
};