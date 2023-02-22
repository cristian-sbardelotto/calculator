const buttons = document.querySelectorAll('button');
const equalsButton = document.querySelector('.equals');
const calculations = document.querySelector('main .display .calculation');
let solution = document.querySelector('main .display .solution');


buttons.forEach(button => {
  let calculationString = '';

  // function clear() {
  //   calculations.innerHTML = '';
  // }

  function equals() {
    let result = eval(calculations.textContent);
    solution.innerHTML = eval(result);

  }


  button.addEventListener('click', () => {
    calculationString = button.textContent;
    calculations.innerText += calculationString;
  });

  equalsButton.addEventListener('click', () =>   equals());
});
