function Converted() {
	let scale = document.getElementById('scalenumber').value;
	let measure = document.getElementById('measure-number').value;
	let result = document.getElementById('result-number');
	let unit = document.getElementById('selector').value;
	let digitos = document.getElementById('redondeo').value;
	let calcResult = '';
	if(unit === 'm'){
		calcResult = ((100/scale) * measure).toFixed(digitos);
	} else if (unit === 'cm'){
		calcResult = ((100/scale) * (measure/100)).toFixed(digitos);
	}
	result.value = calcResult;
}

function Reset() {
	document.getElementById('my-form').reset();
}

// calc.addEventListener('click', Converted)

//1 en 100
//1m --- 1cm

//1 en 50
//1m --- 2cm
