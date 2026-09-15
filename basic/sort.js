////// sort: for numbers ALWAYS provide a compare function
 const nums = [2, 5 , 3 , 4, 1];
 nums.sort((a,b) => a - b );
 console.log(nums)
 nums.sort((a,b) => b - a );
 console.log(nums)