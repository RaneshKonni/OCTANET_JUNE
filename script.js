 function validateForm() {
            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            if (username.trim() === "") {
                alert("Username is required.");
                return false;
            }

if (email.trim() === "") {
    alert("Email is required.");
    return false;
}

if (password.trim() === "") {
    alert("Password is required.");
    return false;
}

return true;
}

function showMessage() {
alert("Registration successful!");
window.location.reload();
}