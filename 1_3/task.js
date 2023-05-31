
(() => {
    // забираем все элементы у которых родительский див и есть класс холе
    const inputs = document.querySelectorAll('div > .hole');
    
    // запуск myGame для нажатого элемента
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", myGame);
    }
    function myGame() {
        const dead = document.getElementById("dead");
        const lost = document.getElementById("lost");
        if (dead.textContent <= 8 & lost.textContent <= 3) {
            if (this.className == "hole hole_has-mole") {
                dead.textContent++;
            } else {
                lost.textContent++;
            }
        }
        if (dead.textContent >= 8) {
            alert('Выиграли!!!!');
            dead.textContent = 0;
            lost.textContent = 0;
            
        }
        if (lost.textContent >= 3){
            alert('Проиграли.....');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
    })();