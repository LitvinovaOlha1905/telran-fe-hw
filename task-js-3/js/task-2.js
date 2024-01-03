// ========================= Задача 2 =========================
/* Задача состоит в создании формы выбора курсов для студента, где студент может выбрать различные модули: Frontend, Backend и Design, а затем выбрать конкретные курсы из каждого модуля. Каждый курс имеет свою стоимость. Студент также должен указать количество приобретаемых курсов.

После выбора курсов и указания количества, при нажатии кнопки должна отобразиться общая стоимость выбранных курсов.
Если общая стоимость превышает $3000, студенту предоставляется 30% скидка, и должна отобразиться окончательная сумма со скидкой.

Например, если студент выбрал курсы JavaScript, PHP и Photoshop, каждый со своей стоимостью, и указал количество 12,
то должна быть рассчитана общая стоимость (сумма стоимостей каждого выбранного курса, умноженная на количество) и отображена на экране.
Если общая стоимость превышает $3000, то должна быть применена скидка в размере 30%, и должна быть показана окончательная сумма со скидкой.

Например, сообщение на экране может быть: "Уважаемый студент, вы должны заплатить $5400". Если общая стоимость превышает $3000,
то сообщение может быть: "Уважаемый студент, вы должны заплатить $5400, но вы получаете 30% скидку, и окончательная сумма составляет $3780".
*/

function calculateTotal() {
	// Получаем выбранные значения и количество для каждого курса
	const frontendCost = document.getElementById("frontend").value
	const frontendQuantity = document.getElementById("frontendQuantity").value

	const backendCost = document.getElementById("backend").value
	const backendQuantity = document.getElementById("backendQuantity").value

	const designCost = document.getElementById("design").value
	const designQuantity = document.getElementById("designQuantity").value

	// Вычисляем общую стоимость
	let totalCost =
		frontendCost * frontendQuantity +
		backendCost * backendQuantity +
		designCost * designQuantity

	// Применяем скидку 30%, если общая стоимость превышает $3000
	if (totalCost > 3000) {
		totalCost *= 0.7 // Применяем скидку 30%
		document.getElementById(
			"totalCost"
		).textContent = `Уважаемый студент, вы должны заплатить $${totalCost.toFixed(
			2
		)}. Вы получаете 30% скидку, и окончательная сумма составляет $${(
			totalCost * 0.7
		).toFixed(2)}`
	} else {
		document.getElementById(
			"totalCost"
		).textContent = `Уважаемый студент, вы должны заплатить $${totalCost.toFixed(
			2
		)}`
	}
}

// const init = () => {
// 	let totalCoast = 0

// 	;[...document.querySelectorAll(".basket__item")].forEach(basketItem => {
// 		totalCoast += basketItem.querySelector
// 	})
// }

// init()

// значения счетчика
// const counters = document.querySelectorAll("[data-counter]")
// if (counters) {
// 	counters.forEach(counter => {
// 		counter.addEventListener("click", e => {
// 			const target = e.target

// 			if (target.closest(".counter__button")) {
// 				let value = parseInt(
// 					target.closest(".counter").querySelector("input").value
// 				)

// 				if (target.classList.contains("counter__button-plus")) {
// 					value++
// 				} else {
// 					--value
// 				}

// 				if (value <= 0) {
// 					value = 0
// 				}

// 				target.closest(".counter").querySelector("input").value = value
// 			}
// 		})
// 	})
// }
