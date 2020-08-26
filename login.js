 var user = document.getElementById('us');/*username*/
 var pass = document.getElementById('pwd');/*password*/

 document.getElementById('button').addEventListener("click", () => {
  
  
  if( user.value === "admin"){
     if ( pass.value === "123"){
    window.location.href = "index223.html";    
  } else {
    check2();
  }
} else { 
  check();
}
});
 
function check(){
  var str = user.value;
  var num = str.length;
  if(num === 0){
    alert("Enter username donkey!");
  } else {
    alert("Incorrect username");
  }
}

function check2(){
  var str1 = pass.value;
  var num1 = str1.length;

  if(num1 === 0) {
    alert("Enter password donkey!");
  } else{
    alert("Incorrect password")
  }
}
 
 
   



    
