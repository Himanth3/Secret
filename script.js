// Generate character set
const char = " " + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" + "0123456789" + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charArray = Array.from(char);
let keyArray = [...charArray];

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
}
shuffle(keyArray);

// Encrypt function
function encrypt(text) {
    return text.split("").map(letter => keyArray[charArray.indexOf(letter)] || letter).join("");
}

// Decrypt function
function decrypt(text) {
    return text.split("").map(letter => charArray[keyArray.indexOf(letter)] || letter).join("");
}

// UI Functions
function encryptText() {
    const inputText = document.getElementById("inputText").value;
    document.getElementById("outputText").value = encrypt(inputText);
}

function decryptText() {
    const inputText = document.getElementById("inputText").value;
    document.getElementById("outputText").value = decrypt(inputText);
}
