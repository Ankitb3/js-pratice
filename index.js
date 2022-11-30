// // ..................variable........................
// let a=10;       //declare variable  here value 10 stored in a
// let  b=20;
// // console.log("sum is",a+b)    // sum of two number

// // ...................operators..........................
// // 1)addittion(+)
// console.log("sum is", a + b)
// // 2)substract(-)
// console.log("sum is", a -b)
// // 3)multiply(*)
// console.log("sum is", a * b)
// // 3)modules(%)
// console.log("sum is", a % b)
// // 3)divide(/)
// console.log("sum is", a / b)



// .......................function..............................

// function add(){
//     const a=5,b=2;
//     console.log(a+b)
// }
// add()

// function add(a,b){
//     console.log(a+b)
// }
// console.log(add(2,6))

// ...................Array.............
//array is collection of diff. data types its store multiple value in single variable

// let arr = ["Ankit","abhishek","Arjun"] 
// Array methods
// reverse,pop,push,shift,unshit,sort
// arr.pop()
// console.log(arr)             //removes last element of array

// reverse()
// arr.reverse()
// console.log(arr)         //REVERSE ARRAY ELEMENTS


// push()
// arr.push("monika")
// console.log(arr) 

// arr.sort()                  //sort array elements alphabetica order
// console.log(arr) 


//splice 
// const arr = ["jan","feb","march","jun","july"]
// arr.splice(5,0,"aug")
// console.log(arr)

//slice it create new array from array also it take two agr(1,3) but first one not include    ex:
// const arr = ["jan", "feb", "march"]
// const newarray = arr.slice(1,2)

// const arr =["jan","feb","march"]
// const newarray=arr.slice(0)
// console.log(arr)
//  console.log(newarray)

// .......foreach...
// let numbers = [1, 3, 4, 9, 8];

// function sqr(number){
//     console.log(number*number)
// }
// numbers.forEach(sqr)
// .........................obj.......................
// const arr = {
//     name:'Ankit',
//     age:29,
//     education:"bca"
// }
// console.log(arr.name)

// ......array of object........
// const students=[{                        //array of object
//     name:"ANkit",
//     age:20,
//     edu:"bca"
// },{
//     name: "mukesh",
//     age: 18,
//     edu: "12"
// },{

//     name: "abhishek",
//     age: 19,
//     edu: "10"

// }]
// console.log(arr[0]['name'])
// students.map((student)=>{
//     console.log(student)
// })


// ***************LOOPS***************
// let a=10;
// if(i=10){
//     console.log("true")
// }else{
//     console.log("false")
// }

// while loop**************************
// for(let i=1;i<=10;i++){      //table of 2 using while
//     console.log(i*2)
// }

//ifelsif
// let i=12;
// if(i=2){
//     console.log("false")
// }
// else if(i=9){
//     console.log("false")
// }
// else if(i=11){
//     console.log("false")
// }
// else{
//     console.log("no one condition is true")
// }


// let a=20;
// if(a=30 && 10 ){
//    console.log("true")
// }else{
//     console.log("false")
// }

// *********************Es6 concepts************************

// ****promises******
// function promise(){
// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("im p1")
//         resolve(true)
//     },2000)
// })
//     let p2 = new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             console.log("im p2")
//             reject(false)
//         },4000)
//     })
// // }
// // to  get the value
// p1.then((value)=>{
//     console.log(value)
// })
//to get catch  
// p2.catch((error)=>{
//     console.log("some error catch in p2")
// })





//    function ngpw(){
//     setTimeout(() => {
//          console.log("21")
//      }, 3000)

//  }
//    function punew(){

//      setTimeout(() => {
//          console.log("30")
//      }, 1000)
//  }



// *****************json**********************
// json means js object notation

// const students =[{
//        name:'Ankit',
//        course:"mernstack",
//        duration:"6 months",
//        fess:"5000"
// },{
//     name: 'mukesh',
//     course: "reactjs",
//     duration: "6 months",
//     fess: "1000"
// },{
//     name: 'abhishek',
//     course: "python",
//     duration: "2 months",
//     fess: "2000"
// }]

// students.map((student)=>{
//     console.log(student["duration"])
// })
//***using foreach loop */
//   students.forEach((student)=>{
//     //  console.log(student["name"],student["fess"])
//     console.log("hello my name is" + " " + student["name"])
//   })

//****using map*** */
// students.map((student) => {
//     //  console.log(student["name"],student["fess"])
//     console.log("hello my name is" + " " + student["name"])
// })


// *******templet string*******
// let a=10;
// let b=20
// let a = "hello im ankit\n";
// let b = "im web devloper"
// console.log(`${a+b}`)

// **************promises*************

// let mypromise = new Promise(function(resolve,rejecect){
//      resolve()
//      rejecect()
// })
// mypromise.then({
//       function(value){
//         console.log("sucess")
//       },
//       function(err){
//         console.log("you got err")
//       }

// })


// *********array of object******
// const datas = [{
//   name:"Ankit",profession:"Software engg."
// },{
//   name: "mukesh", profession: "Software engg."
// }];
// function getdatas(){
//   setTimeout(() => {
//     datas.forEach((data)=>{
//       console.log(data.name)
//     })

//   }, 1000);
// }
// function createdata(newdata){
//   setTimeout(() => {
//         datas.push(newdata)
//   }, 1000);
// }
// getdatas()
// createdata({name:"abhishek",profession:"software engg."})

//for in loop in array
//get index number
// let myfriends = ["ankit","abhishek","arjun","rohit"]
// for(let elements in myfriends){
//   console.log(elements)
// }


//for of loop in array
//get elements
// let myfriends = ["ankit", "abhishek", "arjun", "rohit"]
//  for(let elements of myfriends){
//   console.log(elements)
// }


//foreach in array
//call function foreach in array



// **********async/await********

// async function main(){
//   const add = new promise((resolve)=>{
//     resolve("sucess")
//   })
// }
// main.then(
//     console.log("success")
// )


//map and reduce method

// const array1=[1,4,9,16,25];
// // num>9
// let newArr= array1.map((currentelement,index,arr)=>{
//     return currentelement>9;
// })
// console.log(array1)
// console.log(newArr)

//return new array without changing of old array
// let newarr =array1.map((ele,index,arr)=>{
//     return `index no = ${index} and the value is ${ele} belong to ${arr}`
// })
// console.log(newarr)




//challenge time 
//1.find sq root of an each element in an  array
//sol:-
// let arr = [25,36,49,64,81];
// let sqrtt = arr.map((curEle)=>{
//     return Math.sqrt(curEle);    //sqrt method
// })
// console.log(sqrtt)



//2 multipky each ellemnt by 2 and return only those elemtns whivh are greater than 10?
//sol:
// let arr1=[2,3,4,6,8];
// let arr2=arr1.map((curEle)=>{
//     return curEle*2;
// }).filter((curEle)=>{
//     curEle>10;
// })
// console.log(arr2)


//Reduce method()
//convert 3d or 2d array into one D array
//the reduce() method execute a reducer function  (that yot provide )
//on each elemnt of array,resulting single outuput.
//reducer function take four arg
//Accumlator,value,index,array


// let arr =[5,6,2];
// let sum = arr.reduce((accumaltor,curele)=>{
//     debugger;
//     return accumaltor*= curele
// },7)
// console.log(sum)



//Array destructing
// const favlang=["js","php","python","c"]
// let[jsv,,,cv]=favlang;
// console.log(cv)

// how to swap variable
// let a=10,b=20;
// [a,b]=[b,a]
// console.log(a,b)


// Object destructuring
// const biodata={
//     name:"ankit",
//     age:29,
//     deg:"Bca"
        
// }
// let{name,age,deg}=biodata;
// console.log(`my name is ${name} and age is ${age} and deg is ${deg}`)


// Arrow function
// let a=20,b=10;
// const sum=()=>{return a+b
// }
// console.log(sum())

//default parameter
// function mult(a,b){
//     console.log(a*b)
// }
// mult(2,1)



//rest parameter
// function sum(...inputs){
//     console.log(...inputs);
//     let total=0;
//     for(let i of inputs){
//         total+=1

//     }
//     console.log(total)
// }
// sum(1,2,3,4,5,6,8,9)



//Math object  1)sign()  2)trunc()
// let a=5.77;
// console.log(Math.sign(a))  
// console.log(Math.trunc(a))  


//number and global method 1)isfinite 2)isNaN  3)isInteger()
// 1)isFinite
    // let a=Infinity;
    // if(isFinite(a)){
    //     console.log("yes this finite")
    // }
    // else{
    //     console.log("No this is not finite")
    // }

    // 2)isNaN()
    //   let a=5;
    //   console.log(isNaN(a))    output:false


    // 3)isInteger()
    // let a=5;
    // console.log(Number.isInteger(a))  output:true



    //oops
    // class Students{
    //     constructor(name,age,cls){
    //         this.myname=name;
    //         this.myage=age;
    //         this.mycls=cls;
    //     }
    //     biodata(){
    //         console.log(`${this.myname}  ${this.myage}  ${this.mycls} `)
    //     }
    // }

    // class player extends Students {
    //     constructor(game)
    //     super(name,age,cls,game);
    //     this.mygame=game
    // }