"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Numero = function () {
	function Numero(value) {
		_classCallCheck(this, Numero);

		this.value = value;
	}

	_createClass(Numero, [{
		key: "sumarNumero",
		value: function sumarNumero() {
			return this.value + num2.value;
		}
	}, {
		key: "restarNumero",
		value: function restarNumero() {
			return this.value - num2.value;
		}
	}, {
		key: "multiplicarNumero",
		value: function multiplicarNumero() {
			return this.value * num2.value;
		}
	}, {
		key: "dividirNumero",
		value: function dividirNumero() {
			return this.value / num2.value;
		}
	}]);

	return Numero;
}();

exports.default = Numero;


var num1 = new Numero(5);
var num2 = new Numero(4);

console.log(num1.sumarNumero(num2));
console.log(num1.restarNumero(num2));
console.log(num1.multiplicarNumero(num2));
console.log(num1.dividirNumero(num2));