function validationForm() {
  var returnval = true;
  console.log(document.forms);
  var ffirstname = document.forms["myform"]["fname"].value; //[name of the form][name of the particular div tag]
  if (ffirstname.length <= 1) {
    console.log("error");
  } else {
    console.log(ffirstname);
  }

  var flastname = document.forms["myform"]["lname"].value;
  if (flastname.length <= 1) {
    console.log("error");
  } else {
    console.log(flastname);
  }
  var femail = document.forms["myform"]["femail"].value;
  if (femail.length > 15) {
    console.log("error");
  } else {
    console.log(femail);
  }
  var fpassword = document.forms["myform"]["pwd1"].value;
  if (fpassword < 6) {
    console.log("error");
  } else {
    console.log(fpassword);
  }

  const user = {
    firstname: ffirstname,
    lastname: flastname,
    email: femail,
    pwd: fpassword,
  };
  console.log(user);
  return returnval;
}
