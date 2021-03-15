function checkParams() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var party = document.getElementById('party_number').value;
    var btt = document.getElementById('submit_butt');
    if (name.length !== 0 && email.length !== 0 && date.length !== 0 && party.length !== 0) {
        btt.disabled = false;
        //console.log('убрал');
    } else {
        btt.disabled = true;
        //console.log('не все');
    }
}