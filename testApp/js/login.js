function showPopup(message) {
    var popupMessage = popup.querySelector("p");
    popupMessage.textContent = message;
    popup.style.display = "block";
    // document.getElementById("popup").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";

    window.location.href = "../template/index2.html";
}

function login() {
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;


    var userData = {
        email: email,
        password: password
    };

    fetch("http://172.20.10.2:8080/api/members/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.status === 200) {
            var p_data = document.getElementById("pMessage").innerText;
            p_data = "Completed!";
            showPopup(p_data);
            // document.getElementById("pMessage").innerText = "Completed!";

            // setTimeout(function () {
            //   }, 5000);
            // return response.json();
        } else {
            var p_data = document.getElementById("pMessage").innerText;
            p_data = "Failed";
            showPopup(p_data);
            // document.getElementById("pMessage").innerText = "Failed";
        }
    })
    .then(data => {
        localStorage.setItem('email', data.email);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        // window.location.href = "../template/index2.html"; 
    })
    .catch(error => {
        console.error('Error:', error);
    });

}