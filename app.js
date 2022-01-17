// function validation(){
// var fname= document.getElementById("fname").value;
// var lname= document.getElementById("lname").value;
// var pass1= document.getElementById("pass1").value;
// var pass2= document.getElementById("pass2").value;
// const firstName = document.getElementById("fname");
// firstName.addEventListener("change", validate_fname)

function validate_fname() {
  let fname = document.getElementById("fname").value;
  if (fname.trim().length == 0) {
    document.getElementById("fn").innerHTML = "Please enter valid first name";
    // alert("Invalid Name");
    return false;
  }
  else{
    document.getElementById("fn").innerHTML = "";
    return true;
  }
}
function validate_lname() {
  let lname = document.getElementById("lname").value;
  if (lname.trim().length == 0) {
    document.getElementById("ln").innerHTML = "Please enter valid last name";
    
    return false;
  }
  else{
    document.getElementById("ln").innerHTML = "";
  }
}

function changeImage() {

  var Image_Id = document.getElementById('pfp');
  if (Image_Id.src.match("image/profilepic1.jfif")) {
     Image_Id.src="image/logo.png";
  }
  else if (Image_Id.src.match("image/logo.png")) {
    Image_Id.src="image/profilepic1.jfif";
 }
}
// var passval= "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
//  if(fname.trim().length == 0){
//      document.getElementById("fn").innerHTML="Please enter valid first name";
//      return false;
//  }
//  else{
//     document.getElementById("fn").innerHTML="";

//  }

//  if(lname.trim().length == 0){
//     document.getElementById("ln").innerHTML="Please enter valid last name";
//     return false;
// }
// else{
//     document.getElementById("ln").innerHTML="";

//  }

// //  if(pass1.match(passval)){
// //     document.getElementById("ps1").innerHTML="Password satisfies all conditions";
// //  }
// //  else{
// //     document.getElementById("ps1").innerHTML="Password doesnot satisfies all conditions";
// //     return false;
// //  }
// if(pass1!=pass2){
//     document.getElementById("ps2").innerHTML="Password mismatched!";
//     return false;
// }
// else{
//     document.getElementById("ps2").innerHTML="";
//     return true;
// }

// }

function validate_password() {
  let pass = document.getElementById("pass1").value;
  var ideal_us = /[A-Z]+/;
  var ideal_digit = /[0-9]+/;
  var ideal_char = /[@,#,$,&]+/;
  if (pass.length >= 7) {
    if (pass.match(ideal_us)) {
      if (pass.match(ideal_digit)) {
        if (pass.match(ideal_char)) {
          return true;
        } else {
          alert("Please enter at least one special character!");
          return false;
        }
      } else {
        alert("Please enter at least one digit!");
        return false;
      }
    } else {
      alert("Please enter atleast one uppercase character!");
      return false;
    }
  } else {
    alert("Password must be at least 7 characters long!");
    return false;
  }
}
function validate_confirmpass() {
  let cp = document.getElementById("pass2").value;
  let p = document.getElementById("pass1").value;
  if (cp == p) {
    return true;
  } else {
    alert("Password does not match!");
    return false;
  }
}
function validate_email() {
  let email = document.getElementById("email");

  if (email.value.indexOf("@") > 1) {
    if (email.value.indexOf(".") > 5) {
      if (
        email.value.charAt(email.value.length - 4) == "." ||
        email.value.charAt(email.value.length - 3) == "."
      ) {
        return true;
      } else {
        alert("Email must contain 2 or 3 letters after . character ");
        return false;
      }
    } else {
      alert("Email must contain . and atleast 3 letters between . and @");
      return false;
    }
  } else {
    alert("Email must contain @ sign after few letters");
    return false;
  }
}


function changeBackground(){
  // var x=document.getElementById("particles-js").style.backgroundColor;
  // console.log(x);
  if(document.getElementById("particles-js").style.backgroundColor == "gray" ){
  document.getElementById("particles-js").style.backgroundColor= "green";
}
else{
  document.getElementById("particles-js").style.backgroundColor= "gray";
}

}

function clearDetails()
{
  document.getElementById("lname").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phn").value = "";
  document.getElementById("pass1").value = "";
  document.getElementById("pass2").value = "";
  document.getElementById("ln").innerHTML = "";
  document.getElementById("fn").innerHTML = "";

  // for (i=0; i < 9; i++) {
  //   document.getElementsByClassName('tb')[0].style.borderColor = 'green';
  // }

  const para = document.createElement('p');
  const node = document.createTextNode("Form has been cleared");
  para.appendChild(node);
  const element = document.getElementById("msg");
  element.appendChild(para);
  return false;
}

// function changepage(){
//   location.href = "/index.html";
// }
