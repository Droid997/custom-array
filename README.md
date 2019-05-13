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

var arr =  new customArray(5,1);
// arr => [1,1,1,1,1]
```
### parameters
> size | optional, default = 0
> value | optional
### returns
> array =[]
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
clears all the values of the array

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
> index => index at which element should be inserted 
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
Event is fired when one of the following  occours 
- ```push```
- ```pop```
- ```shift```
- ```unshift```

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
- ```push```
- ```pop```
- ```shift```
- ```unshift```

>Note: First observe event is fired first and based on the event type registred function gets called

### parameters
> event => can be one of the following "```push```","```pop```","```shift```","```unshift```"
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
[ initialize ]: <https://github.com/Droid997/custom-array#initialize>
[ extend ]: <https://github.com/Droid997/custom-array-API#extend>
[ reduceSize ]: <https://github.com/Droid997/custom-array-API#reduceSize>
[ clear ]: <https://github.com/Droid997/custom-array-API#clear> 
[ valueAt ]: <https://github.com/Droid997/custom-array-API#valueAt> 
[ insertAt ]: <https://github.com/Droid997/custom-array-API#insertAt> 
[ remove ]: <https://github.com/Droid997/custom-array-API#remove> 
[ observe ]: <https://github.com/Droid997/custom-array-API#observe> 
[ unobserve ]: <https://github.com/Droid997/custom-array-API#unobserve> 
[ registerEvent ]: <https://github.com/Droid997/custom-array-API#registerEvent> 
[ unregisterEvent ]: <https://github.com/Droid997/custom-array-API#unregisterEvent> 
 