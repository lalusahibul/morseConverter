//kode untuk teks ke morse
const morseCodeMap = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..',
    'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
    'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
    'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
    'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',
    ' ': '/'
};

const inputText = document.getElementById('inputText');
const morseOutput = document.getElementById('morseOutput');

inputText.addEventListener('input', () => {
    const text = inputText.value.toLowerCase();
    const morse = text.split('').map(char => morseCodeMap[char] || '').join(' ');
    morseOutput.textContent = morse;
});

//kode untuk morse ke teks
const teksMap = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd',
    '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h',
    '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
    '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p',
    '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
    '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
    '-.--': 'y', '--..': 'z',
    '-----': '0', '.----': '1', '..---': '2', '...--': '3',
    '....-': '4', '.....': '5', '-....': '6', '--...': '7',
    '---..': '8', '----.': '9',
    '/': ' '
};

const inputMorse = document.getElementById('inputMorse');
const teksOutput = document.getElementById('teksOutput');

inputMorse.addEventListener('input', () => {
    const morse = inputMorse.value;
    const teks = morse.split(' ').map(char => teksMap[char] || '').join('');
    teksOutput.textContent = teks;
});

//fungsi untuk ubah mode translate
function switchMode() {
    const toMorse = document.getElementById("convert-to-morse");
    const toText = document.getElementById("morse-to-text");

    if (toMorse.style.display === "none") {
        toMorse.style.display = "block";
        toText.style.display = "none";
    } else {
        toMorse.style.display = "none";
        toText.style.display = "block";
    }
}

document.getElementById("convert-to-morse").style.display = "block";
document.getElementById("morse-to-text").style.display = "none";