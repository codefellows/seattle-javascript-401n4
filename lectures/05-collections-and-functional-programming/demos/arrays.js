// In funcitonal programming, we never want to mutate the orignal data

// Here are some techniques for manipulating arrays by leaving the original intact, 
// and creating a new thing with the operation you intend.  

// The tools you can use (do not mutate the original): map, filter, reduce, slice, concat

let numbers = [1,2,3];

  // for example, here's how map works
		let map_a = numbers.map(n=>n*2);
		console.log('map_a', map_a);      // new thing
		console.log('numbers', numbers, '\n');  // old thing (unchanged)


  // Simulate Push (put a thing on the end)
		let pushed = [...numbers, 4];		// spread
		console.log('pushed', pushed);
		console.log('numbers', numbers, '\n');
		
	// Simulate Unshift (put a thing on the front)
		// data.unshift([4]); // Mutates (bad)
		let unshift_concat = [4].concat(numbers);
		let unshift_spread = [4, ...numbers];
		console.log('unshifted via concat', unshift_concat);
		console.log('unshifted with spread', unshift_spread);
		console.log('numbers', numbers, '\n');		

	// Simulate Pop (Remove the last item from an array)
		let popped = numbers.slice(numbers.length);
		console.log('popped', popped);
		console.log('numbers', numbers, '\n');
		
	// Simulate Shift (Remove the last item from an array)
		let shifted = numbers.slice(1);
		console.log('shifted', shifted);
		console.log('numbers', numbers, '\n');