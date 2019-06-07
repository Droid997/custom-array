function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
var customArray =
/*#__PURE__*/
function (_Array) {
  _inherits(customArray, _Array);

  function customArray() {
    var _this;

    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, customArray);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(customArray).call(this, size));

    var array = _assertThisInitialized(_this);

    if (value) Array.prototype.fill.call(array, value);
    return _possibleConstructorReturn(_this, array);
  }
  /**
   * 
   * @param  {...any} items - any
   */


  _createClass(customArray, [{
    key: "push",
    value: function push() {
      var array = this;

      try {
        for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
          items[_key] = arguments[_key];
        }

        items.forEach(function (ele) {
          Array.prototype.push.call(array, ele);
          if (array.__proto__.observe) array.__proto__.observe.call(array, array, ele);
          if (array.__proto__.onPush) array.__proto__.onPush.call(array, array, ele);
        });
      } catch (error) {
        throw error;
      }

      return array.length;
    }
  }, {
    key: "pop",
    value: function pop() {
      var array = this;

      try {
        var ele = Array.prototype.pop.call(array);
        if (array.__proto__.observe) array.__proto__.observe.call(array, array, ele);
        if (array.__proto__.onPop) array.__proto__.onPop.call(array, array, ele);
      } catch (error) {
        throw error;
      }

      return ele;
    }
  }, {
    key: "shift",
    value: function shift() {
      var array = this;

      try {
        var ele = Array.prototype.shift.call(array);
        if (array.__proto__.observe) array.__proto__.observe.call(array, array, ele);
        if (array.__proto__.onShift) array.__proto__.onShift.call(array, array, ele);
      } catch (error) {
        throw error;
      }

      return ele;
    }
  }, {
    key: "unshift",
    value: function unshift() {
      var array = this;

      try {
        var ele = Array.prototype.unshift.call(array);
        if (array.__proto__.observe) array.__proto__.observe.call(array, array, ele);
        if (array.__proto__.onUnshift) array.__proto__.onUnshift.call(array, array, ele);
      } catch (error) {
        throw error;
      }

      return ele;
    }
    /**
     * 
     * @param {*} seprater - any character to use as seperator 
     */

  }, {
    key: "toString",
    value: function toString() {
      var seprater = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ",";
      var array = this;
      var joinedString = Array.prototype.join.call(array, seprater);
      return joinedString;
    }
    /**
     * 
     * @param {*} value - any value for initializing the array 
     */

  }, {
    key: "initialize",
    value: function initialize() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var array = this;
      Array.prototype.fill.call(array, value);
      return array;
    }
    /**
     * 
     * @param {*} length - the new length value
     * @returns {*} array 
     */

  }, {
    key: "extend",
    value: function extend() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.length;
      var array = this;
      if (typeof length == "number") throw "length should be a number";else array.length = length;
      return array;
    }
    /**
     * 
     * @param {*} length - the new length value 
     */

  }, {
    key: "reduceSize",
    value: function reduceSize() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.length;
      var array = this;
      if (typeof length == "number") throw "length should be a number";else array.length = length;
      return length;
    }
    /**
     * clears the array
     */

  }, {
    key: "clear",
    value: function clear() {
      var array = this;
      array.length = 0;
      return array;
    }
    /**
     * 
     * @param {*} index - returns value at specified index 
     */

  }, {
    key: "valueAt",
    value: function valueAt(index) {
      var array = this;

      try {
        if (index >= 0) return array[index];else return array;
      } catch (error) {
        throw error;
      }
    }
    /**
     * 
     * @param {*} index - starting index at which the element should be inserted  
     * @param  {...any} items - array of items to be inserted
     */

  }, {
    key: "insertAt",
    value: function insertAt() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      try {
        var array = this;
        if (typeof index == "string") throw "Index should be number";else {
          if (array.length < index) array.length = index;

          for (var _len2 = arguments.length, items = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            items[_key2 - 1] = arguments[_key2];
          }

          items.forEach(function (ele) {
            array.splice(index, 0, ele);
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

  }, {
    key: "remove",
    value: function remove(index) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var array = this;

      try {
        if (typeof index == "number" && index >= 0) {
          array.splice(index, count);
          return array;
        } else throw "Index Should be a number";
      } catch (error) {
        throw error;
      }
    }
    /**
     * 
     * @param {*} value - value to be filled  
     * @param {*} start - starting index 
     * @param {*} end  - ending index
     */

  }, {
    key: "fill",
    value: function fill(value) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.length;
      var array = this;

      try {
        for (var i = start; i <= end; i++) {
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

  }, {
    key: "sum",
    value: function sum() {
      var array = this;

      try {
        var sum = 0;

        for (var i = 0; i < array.length; i++) {
          if (parseInt(array[i]) != "NaN") sum += parseInt(array[i]);
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
     */

  }, {
    key: "replace",
    value: function replace() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var array = this;

      try {
        if (index && value) array[index] = value;
        return array;
      } catch (error) {
        throw error;
      }
    }
    /**
     * 
     * @param {*} from - from index 
     * @param {*} to - to index
     */

  }, {
    key: "copy",
    value: function copy() {
      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;
      var array = this;

      try {
        return array.slice(from, to);
      } catch (error) {
        throw error;
      }
    } // count(element) {
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
     */

  }, {
    key: "count",
    value: function count(element) {
      var array = this;
      var count = 0;
      var start = array.indexOf(element);
      var end = array.lastIndexOf(element);

      for (var i = start; i <= end; i++) {
        if (array[i] == element) count++;
      }

      return count;
    }
    /**
     * 
     * @param {*} fn - function callback  
     */

  }, {
    key: "observe",
    value: function observe(fn) {
      var array = this;
      if (typeof fn == "function") array.__proto__.observe = fn;
      return array;
    }
    /**
     *  remove observe callback
     */

  }, {
    key: "unobserve",
    value: function unobserve() {
      var array = this;
      if (array.__proto__.observe) array.__proto__.observe = undefined;
      return true;
    }
    /**
     * 
     * @param {*} event - event type  
     * @param {*} fn - function callback
     */

  }, {
    key: "registerEvent",
    value: function registerEvent(event, fn) {
      var array = this;

      try {
        if (!event) throw "Event Undefined";else if (!fn) throw "Function Undefined";else {
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
    }
  }, {
    key: "unregisterEvent",

    /**
     * 
     * @param {*} event - event type 
     */
    value: function unregisterEvent(event) {
      var array = this;

      try {
        if (!event) throw "Event Undefined";else {
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
    }
  }]);

  return customArray;
}(_wrapNativeSuper(Array));