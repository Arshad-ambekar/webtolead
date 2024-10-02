let captchaValue = false;
function handleSubmit(event) {
  // add method what happpen after submission
  if (captchaValue) {
    alert("Success Your are not robot");
    //add additional code logic for custom field like ankit for date feild to take user input and displayed in output
  } else {
    alert("Please Check the captcha before submitting the form");
    event.preventDefault(); //preventing from default event to happen or submitting the form
  }
}

//THIS FUCNTION IS GIVEN BY GOOGLE FOR USING THE GOOGLE CATPCAH IS SALEFORCE
function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

//THIS FUCNTION IS FOR VALIDATING ALL LEAD FEILD AND CAPTCHA ARE FILLED
function CaptchaChecked() {
  //if captcha checkbox is checked then only submitting the form else not
  captchaValue = true;
}
