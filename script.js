var deadline = new Date("Jan 10, 2023 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("d").innerHTML = days + " days";
    document.getElementById("h").innerHTML = hours + " hours";
    document.getElementById("m").innerHTML = minutes + " mins";
    document.getElementById("s").innerHTML = seconds + " secs";
    // document.getElementById("demo").innerHTML =
    //     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);
