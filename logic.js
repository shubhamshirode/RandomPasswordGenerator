const UpperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerSet = "abcdefghijklmnopqrstuvwxyz";
const NumberSet = "0123456789";
const SymbolSet = "!@#$%^&*()-_=+\|[]{};:/?.>";

let PasswordBox = document.getElementById('PasswordBox');
let PassLength = document.getElementById("Length");
let upperInput = document.getElementById("UpperCase");
let lowerInput = document.getElementById("LowerCase");
let numberInput = document.getElementById("Numbers");
let symbolInput = document.getElementById("Symbols");
let copyBtn = document.getElementById("copyBtn");


// Function to get a random character from a given dataset
let getRandomPassword = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

let generatePassword = (newPass = "") => {
    if (upperInput.checked) {
        newPass += getRandomPassword(UpperSet);
    }
    if (lowerInput.checked) {
        newPass += getRandomPassword(LowerSet);
    }
    if (numberInput.checked) {
        newPass += getRandomPassword(NumberSet);
    }
    if (symbolInput.checked) {
        newPass += getRandomPassword(SymbolSet);
    }
    if (newPass.length < PassLength.value) {
        return generatePassword(newPass);
    }
    console.log(truncateString(newPass, PassLength.value));
    PasswordBox.value = truncateString(newPass, PassLength.value);
}

// generatePassword();
document.getElementById("btn").addEventListener("click", function () { generatePassword(); }
)
function truncateString(str, num) {
    if (str.length > num) {
        let number = str.substring(0, num);
        return number;
    }
    else {
        return str;
    }
}

copyBtn.addEventListener("click", () => {
    if (PasswordBox.value !== "" && PasswordBox.value !== "Select at least one option") {
        PasswordBox.select();
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    } else {
        alert("No password to copy. Generate one first.");
    }
});




// let generatePassword = () => {
//     let newPass = "";
//     let selectedSets = [];

//     // Add each set based on the user selection
//     if (upperInput.checked) selectedSets.push(UpperSet);
//     if (lowerInput.checked) selectedSets.push(LowerSet);
//     if (numberInput.checked) selectedSets.push(NumberSet);
//     if (symbolInput.checked) selectedSets.push(SymbolSet);

//     // Ensure that at least one set is selected
//     if (selectedSets.length === 0) {
//         PasswordBox.innerText = "Please select at least one character type.";
//         return;
//     }

//     // Generate password by selecting random characters from the selected sets
//     for (let i = 0; i < PassLength.value; i++) {
//         let randomSet = selectedSets[Math.floor(Math.random() * selectedSets.length)];
//         newPass += getRandomPassword(randomSet);
//     }

//     // Display the generated password
//     PasswordBox.innerText = newPass;
// }

// // Event listener to generate password on button click
// document.getElementById("btn").addEventListener("click", generatePassword);

