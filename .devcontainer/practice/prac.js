// console.log("hello world");

// var firstName = "syed";
// console.log(firstName);

// firstName = "salman";
// console.log(firstName);

// console.log("");

// let v2 = "syed";
// console.log(v2);

// v2 = "salman";
// console.log(v2.length);
// let firstName = "    syed   ";
// console.log(firstName.length);

// let newstring = firstName.trim();

// console.log(newstring)
// console.log(newstring.length);

// let v1;
// console.log(typeof v1);

// console.log(typeof undefined);
// console.log(typeof null);
// let age = 17;

// if(age>=18){
//     console.log('user can Vote');
// } else {
//     console.log('use can not Vote');
// }

// let num = 14;

// if(num%2===0){
//     console.log("even");
// } else {
//     console.log("odd");
// }
// let i = 0;

// while (i <= 9) {
//   console.log(i);
//   i++;
// }
// console.log(`current value of i is ${i}`);


// let i=0;
// do {
//     console.log(i);
//     i+=1;
// } while (i<10);
;
;
// for(let i=1; i<=10; i+=1){
//     console.log(i);
// }

// let i=1;
// while(i<9){
//     console.log(i);
//     i++;
// }

// for(let i=1; i<9; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
;
;
;
;
;
;
;
// let fruits = ["apple","mango","grapes"];
// console.log(fruits);
// fruits.push("banana");
// console.log(fruits);



// let array1 = ["i1","i2"];

// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
// let array2 = array1.slice(0).concat(["i3"]);
// let array2 = [...array1.concat(["i3"])];


// console.log("array1", array1);
// console.log("aray2", array2);
;
;
;
;
;
;
;
// const fruits = ["i1","i2"];
// const fruits2 = [];
// let i= 0;
// while (i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits);
// console.log(fruits2);
;
;
;
;
;
;
// destructuring

// const fruits = ["apple", "mango", "grapes","litchi"];

// let [f1, , f2] = fruits;

// console.log(f1);
// console.log(f2);
// console.log(gArray);
;
;
;
;
;
;
;
// OBJECTS

// const newArray = [..."1234"];
// console.log(newArray);

// console.log("");

// const obj1 = {
//     name: "syed",
//     age : 30
// }
// console.log(obj1);
// console.log("");

// const obj2 = {..."1234"};
// console.log(obj2);

// const newArray = [..."123456789"];
// console.log(newArray);

// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);
;
;
;
;
;
;

// const band = {
//     name: "syed",
//     age: 30
// };
//  let {name: var1, age: var2} = band;
//  console.log(var1, var2);



// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mobit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]
// for(let user of users){
//     console.log(user.firstName);
// }

// function sum2num(){
//     console.log(2+4);
// }
// sum2num();

// function sum3num(){
//     return 1+2+3;
// }
// console.log(sum3num());

// function sum3num(num1,num2,num3){
//     return num1+num2+num3;
// }
// // console.log(sum3num(1,2,3));
// const res = sum3num(1,2,3);
// console.log(res);


// function even(number){
//     return number % 2 === 0;
// }

// const res = even(51);
// console.log(res);

// const even = number => {
//     return number % 2 === 0;
// }
// console.log(even(3));

// function firstChar(string){
//     if(string.length < 7){
//         return string;
//     }else{
//         return string[0];
//     }
// }
// console.log(firstChar("salman"));


// function pres(array, target){
//     for(let i=0; i<array.length; i++){
//         if(array[i] === target){
//             return i
//         }        
//     }
//     return "NOT FOUND"
// }
// // const myArray = ['a','b','c','d'];
// const res = pres(['a','b','c','d'], 'c');
// console.log(res);

// const pres = (array, target) => {
//     for(let i in array){
//         if(array[i] === target){
//             return i;
//         }
//     }
//     return -1
// }
// const res = pres(['a','b','c','d'], 'w');
// console.log(res);



// const users = [
//     {uid: 1, name: "syed"},
//     {uid: 2, name: 'zaidi'}
// ]

// users.forEach(function(user){
//     console.log(user.name);
// })

// users.forEach(user=> console.log(user.name))





// const numbers = [2,4,6,8];

// const myFunc = (number, index) => {
//     console.log(`index is ${index} number is ${number}`);
// }
// numbers.forEach(myFunc);

// const numbers = [2,4,6,8];

// numbers.forEach(function(number, index){
//     console.log(`index is ${index} number is ${number}`);
// });





// REST

// const addAll = (...numbers)=> {
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }
// const ans = addAll(1,2,3,4,5);
// console.log(ans);

// ORRRRRRRR

// let numbers = [1,2,3];
// let total = 0;
// for(let number of numbers){
//     total = total + number;
// }
// console.log(total);





// const userCart = [
//     {id: 1, name: "mobile", price: 12000},
//     {id: 2, name: "mobile", price: 13000},
// ]
// let total = 0;
// userCart.forEach((user) => {
//     total += user.price;
// });
// console.log(total);





// MAP

// const numbers = [3,4,5,6];

// const square = numbers.map( number => number*number);
// console.log(square);

// console.log("hello world!!");


// methods

// const person = {
//     firstName : "syed",
//     age : 30,
//     about : function(){
//         console.log(`person name is ${this.firstName}`)
//     }
// }
// person.about();



// function about(hobby, music){
//     console.log(this.firstName, hobby, music);
// }
// const user1 = {
//     firstName: "syed",
// }
// const user2 = {
//     firstName: "zaidi",
// }

// about.call(user1, "coding", "atif");




// const user1 = {
//     firstName: "syed",
//     about: function(){
//         console.log(this.firstName);
//     }
// }
// const user2 = {
//     firstName: "zaidi",
// }

// user1.about.call(user2)




// const bttn = document.querySelector(".btn");

// function myFunc(){
//     console.log("you clicked me!!");
//     console.log(this);
// }
// bttn.addEventListener("click", myFunc)

// bttn.addEventListener("click", ()=> {
//     console.log("you clicked me!!");
//     console.log(this);
// })



// const allButtons = document.querySelectorAll(".btns button");
// console.log("allButtons");
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//     console.log("you clicked me!!")
// })

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }

// for (let i=0; i<allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }

// const button = (bttn)=> {
//   bttn.addEventListener("click", (e) => {
//         console.log(e);
//     })  
// }

// allButtons.forEach(button)

















// project



// const mainButton = document.querySelector("button");
// const body = document.body;
// const curentColor = document.querySelector(".curent-color");

// function colorGenerator(){
//   const red = Math.floor(Math.random()* 256);
//   const green = Math.floor(Math.random()* 256);
//   const blue = Math.floor(Math.random()* 256);
//   const randomColor = `rgb(${red}, ${green}, ${blue})`
//   return randomColor;
// }


// mainButton.addEventListener("click", () => {
//   const randomColor = colorGenerator();
//   body.style.backgroundColor = randomColor;
//   curentColor.textContent = randomColor;
// })













// callback




// function myFunc(callback){
//   console.log("task 1");
//   callback();
// }

// function myFunc2(){
//   console.log("task 2");
// }
// myFunc(myFunc2);

// ORRRRRRR

// myFunc( () => {
//   console.log("task 2");
// });




 


// important callbacks


// function get2Numbers(number1, number2, onSuccess, onFailure){
//   if(typeof number1 === "number" && typeof number2 === "number"){
//       onSuccess(number1, number2);
//   } else {
//     onFailure();
//   }
// }

// function add2Numbers(num1, num2){
//   console.log(num1+num2);
// }
// function wrongType(){
//   console.log("wrong data type")
// }

// get2Numbers(6, 4, add2Numbers, wrongType);







// function get2Numbers(number1, number2, onSuccess) {
//     var sum = number1 + number2;
//     onSuccess(sum);
// }

// function add2Numbers(sum) {
//       console.log(sum);
// }

// get2Numbers(6, 4, add2Numbers);






























// practice


// function say(msg, msg2){
//     console.log(this.name, msg, msg2);
// }

// let user1 = {
//     name: "syed"
// }

// const ans = say.bind(user1);
// ans("awesome ","man");







// const myArray = [1,2,3,4,4,2,2];
// const uniq = new Set(myArray);
// console.log(uniq);







// function f1() {
//     setTimeout(() => {
//         console.log(x);
//         console.log(y);
//     }, 2000);
// }
// f1();

// var x = 2;
// let y = 12;















// function hello(name){
//     var length = 0;
//     while(name[length] !== undefined)
//     length++;
//     return length;
// }
// console.log(hello("salman"));






// const multAll = (...numbers)=> { 
//     let total = 1;
//     for(let number of numbers){
//         // total = total * number;
//         total *= number;
//     }
//     return total;
// }
// const ans = multAll(3,3);
// console.log(ans);









// let word = "tit for tat";
// var newStr = "";
// for (var i = word.length-1; i >= 0; i--){
//     newStr += word[i];
// }
// console.log(newStr);

// ORRRRRRRRR

// const reversed = input => {
//     var newstr = "";
//     for (let i = input.length-1; i>=0; i--){
//         newstr += input[i];
//     }
//     return newstr;
// }
// console.log(reversed("tit for tat"));


// ORRRRRRRRRRRRRRRRRRRR

// function reverseString(str) {
//     console.log(str.split("").reverse().join("")) ;
// }
// reverseString("Welcome");

// ORRRRRRRRRRRRRRRRRRRR


// function reverseString(str) { 
//     const strRev =  [...str].reverse().join(""); 
//     console.log(strRev); 
// } 
// reverseString("abc"); 
// reverseString("JavaScript"); 
// reverseString("tit for tat"); 




// const str = "tit for tat";
// let reversedStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }
// console.log(reversedStr);

// function rev(inp){
//     console.log(inp.split(" ").reverse().join(" "));
// }
// rev("tit for tat")




// function reverseString(str) {
//         splt = str.split(" ").reverse().join(" ");
// //      spl = splt.reverse().join(" ");
//         console.log(splt);
//     }
// reverseString("tit for tat")





// let inp = [1,1,2,2,3,3,4,5,6]
// let dup = inp.filter((ele,ind) => inp.indexOf(ele) !== ind)
// console.log(dup);








// let arr = [1,1,2,2,3,3,4,5,6]
// let largest = arr.sort((a,b) => b-a)[0]
// console.log(largest);







// function fact(num) {
//     if (num===0 || num===1)
//         return 1;
//     for (var i = num-1; i>1; i--){
//         num = num*i;
//     }
//     return num;
// }
// console.log(fact(4));

// ORRRRRRRRRRRRRRRR

// function fact(num) {
//     var res = num;
//     if (num === 0 || num === 1)
//         return 1;
//     while(num>1){
//         num--;
//         res = res * num;
//     }
//     return res; 
// }
// console.log(fact(4));








// function countVowels(string){
//     vowel = 0;
//     // var string = s.toString();
//     for (var i = 0; i <= string.length-1; i++){
//         if(string.charAt(i)=="a" ||string.charAt(i)=="e" ||string.charAt(i)=="i" ||string.charAt(i)=="o" ||string.charAt(i)=="u")
//         vowel += 1;
//     }
//     return vowel;
// }
// console.log(countVowels("salman"));


// str = 'salman';
// const vowel = inp => {
//     v = ''
//     for (let i =0; i<inp.length; i++){
//         if (inp.charAt(i)=='a'||inp.charAt(i)=='e'||inp.charAt(i)=='i'||inp.charAt(i)=='o'||inp.charAt(i)=='u'){
//              v += ` ${inp.charAt(i)}`;
//         }
//     }
//     return v;
// }
// console.log(vowel(str));







// function alternate(s){
//     var chars = s.toLowerCase().split("");
//     for (var i=0; i<chars.length; i=i+2){
//         chars[i] = chars[i].toUpperCase();
//     }
//     return chars.join("");
//     // return chars.reverse().join(" ");
// }
// console.log(alternate('salman'));

// ORRRRRRRRRRRRRRRRRRRRRRRRRR


// let letter = "salman";
// alt = letter.split('').map((letter, i) => (i % 2) == 0 ?  letter.toUpperCase() : letter.toLowerCase() ).join('')
// console.log(alt);







// for (let i =1; i<6; i++){
//     for (let j=i; j<6; j++){
//         console.log("*");
//     }
//     console.log("");
// }
//          *****
//          ****
//          ***
//          **
//          *








// CAPITALIZE...........

// function caps(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(caps("salman"));








// LENGTH OF ARRAY W/O LENGTH PROPERTY

// var a = [1,2,3,4,5];
// console.log(a.length);

// ORRRRRRRRRRRRRRRRRRRRR

// let s = [1,2,3,4,5];
// var len = 0;
// while(s[len] !== undefined){
//     len++;
// }
// console.log(len);

// ORRRRRRRRRRRR -----> FOR STRING OUTPUT

// let s = [1,2,3,4,5];
// // c = s.join("");
// var len = 0;
// let text = [];
// while(s[len] !== undefined){
//     text += s[len];
//     len++;
// }
// console.log(len);
// console.log(text);
// console.log(typeof text);







// EVEN ODDsssssssssssssssssssss

// let arr = [1,2,3,4,5,6];
// let even = [];
// for(var i = 0; i<arr.length; i++){
//     if(arr[i] % 2 == 0){
//     even.push(arr[i]);
//     // even += arr[i];
//     }
// }
// console.log(even);
// console.log(typeof even);

// ORRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// const isOdd = (...numbers) => {
//     let even = "";
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             even += numbers[i];
//         }
//     }
//     return even;
// }
// const ans = isOdd(1,2,3,4,5,6);
// console.log(ans);

// ORRRRRRRRRRRRRRRRRRRRRRRRRRRR

// USE FILTER METHOD

// const arr = [1,3,4,2,5]
// const even = arr.filter(number => number%2===0);
// console.log(even);







// DUPLICATE NUMSsssssssssssssss

// let arr = [1,2,3,4,5,3];
// let dup = [];
// for(var i = 0; i<arr.length; i++){
//     if(arr[i] == 3) dup.push(arr[i]);
// }
// console.log(dup);

// ORRRRRRRRRRRRRRRRRRR

// const multAll = (...numbers) => {
//     let dup = "";
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] == 3) {
//             dup += numbers[i];
//         }
//     }
//     return dup;
// }
// const ans = multAll(1,2,3,4,5,3);
// console.log(ans);

// ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// const multAll = (...numbers) => {
//     let dup = "";
//     for (let num of numbers) {
//         if (num == 3) {
//             dup += num;
//         }
//     }
//     console.log(dup);
// }
// multAll(1,2,3,4,5,3);














// SCOPE VAR VS LETTTTTTTTTTT

// function f2(){
// for (let i = 0; i<3; i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, i*1000)
// }
// }
// f2();






// IIFE...............IMMEDTLY INVOKED FUNC.

// (function(){
//     console.log("salman");
// })();








// localStorage                       LOCALSTORAGE

// const user = {
//     name: "syed",
//     age: 30,
// };

// const store = JSON.stringify(user);

// localStorage.setItem("test", store);

// console.log(JSON.parse(localStorage.getItem("test")));


// ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR  WITH  TIMER  OF  2  SECONDS.


// function deleteItems() {
//     localStorage.clear();
// }

// function f1() {
//     setTimeout(() => {
//         deleteItems();
//     }, 2000);

//     const user = {
//     name: "syed",
//     age: 30,
// };

// const store = JSON.stringify(user);

// localStorage.setItem("test", store);

// console.log(JSON.parse(localStorage.getItem("test")));
// }
// f1();











// const datas = [
//     {name: 'Salman', age: 30},
//     {name: 'Saniya', age: 40}
// ]
// function updateContent(){
//     setTimeout(()=>{
//         let op = "";
//         datas.forEach((data,index)=> {
//             op += `<h1> ${data.name} </h1>`
//         })
//         return document.body.innerHTML = op;
        
//     }, 1000);
// }
// updateContent();





























// Promise


// function myPromise(){
//     return new Promise((resolve, reject)=> {
//         const value = true;
//         if (value){
//             resolve("resolved");
//         }else{
//             reject("rejected");
//         }
//     })
// }

// const a = myPromise();
// console.log(a);



// async function asyncCall(){
//     const result = await myPromise();
//     // return result;
//     console.log(result);
// }
// asyncCall()









// function sumThree(...el) {
//     return new Promise((resolve, reject)=> {
//         if (el.length < 3) {
//             reject ("NA");
//         } else {
//             let sum = 0;
//             for (i=0; i<el.length; i++){
//                 sum += el[i];
//             }
//             resolve("sum: " + sum);
//         }
//     })
// }

// sumThree(1,2, 3, 4)
// .then(result => console.log(result))
// .catch(error => console.log(error));

// // OR OR OR ORR ORRRRRRRRRRRRRRRR

// async function asyncCall(){
//     const a = await sumThree(1,2,3,4);
//     console.log(a);
// }
// asyncCall();

















































// Project 1

// console.log("hellooooooo");

// const todoForm = document.querySelector(".form-todo");
// const todoInput = document.querySelector(".form-todo input[type='text']");
// const todoList = document.querySelector(".todo-list");

// todoForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     const newText = todoInput.value;
//     const newLi = document.createElement("li");
//     const newLiInnerHTML = `
//     <span class="text">${newText}</span>
//             <div class="todo-buttons">
//                 <button class="todo-btn done">Done</button> 
//                 <button class="todo-btn remove">Remove</button> 
//             </div>
//     `
//     newLi.innerHTML = newLiInnerHTML;
//     todoList.append(newLi);
//     todoInput.value="";
// });

// todoList.addEventListener("click", (e)=>{
//     if (e.target.classList.contains("remove")){
//         const targetedLi = e.target.parentNode.parentNode;
//         targetedLi.remove();
//     }
//     if (e.target.classList.contains("done")){
//         const liSpan = e.target.parentNode.previousElementSibling;
//         liSpan.style.textDecoration = "line-through";
//     };
// })



// const search = document.getElementById('searchTxt');
// search.addEventListener("input", ()=>{
//     const inputVal = search.value;
//     console.log("input event fired", inputVal);
//     const textVal = document.getElementById("#textid");
//     Array.from(textVal).forEach(function(element){
//         const cardTxt = element.getElementByTagName('span');
//         // if (cardTxt.includes(inputVal)){
//         //     element.style.display = "none";
//         // } else {
//         //     element.style.display = "none";
//         // }
//         console.log(cardTxt);
//     })
// })

































// PROJECT 2......................................................................................................

// const insert = document.querySelector('#insert');
// insert.addEventListener('click', () => {
//   const subject = document.querySelector('#subject');
//   const positionSelect = document.querySelector('#position');
//   subject.insertAdjacentHTML(positionSelect.value, '<strong>inserted text</strong>');
// });

// const reset = document.querySelector('#reset');
// reset.addEventListener('click', () => {
//   document.location.reload();
// });



















































// let a= 10;
// a=100;

// CURRYING..................................................................

// function evaluate(operation){
//     return function(a){
//         return function(b){
//             if (operation==='sum') return a+b;
//             else if (operation==='mult') return a*b;
//             else if (operation==='divide') return a / b;
//             else null;
//         }
//     }
// }
// console.log(evaluate('mult')(6)(2));
// ..........................SAME..TO..SAME..................................

// function evaluate(operation){
//     function val1(a){
//         function val2(b){
//             if (operation==='sum') return a+b;
//             else if (operation==='mult') return a*b;
//             else if (operation==='divide') return a / b;
//             else null;
//         }
//         return val2
//     }
//     return val1
// }
// console.log(evaluate('sum')(2)(2));

// ..........................................................................

// function updateContent(cl){
//     return function(content){
//         document.querySelector("." + cl).textContent = content;
//     };
// }
// const update = updateContent("demo");
// update("Hi Salman");

// ORRRRRRRRRRRRRR

// console.log(updateContent("demo")("hiiii"));

// ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// function updateContent(){
//     return function(){
//         document.body.innerHTML = `<h1> hey </h1>`;
//     };
// }
// updateContent()();  









//  DESTRUCTURING & SPREAD OPERATOR............................................

// const alphabet = ["A",'B','C','D','E','F'];

// const [a,...c] = alphabet;

// console.log(a);
// // console.log(b);
// console.log(c);

// ............................................................................

// function sumMult(a, b) {
//     return [a+b, a*b, a/b];
// }
// const [sum, mult, div='No division'] = sumMult(2,3);

// console.log(mult);
// console.log(sum);
// console.log(div);

// ...........................................................................

// const person1 = {
//     name: 'salman',
//     age: 30,
//     food: 'roti',
//     address: {
//         city: 'jbp'
//     }
// }
// const person2 = {
//     age:40
// }
// const {name: var1, age, address : {city}} = person1
// console.log(age);

// let p = {...person1, ...person2};
// console.log(p);
// ...........................................................................

// function print({name, age, address:{city}, food='rice'}){
//     console.log(name,age, city, food);
// }
// print(person1);









// DEFER  ASYNC...............................................................

// const prod = document.querySelector("#demo");

// prod.addEventListener("click", (e)=>{
//     // document.body.innerHTML = `<h1> ${e} </h1>`
//     console.log(e.target);
// });









// CLOSURES..................................................................

// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// let ans = x();
// console.time();
// ans();
// console.timeEnd();
// ..........................................................................

// function sum(a,b,c){
//     return {
//         func1: function(){
//             return a+b;
//         },
//         func2: function(){
//             return a+b+c;
//         }
//     }
// }
// var store = sum(1,1,1);
// console.log(store.func1());
// console.log(store.func2());











// MEMOIZATION...............................................................

// function fib(n) {
//     if(n<=2){
//         return 1
//     }
//     else {
//     return fib(n-1) + fib(n-2)
//     }
// }
// console.time();
// console.log(fib(44));
// console.timeEnd();
// ........................................................................
// function fib(n, prev = []) {
//     if (prev[n] != null) {
//         return prev[n]
//     }
//     // result = n<=2 ? 1 : fib(n-1, prev) + fib(n-2, prev)
//     let result;
//     if (n<=2) {
//         result = 1;
//     } else {
//        result = fib(n-1, prev) + fib(n-2, prev)
//     }
   
//     prev[n] = result
//     return result
// }
// console.time();
// console.log(fib(44));
// console.timeEnd();

// ........................................................................

// const prev = [];
// function square(n){
//     if (prev[n] != null){
//         return prev[n]
//     }
//     let result = 0;
//     for (let i=1; i<=n; i++){
//         for (let j=1; j<=n; j++){
//             result += 1;
//         }
//     }
//     prev[n] = result;
//     return result;
// }
// console.time();
// console.log(square(3000));
// console.log(square(3000));
// console.log(square(3000));
// console.timeEnd();







// RECURSION BEST EXAMPLE.....................................................

// function fac(n){
//     if (n==0 || n==1){
//         return 1;
//     }
//     else {
//         return n * fac(n-1);
//     }
// }
// console.log(fac(4));

// ..........................................................................

// let num = 1;
// function show(){
//     console.log("hi" , num);
//     num++;
//     if (num <= 20)
//     show();
// }
// show()









// .....................................................................

// CONTENT-VISIBILITY: AUTO
// LOADING="LAZY"
// INTERSECTION-OBSERVER
// CRITICAL CSS

// .....................................................................









// function display()  
// {  
// var set = new Set();    
// set.add("jQuery");    
// set.add("AngularJS");    
// set.add("Bootstrap");    
// for (let elements of set) {    
//  console.log(elements+" <br>");    
// }     
// }  
// display();



// function display()  
// {  
// var ws = new WeakSet();    
// var obj1={};    
// var obj2={};    
// ws.add(obj1);    
// ws.add(obj2);    
// //Let's check whether the WeakSet object contains the added object    
// console.log(ws.has(obj1)+"<br>");    
// console.log(ws.has(obj2));     
// }     
// display()




// function loadScript(src){
//     const script = document.createElement("script");
// script.src = src;
// document.head.prepend(script);
// }

// loadScript("prac.js");