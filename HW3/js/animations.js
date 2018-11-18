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
};

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