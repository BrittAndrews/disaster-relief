if (localStorage.getItem('number') === null) {
    number = 0;
    localStorage.setItem('number', number);
} else {
    localStorage.setItem('number', localStorage.getItem('number'));
}
$("#counter").on('click', function() {
    var savedObject = {
        name: $("#name").val(),
        phone: $("#phone").val(),
        email: $("#email").val(),
        info: $("#info").val()
    };
    console.log(savedObject);
    var counter = localStorage.getItem('number');
    counter++;
    localStorage.setItem('number', counter);
    localStorage.setItem('name' + counter, savedObject.name);
    localStorage.setItem('phone' + counter, savedObject.phone);
    localStorage.setItem('email' + counter, savedObject.email);
    localStorage.setItem('info', savedObject.info);
});