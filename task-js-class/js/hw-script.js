/* Создать Rectangle класс как на примере Circle, наследуют от класса Shape и расширяют его функциональность для отображения конкретных фигур

также добавить метод setStyle для родительского класса, принимает объект и применяет все стили которые есть в этом объекте 

let circle = new Circle();
circle.setStyle({
    background: "orange",
    borderRadius: "50px"
});
*/

class Shape {
	constructor(className) {
		this.element = document.createElement("div")
		this.element.classList.add("shape", className)
	}

	render() {
		document.querySelector(".container").append(this.element)
	}

	setStyle(styleObject) {
		Object.assign(this.element.style, styleObject)
	}
}

class Rectangle extends Shape {
	constructor(className, width, height) {
		super(className)
		this.width = width
		this.height = height
		this.element.style.width = `${width}px`
		this.element.style.height = `${height}px`
	}
}

let rectangle = new Rectangle("rectangle", 100, 50)
rectangle.setStyle({
	background: "red",
	borderRadius: "50px",
	border: "1px solid black",
})
rectangle.render()
