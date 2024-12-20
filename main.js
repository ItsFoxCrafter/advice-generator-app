let adviceId = document.getElementById('adviceId');
let advice = document.getElementById('advice');

generateAdvice()

function generateAdvice() {
    const API_URL = 'https://api.adviceslip.com/advice';

    fetch(API_URL)
    .then(response => response.json())
    .then(data => displayAdvice(data))
}

function displayAdvice(x) {
    console.log(x);
    advice.textContent = '"' + x.slip.advice +'"' ; 
    adviceId.textContent = 'ADVICE #' + x.slip.id;
}