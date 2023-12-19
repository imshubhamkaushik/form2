// const submitButton = document.getElementById('submitButton');

// Function to open the modal
function openModal() {
  $("#exampleModalCenter").modal("show");
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); //Prevent the default form submission
  
  //Get Form values
  const fName = document.getElementById("firstname").value;
  const lName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const pincode = document.getElementById("pincode").value;
  const state = document.getElementById("state").value;

  let isValid = true;
  let errorMessage = "";

  //Validation for First Name and Last Name
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(fName) || !nameRegex.test(lName)) {
    isValid = false;
    errorMessage += "Please enter a valid name.\n";
  }

  // Validation for EMail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return; //Stop form submission if validation fails
  }

  //Validation for Phone Number
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    isValid = false;
    errorMessage += "Phone number must be 10 digits.\n";
  }

  //Validation for Pincode
  const pincodeRegex = /^[0-9]{6}$/;
  if (!pincodeRegex.test(pincode)) {
    isValid = false;
    errorMessage += "Pincode should contain 6 digits.\n";
  }

  if (!isValid) {
    alert("Invalid input! \n" + errorMessage);
    return;
  } else {
    openModal();

    //Show form information in the console
    console.log("Form Data:-");
    console.log("First Name:". fName);
    console.log("Last Name:", lName);
    console.log("EMail:", email);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Pincode:", pincode);
    console.log("State:", state);
  }

  //Prepare data to be sent
  const formData= {
    firstName: fName,
    lastName: lName,
    email: email,
    phone: phone,
    address: address,
    city: city,
    pinxode: pincode,
    state: state
  }
  //Send data to the server using Axios POST request
  axios.post('',formData)
  .then(function(res){
    console.log('Data sent to server: ', res.data);
  })
  .catch(function (err){
    console.error("Error sending data to server: ", err);
  })

  this.reset(); //reset the form
});

//If validation passes, construct the message to display
// const message = `Thank you For registering with us, ${fName} ${lName}`

// alert(message);
// let popup = document.getElementById("popup")

// function openPopup(){
//     popup.classList.add("open-popup")
// }

// function closePopup(){
//     popup.classList.remove("open-popup");
// }

// if(fName ==''|| lName == '' || email == '' || phone == '' || address == '' || city == '' || pincode == ''){
//     swal({
//         title: "Field Empty!!!",
//         text: "Field entry is missing!",
//         icon: "warning",
//         button: "Ok",
//       });
// }else{
//     swal({
//         title: "Good job!",
//         text: "The information is submitted!",
//         icon: "success",
//         button: "Ok",
//       });
// }
