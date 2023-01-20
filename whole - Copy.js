
function login(){
    var Name = document.getElementByClass("Name").value;
    
    var Email = document.getElementByClass("password").value;
    var Feedback = document.getElementByClass("Feedback").value;
   
      if(Name==""){
        alert("Name space can not be empty!");
  
      }else if(Email==""){
        alert("You must enter your email!");
      }else if(Feedback==""){
            alert("Enter you comment");
      }else{
        document.write("Submitted.")
           
     }
   }