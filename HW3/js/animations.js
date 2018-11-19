//when page is ready
window.onload = function() {
    //Sample 1
    document.getElementsByClassName("item-1")[0].animate([
        // keyframes
        { transform: 'translateY(0px)' }, 
        { transform: 'translateY(+100px)' }
        ], { 
        // timing options
        duration: 2000,
        iterations: Infinity,
        direction: "alternate",
        easing: 'ease-in-out'
    });

    //Sample 2
    sampleTwoAnimation(1000)

    //Sample 4
    startTime()
};

function race () {
    var carOneSpeed = Math.floor(Math.random()*7+1) * 1000
    console.log("car1's speed: " + carOneSpeed)
    var carTwoSpeed = Math.floor(Math.random()*7+1) * 1000
    console.log("car2's speed: " + carTwoSpeed)
    var carThreeSpeed = Math.floor(Math.random()*7+1) * 1000
    console.log("car3's speed: " + carThreeSpeed)

    var car1 = document.getElementsByClassName("car-1")[0]
    var car2 = document.getElementsByClassName("car-2")[0]
    var car3 = document.getElementsByClassName("car-3")[0]

    car1.animate([
        {transform: 'translateX(0)'},
        {transform: 'translateX(300px)'}
    ],{
        duration: carOneSpeed
    })
    car2.animate([
        {transform: 'translateX(0)'},
        {transform: 'translateX(300px)'}
    ],{
        duration: carTwoSpeed
    })
    car3.animate([
        {transform: 'translateX(0)'},
        {transform: 'translateX(300px)'}
    ],{
        duration: carThreeSpeed
    })

    document.getElementsByClassName("start-race")[0].disabled = true;
    setTimeout(function(){document.getElementsByClassName("start-race")[0].disabled = false}, Math.max(carOneSpeed, carTwoSpeed, carThreeSpeed))
}

function sampleTwoAnimation (value) {
    value = Number(value)
    document.getElementsByClassName("run")[0].animate([
        {transform: 'translateX(0)'},
        {transform: 'translateX(300px)'}
        ], {
        duration: value,
        iterations: Infinity,
        direction: "alternate"
    });

    document.getElementsByClassName("sonic")[0].animate([
        {transform: 'rotate(0)'},
        {transform: 'rotate(360deg)'}
        ], {
        duration: value,
        iterations: Infinity,
        direction: "alternate"
    });
}

function startTime() {
    var el = document.getElementsByClassName("time")[0]
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
    h = checkTime(h)
    m = checkTime(m)
    s = checkTime(s)
    el.innerHTML = h + ":" + m + ":" + s
    var t = setTimeout(startTime, 1000)
    el.style.color = "#" + h + "" + m + "" + s
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i
}