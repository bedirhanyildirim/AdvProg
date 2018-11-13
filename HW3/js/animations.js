//when page is ready
window.onload = function() {
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
};