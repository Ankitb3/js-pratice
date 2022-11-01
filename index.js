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

