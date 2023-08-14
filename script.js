const passwordbox = document.getElementById('password');
const length = 20;
const button = document.getElementById('generatenow');
const copy = document.getElementById("copybtn");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const system = "!@#$%^&*()_+-=+|}{][";
const alChat  = uppercase + lowercase + numbers +system;
function createpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += system[Math.floor(Math.random() * system.length)];

    while (length > password.length) {
    password += alChat[Math.floor(Math.random() * alChat.length)];

    }

    passwordbox.value = password;
}

function copypassword(){
    passwordbox.select();
    document.execCommand("copy")
}

button.addEventListener("click", createpassword);
copy.addEventListener("click", copypassword);