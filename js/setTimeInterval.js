//run the code every 1 second, we are creating timerid ,i.e, interval is timerid here for the setInterval
var interval = setInterval(() => {
    console.log("hey raghav");
}, 1000);

//i am passing interval as timerid for setTimeout which only runs at 6th second only once with clearTimeout having
//the timerid as interval for the above code.
setTimeout(() => {
    clearTimeout(interval);
}, 6000);