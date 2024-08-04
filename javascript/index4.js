let string1= "this is a string"
console.log(string1)
{
     let string1= "this is a another string"
     console.log(string1)

}
 const a= "this canot be change"
 console.log(a);


 let age= 15;
 if (age>18) {
     console.log("you can dring beer")
 }
 else if(age<=10){
     console.log("you are child")
 }
 else{
     console.log("you can drink water")
 }

let cups=45
 switch (cups) {
          case 4:
          console.log("the value of cup is 4")
          break;
          case 15:
          console.log("the value of cup is 15")
          break;
          case 45:
          console.log("the value of cup is 45")
          break;
 
     default:
          console.log("the value of cup is none")
          break;
 }


 const days="monday,tuesday,thursday"
 switch (days) {
     case "monday,tuesday,saturday":
          console.log("computer class")
          break;
          case "monday,tuesday,friday":
               console.log("science class")
               break;
               case "monday,wednesday,saturday":
                    console.log("english class")
                    break;
                    case "monday,tuesday,thursday":
                         console.log("maths class")
                         break;
     default:
          console.log("no class")
          break;
 }