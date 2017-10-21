$("#target").text(localStorage.getItem('number'));
count = localStorage.getItem('number');
var a = $("#infoTarget");
for (var i = 1; i <= count; i++) {
    a.append("<h3>" + 'Neighbor ' + i, "</h3>");
    a.append("<p>" + localStorage.getItem('name' + i) + "</p>");
    a.append("<p>" + localStorage.getItem('phone' + i) + "</p>");
    a.append("<p>" + localStorage.getItem('email' + i) + "</p>");
    a.append("<p>" + localStorage.getItem('info' + i) + "</p>");
}