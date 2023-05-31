// Получаем состояние печеньки
const image=document.getElementById("cookie");
// Получаем количество нажаний на нее
const clickCounter=document.getElementById("clicker__counter");
// Выводим в консоль количество текущее кликов 
const clickSpeed=document.getElementById("clicker__speed");
cookie.onclick = () => {
    let clicks = clickCounter.textContent++

    if (clicks % 2 === 0) {
        cookie.width += 40;
        date_1 = Date.now()
    } else {
        cookie.width -= 35;
        date_2 = Date.now()
    }
    console.log(date_2 - date_1);
    let speed = (Math.abs(1/(date_2 - date_1)))*1000;
    clickSpeed.textContent = speed.toFixed(2)
}