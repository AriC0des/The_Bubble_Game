var timer = 60;
var score = 0;
var hitrn = 0;
function makeBubble() {
    var clutter = "";
    for (let i = 0; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
    timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<br> Your Score is: ${score}</h1>`
        }
    }, 1000)
}
function getHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function getScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var test = Number(dets.target.textContent);
    if (test === hitrn) {
        getScore();
        makeBubble();
        getHit();
    }
})
makeBubble();
runTimer();
getHit();
