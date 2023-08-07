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