function currentTime(){
const date = new Date()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()

let time = `${hour} : ${minute} : ${second}`
// //console.log(time)
// //if hour min and second is of single digit add 0 before
// //updateTime() 
// //Convert this clock into AM and PM 
 document.getElementById("clock").innerText = time

 }
//currentTime()

setInterval(currentTime
//   () => { const date = new Date()
// let hour = date.getHours()
// let minute = date.getMinutes()
// let second = date.getSeconds()

// let time = `${hour} : ${minute} : ${second}`
// // //console.log(time)
// // //if hour min and second is of single digit add 0 before
// // //updateTime() 
// // //Convert this clock into AM and PM 
//  document.getElementById("clock").innerText = time

    
    
//   } 
    
    
   , 1000)