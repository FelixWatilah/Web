/**
 * Created by Watilah on 24-Jun-16.
 */
function prepareEventHandlers() {
    
    //handle the form submit event
    document.getElementById("frmContact").onsubmit=function () {
        //prevent a form from submitting if no email...
        if(document.getElementById("fname").value=="" || document.getElementById("formEmail").value=="" || document.getElementById("formTel").value=="" || 
        document.getElementById("textArea").value==""){
            document.getElementById("errorMessage").innerHTML="Please fill all the fields before submitting the form.";
            document.getElementById("errorMessage").style.color="red";
            //to stop the form from submitting
            return false;
        }else {
            //reset and allow the form to submit
            document.getElementById("errorMessage").innerHTML="Submitted Successfully";
            document.getElementById("errorMessage").style.color="green";
            return true;
        }
    };

    //show and hide sections of a form
    document.getElementById("service").onclick=function () {
        if(document.getElementById("service").checked){
            //use CSS to show the services
            document.getElementById("serviceDisplay").style.display="block";
        }else {
            //use CSS to hide the services
            document.getElementById("serviceDisplay").style.display="none";
        }
    };
    //hide the services when the page loads
    document.getElementById("serviceDisplay").style.display="none";
}

//when the document loads
window.onload=function () {
    prepareEventHandlers();
};
