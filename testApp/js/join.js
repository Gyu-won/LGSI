function showPopup(message, type) {
    var popup = type === "join" ? document.getElementById("popupJoin") :  document.getElementById("popupDup");
    var popupMessage = popup.querySelector("p");
    popupMessage.textContent = message;
    popup.style.display = "block";
    // document.getElementById("popup").style.display = "block";
}

function hidePopupDup() {
    document.getElementById("popupDup").style.display = "none";
}

function hidePopupJoin() {
    document.getElementById("popupJoin").style.display = "none";

    // setTimeout(function () {
    //     window.location.href = "login.html";
    //   }, 3000);
    window.location.href = "login.html";
}

function validatePassword() {
    var password1 = document.getElementById("passwordInput1").value;
    var validationMessage = document.getElementById("passwordValidationMessage");
    
    var numberCount = password1.replace(/[^0-9]/g, "").length;
    var specialCharCount = password1.replace(/[^!@#$%^&*()]/g, "").length;
    
    if (password1.length < 8) {
        validationMessage.textContent = "Password must be at least 8 characters long.";
    } else if (numberCount < 4) {
        validationMessage.textContent = "Password must contain at least 4 numbers.";
    } else if (specialCharCount < 1) {
        validationMessage.textContent = "Password must contain at least 1 special character.";
    } else {
        validationMessage.textContent = "";
    }
}

function DoubleCheckPassword() {
    var password1 = document.getElementById("passwordInput1").value;
    var password2 = document.getElementById("passwordInput2").value;

    var DoubleCheckMessage = document.getElementById("passwordDoubleCheckMessage");
    if(password1 != password2){
        DoubleCheckMessage.textContent = "Password is not correct";
        DoubleCheckMessage.style.color = "rgba(255,0,0,0.54)";
    }
    else{
        DoubleCheckMessage.textContent = "Password is correct";
        DoubleCheckMessage.style.color = "rgba(0,135,0,0.54)";
    }
}

function showDropdown() {
    var dropdownContainer = document.getElementById("dropdownContainer");

    if (dropdownContainer.style.display === "block") {
        dropdownContainer.style.display = "none";
    } else {
        var selectElement = document.createElement("select");
        selectElement.classList.add("dropdown-select");

        var locations = ["Bengaluru", "Delhi", "Mumbai", "Chennai", "Hyderabad", "Kolkata", "Pune", "Ahmedabad"];

        for (var i = 0; i < locations.length; i++) {
            var optionElement = document.createElement("option");
            optionElement.text = locations[i];
            selectElement.add(optionElement);
        }

        var dropdownContainer = document.getElementById("dropdownContainer");

        while (dropdownContainer.firstChild) {
            dropdownContainer.removeChild(dropdownContainer.firstChild);
        }

        dropdownContainer.appendChild(selectElement);

        dropdownContainer.style.display = "block";
    }
}

function dupCheck() {
    var email = document.getElementsByName("email")[0].value;

    var dup_data = document.getElementById("dupMessage").innerText;
    showPopup(dup_data, "dup");

    var userData = {
        email: email
    };

    fetch("http://172.20.10.2:8080/api/members/duplicate", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.status === 200) {
            document.getElementById("dupMessage").innerText = "Available!";
            document.getElementsByClassName("bottom-join").disabled = false;
        }
        else if (response.status === 400) {
            document.getElementById("dupMessage").innerText = "Incapable";
            // document.getElementsByClassName("bottom-join").disabled = true;
            return;
        }
    })
}


function join() {
    var memberName = document.getElementsByName("memberName")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password1")[0].value;
    var dropdown = document.getElementById("dropdownContainer");
    var cityName = dropdown.querySelector("select").value;

    if (memberName === "" || email === "" || password === "" || cityName === "") {
        return;
    }

    // var p_data = document.getElementById("pMessage").innerText;
    // showPopup(p_data);

    var userData = {
        memberName: memberName,
        email: email,
        password: password,
        cityName: cityName
    };

    fetch("http://172.20.10.2:8080/api/members/signup", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.status === 200) {
            var p_data = document.getElementById("pMessage").innerText;
            // document.getElementById("pMessage").innerText = "Completed!";
            p_data = "Completed!";
            showPopup(p_data, "join");

        }
        else {
            if(response.status === 400) {
                var p_data = document.getElementById("pMessage").innerText;
                // document.getElementById("pMessage").innerText = "Failed";
                p_data = "Failed";
                showPopup(p_data, "join");
            }
        }
    })

    .catch(error => {
        console.error('Error:', error);
        showFailurePopup("Failed!");
    });

    document.getElementsByClassName("bottom-join").disabled = true;    
}
