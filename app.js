// https://www.omnicalculator.com/health/mme

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const morphineequivalentsRadio = document.getElementById('morphineequivalentsRadio');
const doseRadio = document.getElementById('doseRadio');

let morphineequivalents;
let dose = v; 

// labels of the inpust
const variable = document.getElementById('variable');

morphineequivalentsRadio.addEventListener('click', function() {
  variable.textContent = 'Dose';
  dose = v;
  result.textContent = '';
});

doseRadio.addEventListener('click', function() {
  variable.textContent = 'Morphine equivalents';
  morphineequivalents = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(morphineequivalentsRadio.checked)
    result.textContent = `Morphine equivalents = ${computemorphineequivalents().toFixed(5)}`;

  else if(doseRadio.checked)
    result.textContent = `Dose = ${computedose().toFixed(5)}`;
})

// calculation

function computemorphineequivalents() {
  return Number(dose.value) * 0.15;
}

function computedose() {
  return Number(morphineequivalents.value) / 0.15;
}