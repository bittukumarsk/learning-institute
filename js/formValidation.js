/* Java Script For Form Validation */
function formValidate()
{
      const form = document.getElementById("form");
      const fname = document.getElementById("fname");
      const lname = document.getElementById("lname");
      const dob = document.getElementById("dob");
      const gender = document.getElementById("gender");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const conPassword = document.getElementById("conPassword");
      const slct1 = document.getElementById("slct1");
      const slct2 = document.getElementById("slct2");
      const address = document.getElementById("address");
      const pincode = document.getElementById("pincode");
      const mobile = document.getElementById("mobile");
      checkInputs();
}
function checkInputs()
{      
      const fnameValue = fname.value.trim();
      const lnameValue = lname.value.trim();
      const dobValue = dob.value.trim();
      const genderValue = gender.value;
      const emailValue = email.value;
      const passwordValue = password.value.trim();
      const conPasswordValue = conPassword.value.trim();
      const slct1Value = slct1.value.trim();
      const slct2Value = slct2.value.trim();
      const addressValue = address.value.trim();
      const pincodeValue = pincode.value.trim();
      const mobileValue = mobile.value.trim();
      if(fnameValue === "")
      {
            setErrorFor(fname, 'First Name cannot be blabk');
            return false;
      }
      else
      {
            setSuccessFor(fname);
      }
      if(lnameValue === "")
      {
            setErrorFor(lname, 'Last Name cannot be blabk');
            return false;
      }
      else
      {
            setSuccessFor(lname);
      }
      if(dobValue === "")
      {
            setErrorFor(dob, 'Date of Birth cannot be blabk');
            return false;
      }
     /*  else if(!isDate(dobValue))
      {
            setErrorFor(dob, 'Date of Birth is invalid');
            return false;
      } */
      else
      {
            setSuccessFor(dob);
      }
      if(genderValue === "")
      {
            setErrorFor(gender, 'Gender Should Be Choosen');
            return false;
      }
      else
      {
            setSuccessFor(gender);
      }
      if(emailValue === "")
      {
            setErrorFor(email, 'Email cannot be blabk');
            return false;
      }
      else if(!isEmail(emailValue))
      {
            setErrorFor(email, 'Email is not Valid');
            return false;
      }
      else
      {
            setSuccessFor(email);
      }
      if(passwordValue === "")
      {
            setErrorFor(password, 'Password cannot be blabk');
            return false;
      }
      else if(passwordValue.length<6 || passwordValue.length>12)
      {
            setErrorFor(password, 'Password length must be 6-12');
            return false;
      }
      else
      {
            setSuccessFor(password);
      }
      if(conPasswordValue === "")
      {
            setErrorFor(conPassword, 'Fill for Confirmation');
            return false;
      }
      else if(conPasswordValue !== passwordValue)
      {
            setErrorFor(conPassword, "Password doesn't match");
            return false;
      }
      else
      {
            setSuccessFor(conPassword);
      }
      if(slct1Value === "")
      {
            setErrorFor(slct1, 'Please Choose Course Category');
            return false;
      }
      else
      {
            setSuccessFor(slct1);
      }
      if(slct2Value === "")
      {
            setErrorFor(slct2, 'Please Choose Course Name');
            return false;
      }
      else
      {
            setSuccessFor(slct2);
      }
      if(addressValue === "")
      {
            setErrorFor(address, 'Please provide your complete address');
            return false;
      }
      else
      {
            setSuccessFor(address);
      }
      if(pincodeValue === "")
      {
            setErrorFor(pincode, 'Please Fill Pincode');
            return false;
      }
      else if(pincodeValue.length<6 || (isNaN(pincodeValue)))
      {
            setErrorFor(pincode, 'Must be 6 Digit Numeric');
            return false;
      }
      else
      {
            setSuccessFor(pincode);
      }
      if(mobileValue === "")
      {
            setErrorFor(mobile, 'Provide Phone Number');
            return false;
      }
      else if(mobileValue.length<10 || (isNaN(mobileValue)))
      {
            setErrorFor(mobile, 'Must be 10 Digit Numeric');
            return false;
      }
      else
      {
            setSuccessFor(mobile);
      }

      const entry = document.querySelectorAll(".success").length;
      if(entry<12)
      {
            
      }
      else
      {
            window.location.href = "/welcome.html";
      }
}
function setErrorFor(input, message)
{
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');

      small.innerHTML = message;

      formControl.className = 'form-control error';
      input.focus();
      return false;
}
function setSuccessFor(input)
{
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
}
function isEmail(email)
{
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isDate(dob)
{
      const year = dob.getFullYear();
      alert(year);
      return year.match(/^(19|20)[0-9]{2})$/);
}