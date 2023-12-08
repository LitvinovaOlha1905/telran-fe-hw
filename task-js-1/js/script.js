let rate = 42000

function exchange() {
    //console.log("Hello World!!!")
    //alert("Ok")
    let currentValue = document.querySelector(".input-1").value;
    let result = (currentValue / rate).toFixed(2)

    document.querySelector(".result-1").innerHTML = currentValue + " $ = " + result + " BTC"; // 10000 $ = 0.25 BTC

    console.log(result)
}

// вносить значение
// присвоить к переменным
// математика
// результат

function add() {
    let currentValue1 = +document.querySelector(".input-3").value;
    let currentValue2 = +document.querySelector(".input-4").value;
    let result = currentValue1 + currentValue2;

    console.log(result)
}