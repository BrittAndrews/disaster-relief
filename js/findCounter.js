function setup() {}
count = localStorage.getItem('number');
//change code here for styles
for (var i = 1; i <= count; i++) {
    var a = $("<div>");
    a.append("<h3>" + 'Neighbor ' + i, "</h3>");
    a.append("<p>" + localStorage.getItem('name' + i) + "</p>");
    a.append("<p>" + localStorage.getItem('phone' + i) + "</p>");
    a.append("<p>" + localStorage.getItem('email' + i) + "</p>");
    a.append("<p>" + localStorage.getItem('info' + i) + "</p>");
    $("#infoTarget").prepend(a);
}

function renderProgress(progress) {
    progress = Math.floor(progress);
    if (progress < 25) {
        var angle = -90 + (progress / 100) * 360;
        $(".animate-0-25-b").css("transform", "rotate(" + angle + "deg)");
    } else if (progress >= 25 && progress < 50) {
        var angle = -90 + ((progress - 25) / 100) * 360;
        $(".animate-0-25-b").css("transform", "rotate(0deg)");
        $(".animate-25-50-b").css("transform", "rotate(" + angle + "deg)");
    } else if (progress >= 50 && progress < 75) {
        var angle = -90 + ((progress - 50) / 100) * 360;
        $(".animate-25-50-b, .animate-0-25-b").css("transform", "rotate(0deg)");
        $(".animate-50-75-b").css("transform", "rotate(" + angle + "deg)");
    } else if (progress >= 75 && progress <= 100) {
        var angle = -90 + ((progress - 75) / 100) * 360;
        $(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b")
            .css("transform", "rotate(0deg)");
        $(".animate-75-100-b").css("transform", "rotate(" + angle + "deg)");
    }
    $(".text").html(progress + "%");
}


$(document).ready(function() {
    renderAmount = count * 10;
    renderProgress(renderAmount);
});