/**
 * 1. 박스 2개 만들기
 * 2. drop down list 만들기
 * 3. 환율 정보 들고오기
 * 4. drop down list 아이템 선택 및 변경 기능
 * 5. 금액 입력하면 환전해주는 기능
 * 6. 드랍 다운 리스트에서 아이템 선택하면 다시 그 단위로 환전되는 기능
 * 7. 숫자를 원화로 보여주는 기능
 * 8. 반대로 아래 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용되도록
 */

let currencyRatio = {
	USD: {
		KRW: 1211.67,
		USD: 1,
		VND: 22862.50,
		unit: "달러"
	},
	KRW: {
		KRW: 1,
		USD: 0.00083,
		VND: 18.87,
		unit: "원"
	},
	VND: {
		KRW: 0.053,
		USD: 0.000044,
		VND: 1,
		unit: "동"
	}
};

// 1. console.log(currencyRatio.USD.unit);
// 2. console.log(currencyRatio['VND']['unit']);
let fromCurrency = "USD";
let toCurrency = "USD";
let current_unit = "달러";

document
	.querySelectorAll("#from_currency_list a")
	.forEach((menu) => menu.addEventListener("click", function() {
		//	1. 버튼을 가져온다.
		// 	2. 버튼에 값을 바꾼다.
		document.getElementById("from_btn").textContent = this.textContent;
		//	3. 선택된 currency값을 변수에 저장해준다
		fromCurrency = this.textContent;
		current_unit = currencyRatio[fromCurrency]["unit"];
		document.getElementById("from_unit").textContent = current_unit
		convert();
	}));

document
	.querySelectorAll("#to_currency_list a")
	.forEach((menu) => menu.addEventListener("click", function() {
		//	1. 버튼을 가져온다.
		// 	2. 버튼에 값을 바꾼다.
		document.getElementById("to_btn").textContent = this.textContent;
		//	3. 선택된 currency값을 변수에 저장해준다
		toCurrency = this.textContent;
		current_unit = currencyRatio[toCurrency]["unit"];
		document.getElementById("to_unit").textContent = current_unit
		convert();
	}));
	
// 1. 금액을 입력하는 순간
// 2. 환전이 되서
// 3. 환전된 금액이 보인다.	
function convert() {
	let amount = document.getElementById("from_input").value;
	let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
	document.getElementById("to_input").value = convertedAmount;
}

function re_convert() {
	let amount = document.getElementById("to_input").value;
	let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
	document.getElementById("from_input").value = convertedAmount;
}
// 드랍다운 리스트의 값이 변경될때 환전을 다시 해준다.
