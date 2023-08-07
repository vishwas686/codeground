// 1.words vs keywords
//   example =>  rahul = word
//               boy = word
//               2018 = keyword
//               is = keyword
//               if,else,let = keywords

// 2.var ,const ,let 
//   example => var(values can be changed) = var x=12; var x=14; return x=13;
//              const (value cannot change) = const y=567; y=999; return y=567;
//              let(works as a variabile) = let x=12; let x=14; return x=14;

// 3.hoisting variable and functions are hoisted which means 
//            there declaration is moved on the top of code.
//    (hoisting means using a variable before its declaration.)
//    console.log(a);
//    var a; (declaration) 
//    a= 12; (initialization)
// it means that when we use console.log(a); then it will automatically
// move the declaration on top of the code which is (var a) by which we 
// we will see return vale as undefined because it will only move the 
// declaration up not the intialization part and as we know that (var a) 
// has no value so it returns undefined.and this is called hoisting.

//                      undefined= which exist but we dont know the value
//                      not-defined=  which does not exist

// 4.types in js 
//   1.primitive => number, string, null, undefined,
//   2.reference => [] () {} 

// 5.conditionals
//   1.if else =>
//   2.else if =>

// 6.loops =>  1.for  2.while
//   
//   1.for  
//       for loop syntax: for(var i = 0; i<11; i++){
//                            console.log(i);
//                        }
//       output : 0 to 10

//   2.while
//      while loop syntax: 
//                         var a =12
//
//                         while(a<20){
//                              a++; console.log(a)
//                         }

// 7.functions => a particular code which you want to use again and again
//                so then you can define it as a functions and call it 
//                wherever you want to use it.
// 
//                function hello(){
//                       console.log("hello world");
//                }
//                output:   
//                
//                hello();
//                output: hello world

// 8.arguments and parameters
//       arguments => the real value used here in a function hello(12,13,14);
//       parameters => variable for the values in the function.

// 9.arrays = give you freedom to store multiple data in a variable.(group of values)
//   example=>  var arr =[1,2,3,4];
//                arr[0];
//                output will be: 1

// 10.push pop shift unshift =>
//    
//   var arr = [1,2,3,4,5,6,7];
//   arr.push(8);  adds 8 to the back of array
//                  output:[1,2,3,4,5,6,7,8]
//   var arr = [1,2,3,4,5,6,7];
//   arr.pop();  removes the last value from array
//               outout:[1,2,3,4,5,6]
//   var arr = [1,2,3,4,5,6,7];
//   arr.unshift(0);   adds a value at front of array
//                      output:[0,1,2,3,4,5,6,7]
//   var arr = [1,2,3,4,5,6,7];
//   arr.shift();      removes first element form an array
//                     output:[2,3,4,5,6,7]
//   var arr = [1,2,3,4,5,6,7];
//   arr.splice(2,1)    removes value from index pov

// 11.objects => holding details of a individual in a key value in pair
//    1.) blank obj
//                  var a = {};
//    2.) filled obj 
//                  var a = {
//                  age: 24,
//                  name:"sudip",
//                  email:"sudipsingh78@gmail.com",
//                  contact: 9842821678
//                  }
// 12.property and methods =>
//     # PROPERTY is like keys (name of variable)
//                var a = {                           properties
//                  age: 24,                            (age)
//                  name:"sudip",                       (name)
//                  email:"sudipsingh78@gmail.com",     (email)
//                  contact: 9842821678                 (contact)
//                  }
//     # METHOD are like values (if value of aproperty in a 
//                                 object is function the it is method).
//                 var a = {
//                  age: 24,                                 Method
//                  name:"sudip",
//                  email:"sudipsingh78@gmail.com",
//                  contact: 9842821678
//                  parents: function(){}                   (parents)
//                  }

// 13.updating object properties 
//                 var a = {
//                  age: 24,                              
//                  name:"sudip",
//                  email:"sudipsingh78@gmail.com",
//                  contact: 9842821678
//                  parents: function(){}                  
//                  }
//                 a.name ="vishwas"
//                 output:    age: 24,                              
//                            name:"vishwas"
//                            email:"sudipsingh78@gmail.com"
//                            contact: 9842821678
//                            parents: