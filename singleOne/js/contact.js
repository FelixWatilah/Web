/**
 * Created by Watilah on 12-Jun-16.
 */
function prepareServices() {

    document.getElementById("frmContact").onsubmit=function () {
        if(document.getElementById("name").value!=""){
            if(document.getElementById("email").value!=""){
                if(document.getElementById("tel").value!=""){
                    if(document.getElementById("address").value!=""){
                        if(document.getElementById("town"). value!=""){
                            if(document.getElementById("comments").value!=""){
                                alert("Details submitted successfully.")
                                return true;
                            }else {
                                alert("Please enter the message.");
                                return false;
                            }
                            return true;
                        }else {
                            alert("Please enter your town.");
                            return false;
                        }
                        return true;
                    }else {
                        alert("Please enter your address.");
                        return false;
                    }
                    return true;
                }else{
                    alert("Please enter you telephone number.");
                    return false;
                }
                return true;
            }else{
                alert("Please enter your email.");
                return false;
            }
            return true;
        }else {
            alert("Please enter your name.");
            return false;
        }
    };

    //show and hide sections of a form
    document.getElementById("yes").onclick=function () {
        if(document.getElementById("yes").checked){
            //use CSS to show the services
            document.getElementById("servicesDisplay").style.display="block";
        } else {
            //use CSS to hide the services
            document.getElementById("servicesDisplay").style.display="none";
        }
    };
//hide the services when the page loads
    document.getElementById("servicesDisplay").style.display="none";
}

window.onload=function () {
    prepareServices();
};


