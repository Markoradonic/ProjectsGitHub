let ui = new UI();

function addPersonToLIst() {
    ui.addPersonToLIst;
}

function deletePerson(el) {
    ui.deletePerson(el);
}

function showAlert(message, className) {
    ui.showAlert(message, className);
    console.log('ucitani iz main');
}

function clearFields() {
    ui.clearFields;
}

document.addEventListener('DOMContentLoaded', ui.displayPerson);

document.querySelector('#person-form').addEventListener('submit', (e) => {

    e.preventDefault();

    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let jmbg = document.querySelector('#jmbg').value;


    if (name === '' || lastName === '' || jmbg === '') {
        ui.showAlert('Please fill in all fields', 'danger');
    } else {
        const person = new Person(name, lastName, jmbg);
        ui.addPersonToLIst(person);
        ui.showAlert('Person Added', 'success');
        ui.clearFields();
    }

})

document.querySelector('#person-list').addEventListener('click', (e) => {
    ui.deletePerson(e.target);
    ui.showAlert('Person Removed', 'success');
});