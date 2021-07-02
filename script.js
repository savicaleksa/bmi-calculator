const hInput = document.getElementById('height');
const wInput = document.getElementById('weight');
const button = document.getElementById('calc');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  if (hInput.value == '' || wInput.value == '') {
    alert('Enter your height and your weight');
  } else {
    let height = hInput.value;
    let weight = wInput.value;
    let BMI = (weight / ((height * height) / 10000)).toFixed(2);

    if (BMI < 18.5) {
      result.innerText = `Your BMI is ${BMI} and you are underweight`;
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      result.innerText = `Your BMI is ${BMI} and your weight is healthy`;
    } else if (BMI >= 25 && BMI <= 29.9) {
      result.innerText = `Your BMI is ${BMI} and you are overweight`;
    } else {
      result.innerText = `Your BMI is ${BMI} and you are obese`;
    }
  }
});
