var operandoa;
var operandob;
var operacion;

const numeros = document.querySelector('#numeros');
const action = document.querySelector('#action');
const suma = document.getElementById('suma');
const resta = document.getElementById('resta');
const multiplica = document.getElementById('multiplicar');
const divide = document.getElementById('dividir');
const calcular = document.getElementById('calcular');
const resetear = document.getElementById('resetear');

numeros.addEventListener('click', valor1 =>{
	resultado.textContent = resultado.textContent + valor1.target.innerHTML;
})

		suma.addEventListener('click', e =>{
			operandoa = resultado.textContent;
			operacion = "+";
			limpiar();
		})
		resta.addEventListener('click', e =>{
			operandoa = resultado.textContent;
			operacion = "-";
			limpiar();
		})
		multiplica.addEventListener('click', e =>{
			operandoa = resultado.textContent;
			operacion = "*";
			limpiar();
		})
		divide.addEventListener('click', e =>{
			operandoa = resultado.textContent;
			operacion = "/";
			limpiar();
		})
		calcular.addEventListener('click', e =>{
		operandob = resultado.textContent;
		resolver();
		})

		resetear.addEventListener('click', e =>{
			operandoa = "";
			operandob = "";
			resultado.textContent ="";
		})

function limpiar(){
	resultado.textContent = "";
}

function resolver(){
	var res = 0;
	switch (operacion){
		case "+":
		res = parseFloat(operandoa) + parseFloat(operandob);
		break;
		case "-":
		res = parseFloat(operandoa) - parseFloat(operandob);
		break;
		case "*":
		res = parseFloat(operandoa) * parseFloat(operandob);
		break;
		case "/":
		res = parseFloat(operandoa) / parseFloat(operandob);
		break;
	}
	limpiar();
	resultado.textContent = res;
}





