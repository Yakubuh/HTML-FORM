function myname(){

    if(document.myform.fname.value == null || document.myform.fname.value == "" )
    {
        alert("first name cannot be empty");
            return false;
    }
        if(document.myform.lname.value == null ||  document.myform.lname.value =="")
        {
            alert("last name cannot be empty");
            return false;
    }
    
        
    if(document.myform.gender.value==null){
        alert("Select your gender");
    }
    else{
        alert("Submitted");
        document.location.reload(true);
    }
    
    
    }

    

