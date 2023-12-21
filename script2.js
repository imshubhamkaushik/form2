// Function to open the modal
function openModal() {
  $("#exampleModalCenter").modal("show");
}

document
  .getElementById("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); //Prevent the default form submission
    try {
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
        //Show form information in the console
        console.log("Form Data:-");
        console.log("First Name:", fName);
        console.log("Last Name:", lName);
        console.log("EMail:", email);
        console.log("Phone:", phone);
        console.log("Address:", address);
        console.log("City:", city);
        console.log("Pincode:", pincode);
        console.log("State:", state);
      }

      //Prepare data to be sent
      const formData = {
        firstName: fName,
        lastName: lName,
        email: email,
        phone: phone,
        address: address,
        city: city,
        pincode: pincode,
        state: state,
      };
    } catch (err) {
      console.log(`An error occurred: ${err.stack}`);
    }
    //post function
    async function submitDataToServer(formData) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          formData,
          config
        );

        console.log("Data has been submitted");
      } catch (error) {
        console.log(
          `Something Went Wrong while posting the date to server`,
          error.stack
        );
      }
    }

    await submitDataToServer();
    openModal();
    this.reset(); //reset the form
  });
