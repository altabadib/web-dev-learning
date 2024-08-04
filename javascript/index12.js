console.log("this is date and time");
let dat= new Date();
console.log(dat);

let dat1= new Date(0);
console.log(dat1);

let newdate = new Date("2030-10-14")
console.log(newdate);

let newdate1 = new Date(2050,9,14,4,30,60,10)
console.log(newdate1);

let yr= newdate1.getFullYear()
console.log("the year is ", yr);

let mn= newdate1.getMonth()
console.log("the month is ", mn);

let dt= newdate1.getDate()
console.log("the date is ", dt);
// same goes for time and seconds

newdate1.setDate(43)
console.log(newdate1);

newdate1.setSeconds(930)
console.log(newdate1)



function updatetime(){
     time = new Date();
     document.getElementById('time').innerHtml=time;
}

setInterval(1000,updatetime);

