// ========================= Задача 1 =========================

// Создать функцию checkEquality с помощью которого проверяем равны ли все 3 значение внутри input-ов или нет.
// Например если 3, 3, 3 то в результате должны получать "Все поле равны" если нет то пишем "Все поле не равны"

function checkEquality() {
	let currentValue1 = +document.querySelector(".input-1").value
	let currentValue2 = +document.querySelector(".input-2").value
	let currentValue3 = +document.querySelector(".input-3").value

	if (currentValue1 === currentValue2 && currentValue2 === currentValue3) {
		console.log("Все поля равны")
	} else {
		console.log("Все поля не равны")
	}
}

// 2. Создать функцию hasZero с помощью которого проверяем есть ли поле которое равно 0 если есть пишем "Да, есть", если нет пишем просто "Нет"

// Например если будет 1, 2, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"

// function hasZero() {
// 	let currentValue1 = +document.querySelector(".input-1").value
// 	let currentValue2 = +document.querySelector(".input-2").value
// 	let currentValue3 = +document.querySelector(".input-3").value

// 	if (currentValue1 === 0 || currentValue2 === 0 || currentValue3 === 0) {
// 		console.log("В одном из полей есть 0")
// 	} else {
// 		console.log("Ни в одном из полей нет 0")
// 	}
// }

function hasZero() {
	let currentValue1 = +document.querySelector(".input-1").value
	let currentValue2 = +document.querySelector(".input-2").value
	let currentValue3 = +document.querySelector(".input-3").value

	if (currentValue1 === 0) {
		console.log(`В поле "Number 1" есть 0`)
	} else if (currentValue2 === 0) {
		console.log(`В поле "Number 2" есть 0`)
	} else if (currentValue3 === 0) {
		console.log(`В поле "Number 3" есть 0`)
	} else {
		console.log("Ни в одном из полей нет 0")
	}
}

// ========================= Задача 3 =========================

// 3. Создать функцию sameOne с помощью которого проверяем есть ли поле которое совпадают, если есть пишем "Да, есть", если нет пишем просто "Нет"

// Например если будет 1, 1, 0 то результат будет "Да, есть", а если будет 1, 2, 3 то результат "Нет"

// function sameOne() {
// 	let currentValue1 = +document.querySelector(".input-1").value
// 	let currentValue2 = +document.querySelector(".input-2").value
// 	let currentValue3 = +document.querySelector(".input-3").value

// 	if (
// 		currentValue1 === currentValue2 ||
// 		currentValue2 === currentValue3 ||
// 		currentValue1 === currentValue3
// 	) {
// 		console.log("Есть поля, которое совпадают")
// 	} else {
// 		console.log("Ни одно поле не совпадает")
// 	}
// }

function sameOne() {
	let currentValue1 = +document.querySelector(".input-1").value
	let currentValue2 = +document.querySelector(".input-2").value
	let currentValue3 = +document.querySelector(".input-3").value

	if (currentValue1 === currentValue2) {
		console.log(`Поля "Number 1" и "Number 2" совпадают`)
	} else if (currentValue2 === currentValue3) {
		console.log(`Поля "Number 2" и "Number 3" совпадают`)
	} else if (currentValue1 === currentValue3) {
		console.log(`Поля "Number 1" и "Number 3" совпадают`)
	} else {
		console.log("Ни одно поле не совпадает")
	}
}
