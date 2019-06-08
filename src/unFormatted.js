//*	Functions *//
//	push
//	pop
//	shift
//	unshift
//	toString
//	initialize
//	extend
// 	reduceSize
//	clear
//	valueAt
//	insertAt
//	remove
//	fill
//	sum
//	replace
//	copy
//	count
//	observe
//	unobserve
//	registerEvent
//	unregisterEvent

/**
 * customArray &#x1F495; Extends Array &#x1F497;
 */
class customArray extends Array {
		
	constructor(size = 0, value = null) {
		super(size);

		let array = this;
		if (value)
			Array.prototype.fill.call(array, value);

		return array;
	}

	/**
	 * 
	 * @param  {...any} items - any
	 */
	push(...items) {
		let array = this;
		try {
			items.forEach(function (ele) {

				Array.prototype.push.call(array, ele);

				if (array.__proto__.observe)
					array.__proto__.observe.call(array, array, ele);

				if (array.__proto__.onPush)
					array.__proto__.onPush.call(array, array, ele);

			});
		} catch (error) {
			throw error;
		}

		return array.length;
	}

	pop() {
		let array = this;
		try {

			var ele = Array.prototype.pop.call(array);

			if (array.__proto__.observe)
				array.__proto__.observe.call(array, array, ele);

			if (array.__proto__.onPop)
				array.__proto__.onPop.call(array, array, ele);

		} catch (error) {
			throw error;
		}

		return ele;
	}

	shift() {
		let array = this;
		try {

			var ele = Array.prototype.shift.call(array);

			if (array.__proto__.observe)
				array.__proto__.observe.call(array, array, ele);

			if (array.__proto__.onShift)
				array.__proto__.onShift.call(array, array, ele);

		} catch (error) {
			throw error;
		}

		return ele;
	}

	unshift() {
		let array = this;
		try {

			var ele = Array.prototype.unshift.call(array);

			if (array.__proto__.observe)
				array.__proto__.observe.call(array, array, ele);

			if (array.__proto__.onUnshift)
				array.__proto__.onUnshift.call(array, array, ele);

		} catch (error) {
			throw error;
		}

		return ele;
	}

	/**
	 * 
	 * @param {*} seprater - any character to use as seperator 
	 */
	toString(seprater = ",") {
		let array = this;
		let joinedString = Array.prototype.join.call(array, seprater);
		return joinedString;
	}

	/**
	 * 
	 * @param {*} value - any value for initializing the array 
	 */
	initialize(value = 0) {
		let array = this;
		Array.prototype.fill.call(array, value);

		return array;
	}

	/**
	 * 
	 * @param {*} length - the new length value
	 * @returns {*} array 
	 */
	extend(length = this.length) {
		let array = this;
		if (!isNaN(length))
			throw "length should be a number";
		else
			array.length = length;

		return array;
	}

	/**
	 * 
	 * @param {*} length - the new length value 
	 */
	reduceSize(length = this.length) {
		let array = this;
		if (typeof length == "number")
			throw "length should be a number";
		else
			array.length = length;
		return length;
	}

	/**
	 * clears the array
	 */
	clear() {
		let array = this;
		array.length = 0;
		return array;
	}

	/**
	 * 
	 * @param {*} index - returns value at specified index 
	 */
	valueAt(index) {
		let array = this;
		try {
			if (index >= 0)
				return array[index];
			else
				return array;
		} catch (error) {
			throw error;
		}

	}

	/**
	 * 
	 * @param {*} index - starting index at which the element should be inserted  
	 * @param  {...any} items - array of items to be inserted
	 */
	insertAt(index = 0, ...items) {
		try {
			let array = this;
			if (typeof index == "string")
				throw "Index should be number";
			else {
				if (array.length < index)
					array.length = index;

				items.forEach(function (ele) {
					array.splice(index, 0, ele)

				});
				return array;
			}

		} catch (error) {
			throw error;
		}

	}

	/**
	 * 
	 * @param {*} index - index at which the element should be removed  
	 * @param {*} count - number of elements to be removed starting from the index
	 */
	remove(index, count = 1) {

		let array = this;
		try {
			if (typeof index == "number" && index >= 0) {
				array.splice(index, count);
				return array;
			} else
				throw "Index Should be a number";

		} catch (error) {
			throw error;
		}

	}

	/**
	 * 
	 * @param {*} value - value to be filled  
	 * @param {*} start - starting index 
	 * @param {*} end  - ending index
	 * @returns  array
	 */
	fill(value, start = 0, end = this.length) {
		let array = this;

		try {
			for (let i = start; i <= end; i++) {
				array[i] = value;
			}
			return array;
		} catch (error) {
			throw error;
		}
	}

	/**
	 *  @returns - sum of the numbers in the array 
	 */
	sum() {
		let array = this;
		try {
			let sum = 0;
			for (let i = 0; i < array.length; i++) {
				if (parseInt(array[i]) != "NaN")
					sum += parseInt(array[i]);
			}
			return sum;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * 
	 * @param {*} index - index at which the value should be replaced 
	 * @param {*} value - value to be replaced
	 * @returns array
	 */
	replace(index = undefined, value = undefined) {
		let array = this;
		try {
			if (index && value)
				array[index] = value;

			return array;
		} catch (error) {
			throw error;
		}
	}

	/**
	 * 
	 * @param {*} from - from index 
	 * @param {*} to - to index
	 * @returns copied array
	 */
	copy(from = 0, to = this.length) {
		let array = this;

		try {
			return array.slice(from, to);

		} catch (error) {
			throw error;
		}
	}

	// count(element) {
	// 	let array = this;

	// 	console.time("count");
	// 	try {
	// 		let count = 0;
	// 		let firstIndex = array.indexOf(element);
	// 		let lastIndex = array.lastIndexOf(element);
	// 		if (firstIndex >= 0 && lastIndex >= 0) {
	// 			if (firstIndex == lastIndex)
	// 				count++;
	// 			else {
	// 				let _carray = array.slice(++firstIndex, --lastIndex);
	// 				count+=2;
	// 				while (_carray.indexOf(element) != -1) {
	// 					firstIndex=_carray.indexOf(element);
	// 					lastIndex = _carray.lastIndexOf(element);
	// 					count++;
	// 					_carray = _carray.slice(--firstIndex, lastIndex);
	// 				}
	// 			}


	// 		}
	// 		console.timeEnd("count");
	// 		return count;


	// 	} catch (error) {
	// 		throw error;
	// 	}
	// }

	/**
	 * 
	 * @param {*} element - element to find the count of 
	 * @returns count
	 */
	count(element) {
		let array = this;
		let count = 0;
		let start = array.indexOf(element);
		let end = array.lastIndexOf(element);
		for (let i = start; i <= end; i++) {
			if (array[i] == element)
				count++;
		}

		return count;
	}


	/**
	 * 
	 * @param {*} fn - function callback  
	 */
	observe(fn) {

		let array = this;

		if (typeof fn == "function")
			array.__proto__.observe = fn;

		return array;
	}

	/**
	 *  remove observe callback
	 */
	unobserve() {
		let array = this;

		if (array.__proto__.observe)
			array.__proto__.observe = undefined;

		return true;
	}

	/**
	 * 
	 * @param {*} event - event type  
	 * @param {*} fn - function callback
	 */
	registerEvent(event, fn) {
		let array = this;
		try {
			if (!event)
				throw "Event Undefined";
			else if (!fn)
				throw "Function Undefined"
			else {
				switch (event) {
					case "push":
						array.__proto__.onPush = fn;
						return true;
					case "pop":
						array.__proto__.onPop = fn;
						return true;
					case "shift":
						array.__proto__.onShift = fn;
						return true;
					case "unshift":
						array.__proto__.onUnshift = fn;
						return true;
					default:
						return false;
				}
			}
		} catch (error) {
			throw error;
		}
	};

	/**
	 * 
	 * @param {*} event - event type 
	 */
	unregisterEvent(event) {
		let array = this;
		try {
			if (!event)
				throw "Event Undefined";
			else {
				switch (event) {
					case "push":
						array.__proto__.onPush = undefined;
						return true;
					case "pop":
						array.__proto__.onPop = undefined;
						return true;
					case "shift":
						array.__proto__.onShift = undefined;
						return true;
					case "unshift":
						array.__proto__.onUnshift = undefined;
						return true;
					default:
						return false;
				}
			}
		} catch (error) {
			throw error;
		}
	};


}