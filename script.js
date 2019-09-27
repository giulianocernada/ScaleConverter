let scale = document.getElementById('scalenumber');
let scale2 = scale.value;
console.log(scale2);
let result = document.getElementById('result-number');
let measure = document.getElementById('measure-number').value;
let unit = document.getElementById('selector');
let calculate = document.getElementById('calc');

function Converted() {
	document.getElementById('demo').innerHTML = scale2;
}

// calc.addEventListener('click', Converted)