var counter =
    setInterval(() => {
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var time = hours + ':' + minutes + ':' + seconds;
        console.log(time);
    }, 1000);