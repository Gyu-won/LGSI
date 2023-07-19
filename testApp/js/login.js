function showPopup() {
    document.getElementById("popup").style.display = "block";
}
function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function login() {
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;

    var p_data = document.getElementById("pMessage").innerText;
    showPopup(p_data);

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
            document.getElementById("pMessage").innerText = "Completed!";
            // localStorage.setItem('user', JSON.stringify(userData));
            return response.json();
        } else {
            document.getElementById("pMessage").innerText = "Failed";
        }
    })
    .then(data => {
        localStorage.setItem('email', data.accessToken);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        window.location.href = "../template/index2.html"; 
    })
    .catch(error => {
        console.error('Error:', error);
    });
}