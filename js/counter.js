if (localStorage.getItem('number') === null) {
    number = 0;
    localStorage.setItem('number', number);
} else {
    localStorage.setItem('number', localStorage.getItem('number'));
}
$("#counter").on('click', function() {
    var counter = localStorage.getItem('number');
    counter++;
    localStorage.setItem('number', counter);
});