const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
// minutes

const m = new Date();
let minutes = m.getMinutes();
document.getElementById("min").innerHTML = minutes;

function delayedPopup() {
    setTimeout(() => {
        alert("This is a delayed popup!");
    }, 2000);
}