function greet(names,byetext){
     console.log('hello good morning' + " " + names + " "+ byetext);
}
greet("afreen", "goodnight")
let time=setTimeout(greet,5000, "afreen", "goodnight" )
console.log(time);
clearTimeout(time);
let interval=setInterval(greet,1000, "afreen","goodnight" );
clearInterval(interval);

function displaytime(){
     time= new Date();
     console.log(time);
     document.getElementById('time').innerHTML=time;
}
let setint=setInterval(displaytime, 1000);

