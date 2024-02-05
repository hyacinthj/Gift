var password ="06251211";

function passcheck() {

    if(document.getElementById('pass1').value != password) {
        alert('Wrong password');
        return false;
    }

    if(document.getElementById('pass1').value == password);
}