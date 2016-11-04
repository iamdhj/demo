

setInterval(function(){
    var hour, minutes, second,
        now = new Date(),
        year = now.getFullYear(),
        time = new Date(year + '-11-6').getTime() - now.getTime();

    second = (time = time / 1000 | 0) % 60;
    minutes = (time = time / 60 | 0) % 60;
    hour = (time / 60 | 0);
    
    console.log(hour, minutes, second);
}, 1000);
