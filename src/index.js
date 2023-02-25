// DOM Elements
const buttons = document.querySelectorAll('button.button'); // Buttons that will appear in the display, (it excludes Backspace, Equals, and Clear button)
const calculation = document.querySelector('main .display .calculation span');
const solution = document.querySelector('main .display .solution input');

// For each clicked button

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const insert = () => {
      if (calculation.innerText.length >= 26) {
        alert('You have exceeded the maximum numbers in the calculation!');
        return;
      }

      calculation.innerHTML += button.value;
    };

    const equals = async () => (solution.value = eval(calculation.textContent));

    const clear = () => {
      calculation.innerHTML = '';
      solution.value = '0';
    };

    const remove = () => {
      calculation.innerHTML = calculation.innerText.substring(
        0,
        calculation.innerText.length - 1
      );
    };

    if (
      button.classList.contains('number') ||
      button.classList.contains('symbol')
    ) {
      insert();
    } else if (button.classList.contains('equals')) {
      equals();
    } else if (button.value == 'c') {
      clear();
    } else if (button.value == '<-') {
      remove();
    }
  });
});
