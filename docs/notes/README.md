# 个人笔记

## Array.reduce() 
﻿

参考：MDN https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

```javascript
Array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)；
```

  

| 属性| 解释  |
|--|--|
| accumulator  | 累加器累加回调的返回值;它是先前在回调的最后一次调用中返回的累计值，如果提供的话，则为initialValue（见下文）。 |
| currentValue | 当前元素在数组中处理。 |
| currentIndex| 数组中正在处理的当前元素的索引。如果提供了initialValue，则从索引0开始，否则从索引1开始。 |
| array| 调用 reduce 的数组 |

### 此例子不带initialValue  每一步的执行结果如下

```javascript

[2,3,4,5].reduce(function(accumulator, currentValue, currentIndex, array){
	return accumulator + currentValue;
}, initialValue);


[2,3,4,5].reduce(function(2,3,1,[2,3,4,5]){
	return 2+ 3; //5
});


[2,3,4,5].reduce(function(2,3,2,[2,3,4,5]){
	return 2+ 3; //5
});



[2,3,4,5].reduce(function(5,4,3,[2,3,4,5]){
	return 5+4; //9
});

[2,3,4,5].reduce(function(9,5,4,[2,3,4,5]){
	return 9+5; //14
});
//所以最后结果就是14
```

### 带参数initialValue  每一步的执行结果如下

参数initialValue直接为开始时accumulator的值

```javascript

[4,5,6,7].reduce(function(accumulator, currentValue, currentIndex, array){
	return accumulator + currentValue;
}, initialValue);


[4,5,6,7].reduce(function(10,4,1,[4,5,6,7]){
	return 10 + 4; //14
},10);


[4,5,6,7].reduce(function(14,5,2,[4,5,6,7]){
	return 14 + 5; //19
},10);


[4,5,6,7].reduce(function(19,5,3,[4,5,6,7]){
	return 19 + 5; //24
},10);


[4,5,6,7].reduce(function(24,6,4,[4,5,6,7]){
	return 24 + 6; //30
},10);


[4,5,6,7].reduce(function(30,7,5,[4,5,6,7]){
	return 30 + 7; //37
},10);
//所以最后结果就是37
```









