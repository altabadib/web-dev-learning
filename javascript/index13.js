console.log("this is arrow function tutorial")

function greet(){
     console.log("good morning")
}
greet();

let greet =()=>console.log("My name Is Adib")

let greet1= ()=>
     console.log("good morning")
greet1();

let sum=(a,b)=>{
     return a+b;
}

let half=a=>a/2;

let sum1=(a,b)=> a+b;

setTimeout(() => {
   console.log('we are inside set timeout')  
}, 2000);

let obj1={
     greeting: "good morning",
     names:["afreen","adib","nafis","tausif"],
     speak(){
         this.names.forEach((student)=>{
          console.log(this.greeting +"kukdu koo" + student);
         })

         } 
     }
     obj1.speak();



