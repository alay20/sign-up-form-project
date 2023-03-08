var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var pwError = document.querySelector(".error");

password1.addEventListener('input', pwCheck);
password2.addEventListener('input', pwCheck);

function pwCheck() {
    if (password1.value === password2.value) {
        password1.style.borderColor = "green";
        password2.style.borderColor = "green";
        pwError.textContent = "";
    } else {
        console.log("pw do not match");
        password1.style.borderColor = "red";
        password2.style.borderColor = "red";
        pwError.textContent = "*Passwords to not match";
    }
}



