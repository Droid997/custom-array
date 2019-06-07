# custom-array [💙]

  

- extends ```Array```

- native + custom methods

- register callbacks on ```push```, ```pop```, ```shift```, ```unshift```

- observe array on ```push```, ```pop```, ```shift```, ```unshift```

# Install

>npm install --save custom-array

## Initialize

```

const customArray = require('custom-array');

var arr = new customArray();

//returns arr with length 0

```

### Constructor (size, value)

```

var arr = new customArray(size?,value?);

// size default = 0

  

var arr = new customArray(5,1);

// arr => [1,1,1,1,1]

```

### parameters

```

size | optional, default = 0;

value | optional;

```

### returns

> array = []

## Custom Methods

* [ initialize ]

* [ extend ]

* [ reduceSize ]

* [ clear ]

* [ valueAt ]

* [ insertAt ]

* [ remove ]

* [ observe]

* [ unobserve ]

* [ registerEvent ]

* [ unregisterEvent ]
* [ fill ]
* [ sum ]
* [  replace ]
* [ copy ]
* [ count ]

# initialize(value)

fills array with the passed value

### parameters

> value | default = 0

### returns

> array with filled values

### usage

```

var arr = new customArray(5);

arr.initialize(1);

// arr => [1,1,1,1,1]

```

  

# extend(newlen)

extends the array length

### parameters

> newlen | default = current array length

### returns

> array with extended length

### usage

```

var arr = new customArray(5);

// arr.length => 5;

arr.extend(10)

// arr.length => 10;

```

  
  

## reduceSize(newlen)

reduces array size

### parameters

> newlen | default= current array length

### returns

> array with reduced length

### usage

```

var arr = new customArray(10);

// arr.length => 10;

arr.reduceSize(5)

// arr.length => 5;

```

## clear()

clears all the values of the array

  

### returns

> cleared array

### usage

```

var arr = new customArray(10,10);

// arr[0] => 10;

arr.clear()

// arr[0] => undefined;

```

  

## valueAt(index)

returns the value at passed index

### parameters

> index

### returns

> value at specified index

### usage

```

var arr = new customArray(10,10);

// arr[0] => 10;

arr.clear()

// arr[0] => undefined;

```

  

## insertAt(index,[items])

inserts elements's at specified index

  

### parameters

> index => index at which element should be inserted

> items => Array of items

### returns

> array

### usage

```

var arr = new customArray(5,5);

// arr => [5,5,5,5,5]

arr.insertAt(2,"a","b","c");

// arr => [5,5,a,b,c,5,5,5]

```

  

## remove(index,count)

remove elements from array

  

### parameters

> index => index at which element should be removed

> count | default=1 => Number of elements to be removed from index

### returns

> array

### usage

```

var arr = new customArray(5,5);

// arr => [5,5,5,5,5]

arr.remove(2);

// arr => [5,5,5,5]

```

## observe(fn)

Event is fired when one of the following occours

-  ```push```

-  ```pop```

-  ```shift```

-  ```unshift```

  

### parameters

> function => function to be called when event occours

> function callback takes ``` array``` and ```element``` as parameters

### returns

> array

### usage

```

var arr = new customArray(5);

arr.observe(function(array,element){

})

arr.push(2);

arr.observe(function(array,element){

//control here

//array => [5]

//element => 5

})

```

  

## unobserve()

Removes ```observe``` callback if present

### returns

> true

### usage

```

var arr = new customArray(5);

arr.observe(function(array,element){

})

arr.push(2);

arr.unobserve()

```

  

## registerEvent(event,fn)

Allows to register custom events on one of the following

-  ```push```

-  ```pop```

-  ```shift```

-  ```unshift```

  

>Note: First observe event is fired first and based on the event type registred function gets called

  

### parameters

> event => can be one of the following ```push``` , ```pop```, ```shift```, ```unshift```

> function => function to be called when event occours

> function callback takes ``` array``` and ```element``` as parameters

  

### returns

> boolean

  

### usage

```

var arr = new customArray(5);

arr.registerEvent('push',function(array,element){

})

arr.push(2);

arr.registerEvent('push',function(array,element){

// control here

// array => [2]

// element => 2

})

```

  

## unregisterEvent(event)

Removes ```registerEvent``` callback for ```event``` specified if present any.

### returns

> boolean

### usage

```

var arr = new customArray(5);

arr.registerEvent('push',function(array,element){

})

arr.push(2);

arr.unregisterEvent("push")
```
## fill ( value, start, end )

fills the array with given value from start index to end index .

### parameters
> value => any value to be filled.
> start => start index | default = 0.
> end => end index | default = array length.

### returns 
> array 

### usage
```
var arr = new customArray(5);
arr.fill(2);
arr => [2 ,2 ,2 ,2 ,2]
```

## sum ()
returns the sum of numbers in the array .

### returns 
> sum 

### usage
```
var arr = new customArray(5,2);
arr => [2 ,2 ,2 ,2 ,2]
arr.push("str");
arr => [2 ,2 ,2 ,2 ,2,"str"]
var sum = arr.sum();
sum => 10
```
## replace (index, value)
index at which the value should be replaced at.

### returns 
> array 

### usage
```
var arr = new customArray(5,2);
arr => [2 ,2 ,2 ,2 ,2]
arr.replace(2,"5");
arr => [2 ,2 ,5 ,2 ,2]
```

## copy (from, to)
copy the current array.

### parameters
> from => from index | default = 0
> to => to index | default = array length
### returns 
> copied array  

### usage
```
var arr = new customArray(5,2);
arr => [2 ,2 ,2 ,2 ,2]
var copiedArray = arr.copy();
copiedArray => [2 ,2 ,2 ,2 ,2]
```

## count (element)
finds the total number of occurrences of the passed element. 
### parameters
> element => element to find the count of.

### returns 
> count  

### usage
```
var arr = new customArray(5,2);
arr => [2 ,2 ,2 ,2 ,2]
var count = arr.count(2);
count => 5
```

[ initialize ]: <https://github.com/Droid997/custom-array#initialize>

[ extend ]: <https://github.com/Droid997/custom-array#extend>

[ reduceSize ]: <https://github.com/Droid997/custom-array#reduceSize>

[ clear ]: <https://github.com/Droid997/custom-array#clear>

[ valueAt ]: <https://github.com/Droid997/custom-array#valueAt>

[ insertAt ]: <https://github.com/Droid997/custom-array#insertAt>

[ remove ]: <https://github.com/Droid997/custom-array#remove>

[ observe ]: <https://github.com/Droid997/custom-array#observe>

[ unobserve ]: <https://github.com/Droid997/custom-array#unobserve>

[ registerEvent ]: <https://github.com/Droid997/custom-array#registerEvent>

[ unregisterEvent ]: <https://github.com/Droid997/custom-array#unregisterEvent>

[ fill ]: <https://github.com/Droid997/custom-array#fill>

[ sum ]: <https://github.com/Droid997/custom-array#sum>

[ replace ]: <https://github.com/Droid997/custom-array#replace>

[ replace ]: <https://github.com/Droid997/custom-array#replace>

[ copy ]: <https://github.com/Droid997/custom-array#copy>

[ count ]: <https://github.com/Droid997/custom-array#count>
