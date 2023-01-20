
function Submit(form){
    let Name = document.getElementById("name").value;
    
    let Email = document.getElementById("password").value;
    let Feedback = document.getElementById("Feedback").value;
   
      if(Name==""){
       alert("Please fill out this field");
       
       
      }else if(Email==""){
        alert("Please fill out this field");
      }else if(Feedback==""){
            alert("Please fill out this field.");
      }else{
        document.write("Submitted.")
           
     }
     
   }