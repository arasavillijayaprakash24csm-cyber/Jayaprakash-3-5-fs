
const validUsername = "anits";
const validPassword = "1234";
function validatelogin() {
    let username = document.getElementById("studentname").value.trim();
    let password = document.getElementById("password").value.trim();
    let error = document.getElementById("error");
    error.innerHTML = "";
    if (username == "") {
        error.innerHTML = "Username is required";
        return false;
    }
    if (password == "") {
        error.innerHTML = "Password is required";
        return false;
    }
    if (password.length < 4) {
        error.innerHTML = "Password must be at least 4 characters";
        return false;
    }
    if (username == validUsername && password == validPassword) {
        alert("Login Successful");
        window.location.href = "dashboard.html";
        return false;
    }
    error.innerHTML = "Invalid Username or Password";
    return false;
}