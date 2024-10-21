var a=[1,2,3,4,5];
var lengthofa=a.length;
console.log(lengthofa);
a.push(6);
console.log(a)
a.pop()
console.log(a)
a.unshift(0);
console.log(a)
a.shift(0)
console.log(a)
a.reverse()
console.log(a)
var index=a.indexOf(3)
console.log(index)
var exists=a.includes(4)
console.log(exists)
var b=[5,9,8,2,1]
b.sort(function(a,b){return a-b});
console.log(b)
var c=['banana','apple','grapes']
var c1=c.join(' ');
console.log(c1)


var a=[10,20,30];
a.push(40);
a.shift();
console.log(a);


var b=["apple","banana","orange"];
b.reverse();
console.log(b)
var string=b.join(' ');
console.log(string)

var array=[60,30,70,10];
array.sort(function(a,b){return a-b;})
console.log(array)
array.pop();
console.log(array)


var a=[5,6,7];
a.unshift(3,4);
console.log(a)
a.shift();
console.log(a);
var length=a.length;
console.log(length)

var a=[1,2,3];
var b=[4,5,6];
var combine=a.concat(b);
console.log(combine)
combine.sort(function(a,b){return a-b;})
console.log(combine)