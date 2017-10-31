export default class Numero{
	constructor(value){
		this.value = value;
	}

	sumarNumero(){
		return this.value + num2.value;
	}

	restarNumero(){
		return this.value - num2.value;
	}

	multiplicarNumero(){
		return this.value * num2.value;
	}

	dividirNumero(){
		return this.value / num2.value;
	}
}

var num1 = new Numero(5);
var num2 = new Numero(4); 

console.log(num1.sumarNumero(num2));
console.log(num1.restarNumero(num2));
console.log(num1.multiplicarNumero(num2));
console.log(num1.dividirNumero(num2));