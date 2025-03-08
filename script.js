// Generate character set
const char = " " + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" + "0123456789" + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charArray = Array.from(char);
let keyArray = [...charArray];

// Shuffle function (Fisher-Yates algorithm)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
}

// Shuffle keyArray only once
shuffle(keyArray);

// Encrypt function
function encrypt(text) {
    return text.split("").map(letter => {
        const index = charArray.indexOf(letter);
        return index !== -1 ? keyArray[index] : letter; // Handle unknown characters
    }).join("");
}

// Decrypt function
function decrypt(text) {
    return text.split("").map(letter => {
        const index = keyArray.indexOf(letter);
        return index !== -1 ? charArray[index] : letter; // Handle unknown characters
    }).join("");
}

// UI Functions
function encryptText() {
    const inputText = document.getElementById("inputText").value;
    if (!inputText) {
        alert("Please enter some text to encrypt.");
        return;
    }
    document.getElementById("outputText").value = encrypt(inputText);
}

function decryptText() {
    const inputText = document.getElementById("inputText").value;
    if (!inputText) {
        alert("Please enter some text to decrypt.");
        return;
    }
    document.getElementById("outputText").value = decrypt(inputText);
}
