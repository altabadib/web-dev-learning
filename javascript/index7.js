 alert( "this is a message")
 
 let names= prompt("what is your name", "guest")
 console.log(names);

 let deletepost= confirm("do you really want to delete post")
 console.log(deletepost);
 if (deletepost){
     console.log("your post have been sucessfully deleted")

 }
 else{
     console.log("your post have not deleted yet")
     
 }
