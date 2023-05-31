// получаем инфу об объектам отдельно

const num_hours=document.getElementById('hours');
const num_min=document.getElementById('minutes');
const num_sec=document.getElementById('seconds');

let hours = Number(num_hours.textContent)
let min = Number(num_min.textContent)
let sec = Number(num_sec.textContent)

let timerId = setInterval(() => {
    // если не равно 0 вычитаем секунду
    if (sec > 0) {
        --sec
        num_sec.textContent = `${String(sec).padStart(2, '0')}`
        num_min.textContent = `${String(min).padStart(2, '0')}`
        num_hours.textContent = `${String(hours).padStart(2, '0')}` 
         
    }

    if (sec === 0 && min > 0) {
        --min
        sec = 60
        num_sec.textContent = `${String(sec).padStart(2, '0')}`
        num_min.textContent = `${String(min).padStart(2, '0')}`
        num_hours.textContent = `${String(hours).padStart(2, '0')}` 
    }

    if (sec === 0 && min === 0 && hours > 0) {
        --hours
        min = 60
        num_sec.textContent = `${String(sec).padStart(2, '0')}`
        num_min.textContent = `${String(min).padStart(2, '0')}`
        num_hours.textContent = `${String(hours).padStart(2, '0')}`
    } 
    if (hours === 0 && min === 0 && sec === 0) {
        // иначе выводим алерт в браузер
        num_sec.textContent = `${String(sec).padStart(2, '0')}`
        num_min.textContent = `${String(min).padStart(2, '0')}`
        num_hours.textContent = `${String(hours).padStart(2, '0')}`
        
        alert('Вы победили!')
        // оставляем значение секунд на 60
        
        // и отменяем повторение функции
        clearInterval(timerId)
    
    }
    // --currentTime
    // console.log(num_sec.textContent)
    // console.log(num_min.textContent)
    // console.log(num_hours.textContent)
    // console.log(currentTime)
}, 1000)
// let timer = moment(60*1000).format('hh:mm:ss');
// console.log(timer)