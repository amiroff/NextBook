const throttle = function(fn, delay) {
    delay || (delay = 100);
    let throttle = false;
    return function(){
        if (throttle){ return; } // you no enter
        throttle = setTimeout(function(){ 
            // tail it - and do one last ajax request
            fn.apply(this, arguments);
            throttle = false; 
            }, delay);
        fn.apply(this, arguments);
    };
};

export default throttle;