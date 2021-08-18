
class CountdownTimer {
    constructor () {
        this.refs = {
         days: document.querySelector("span[data-value='days']"),
    hours: document.querySelector("span[data-value='hours']"),
    minutes: document.querySelector("span[data-value='mins']"),
    seconds: document.querySelector("span[data-value='secs']"),
        }
        this.targetDate = new Date('Aug 20, 2021');
        this.countdown = null;
    }
    calc = () => {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        if (this.targetDate === currentDate || this.targetDate < currentDate) {
            clearInterval(this.countdown);
        }
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.minutes.textContent = mins;
    this.refs.seconds.textContent = secs;
    }
    timerStart = () => {
        this.countdown = setInterval(this.calc, 1000);
    }
}
const timer = new CountdownTimer();
window.addEventListener("DOMContentLoaded", timer.timerStart)
//получить доступ в таймеру:
//startDate = time,каждую секунду она должна изменяться;
//нужна ф-ция для расчета и вставки разницы targetDate и текущей датой:
// функция с setIntreval;

