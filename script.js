const form = document.querySelector('form');

form.addEventListener('submit', function(e){
let feet = document.querySelector('#feet');
let inches = document.querySelector('#inches');
const results = document.querySelector('#results');
    e.preventDefault();

    feet = parseInt(feet.value);
    inches = parseInt(inches.value);

    if (isNaN(feet) || isNaN(inches)){
        results.textContent = "Please enter a valid number!";
    } else if (feet < 0 ) {
        results.textContent = "Please enter a feet value > 0";
    } else if (inches < 0 || inches >= 12) {
        results.textContent = "Please enter an inch value between 0 and 12";
    } else {
        let totalInches = (feet*30.48) + (inches*2.54);
        results.textContent = `${totalInches} cm`;
        
    }
})