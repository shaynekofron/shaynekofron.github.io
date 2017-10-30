//Javascript Assignment 

function validateForm(){
    var a = document.contactSheet.firstname.value; 
    var b = document.contactSheet.lastname.value;
    var c = document.contactSheet.emailaddress.value;
    var d = document.contactSheet.message.value;
    
  
    
    //validation for each, return false when they dont enter anything
    
    
    if (a == "" || a == null)
        {
            alert("Please enter first name.");
            return false;
        }
    else if (b == "" || b == null)
        {
            alert("Please enter last name");
            return false;
        }
    else if(c == "" || c == null)
        {
            alert("Please provide your email");
            return false; 
        }
     else if(d == "" || d == null)
        {
            alert("Please fill out text box with your question or problem.");
            return false;  
        }
}
 
//Clear information provided            
            
function clearForm()
{
    document.getElementById(contactSheet).reset();
}            