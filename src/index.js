// DOM Elements
const displayButtons = document.querySelectorAll('button.display-button'); // Buttons that will appear in the display, (it excludes Backspace, Equals, and Clear button)
const calculation = document.querySelector('main .display .calculation');
const solution = document.querySelector('main .display .solution');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

// For each clicked button
displayButtons.forEach(displayButton => {
  let calculationString = '';

  const addDigit = () => {
    calculationString = displayButton.textContent;
    calculation.innerText += calculationString;
  };

  const equals = () => (solution.innerHTML = eval(calculation.textContent));

  const clear = () => {
    calculation.innerHTML = '';
    solution.innerHTML = '0';
  };

  displayButton.addEventListener('click', () => addDigit());
  equalsButton.addEventListener('click', () => equals());
  clearButton.addEventListener('click', () => clear());
});
