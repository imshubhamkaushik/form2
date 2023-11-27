// Functions to select elements by ID or class
let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

// Selecting form elements
let username = id("username"),
email = id("email"),
password = id("password"), 
form = id("form"), 

errorMsg = classes("error"), 
successIcon = classes("success-icon"), 
failureIcon = classes = classes("failure-icon")


// Engine function to handle form validation

let engine = (id , serial, message) => {
    //The arguments represent the following:

    // id will target our id
    // serial will target our classes [error class, success and failure icons]
    // message will print a message inside our .error class
    
    if(id.value.trim() === ""){//the id.value.trim() will remove all the extra white spaces from the value which the user inputs. You can get an idea of how it works by looking at this illustration
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red"
        
        failureIcon[serial].style.opacity = "1"
        successIcon[serial].style.opacity = "0"

    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green"

        failureIcon[serial].style.opacity = "0"
        successIcon[serial].style.opacity = "1"

    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    engine(username, 0, "Username cannnot be blank");
    engine(email , 1, "Email cannot be blank")
    engine(password, 2, "Password cannot be blank")
})