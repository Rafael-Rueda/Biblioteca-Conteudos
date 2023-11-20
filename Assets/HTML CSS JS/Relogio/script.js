const atual_date = new Date;

let atual_hours = atual_date.getHours();
let atual_minutes = atual_date.getMinutes();
let atual_seconds = atual_date.getSeconds();
atual_hours += (atual_minutes / 60);

const watch_seconds = document.querySelector('.watch_seconds');
const watch_minutes = document.querySelector('.watch_minutes');
const watch_hours = document.querySelector('.watch_hours');

function setWatch() {
    watch_seconds.style.cssText = `transform: rotate(${(6 * atual_seconds - 90)}deg) translateY(-50%);`

    watch_minutes.style.cssText = `transform: rotate(${6 * atual_minutes - 90}deg) translateY(-50%)`

    watch_hours.style.cssText = `transform: rotate(${30 * atual_hours - 90}deg) translateY(-50%)`

    setInterval(() => {
        atual_seconds += 1;
        atual_minutes += 1/60;
        atual_hours += 1/3600;

        watch_seconds.style.cssText = `transform: rotate(${(6 * atual_seconds) - 90}deg) translateY(-50%);`

        watch_minutes.style.cssText = `transform: rotate(${6 * atual_minutes - 90}deg) translateY(-50%)`

        watch_hours.style.cssText = `transform: rotate(${30 * atual_hours - 90}deg) translateY(-50%)`
    }, 1000);
}
 
setWatch();
