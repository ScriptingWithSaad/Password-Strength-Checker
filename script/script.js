const pass = document.getElementById("passwordInput");
const msg = document.getElementById("message");
const str = document.getElementById("strength");
let form = document.querySelector("form");

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    const hasLower = /[a-z]/.test(pass.value);
    const hasUpper = /[A-Z]/.test(pass.value);
    const hasNumber = /\d/.test(pass.value);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(pass.value);

    let strength = 0;
    if (hasLower) strength++;
    if (hasUpper) strength++;
    if (hasNumber) strength++;
    if (hasSymbol) strength++;
    if (pass.value.length >= 8) strength++;

    if (strength <= 2) {
        str.innerHTML = 'Weak';
        form.style.border = '#ff5925 solid 3px';
        msg.style.color = '#ff5925';
    } else if (strength === 3 || strength === 4) {
        str.innerHTML = 'Medium';
        form.style.border = 'yellow solid 3px';
        msg.style.color = 'yellow';
    } else if (strength === 5) {
        str.innerHTML = 'Strong';
        form.style.border = '#26df30 solid 3px';
        msg.style.color = '#26df30';
    }
});
