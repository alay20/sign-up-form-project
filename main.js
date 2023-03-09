var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var pwError = document.querySelector(".error");
var submitBtn = document.querySelector(".submit-btn")

password1.addEventListener('input', pwCheck);
password2.addEventListener('input', pwCheck);

function pwCheck() {
    submitBtn.disabled = false;
    if (password1.value === password2.value) {
        password1.style.borderColor = "green";
        password2.style.borderColor = "green";
        pwError.textContent = "";
    } else {
        console.log("pw do not match");
        password1.style.borderColor = "red";
        password2.style.borderColor = "red";
        pwError.textContent = "*Passwords do not match";
        submitBtn.disabled = true;
    }
}



