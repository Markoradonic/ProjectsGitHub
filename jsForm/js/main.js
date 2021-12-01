var ui = new UI();

UI.displayPersons();

function addPersonToLIst() {
    ui.addPersonToLIst;
}

function showAlert(message, className) {
    ui.showAlert(message, className);
    console.log('ucitani iz main');
}

function clearFields() {
    ui.clearFields;
}

// function uuidv4() {
//     return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
//         (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//     );
// }

document.addEventListener('DOMContentLoaded', ui.displayPerson);

document.querySelector('#person-form').addEventListener('submit', (e) => {

    e.preventDefault();

    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let jmbg = document.querySelector('#jmbg').value;
    // let id = uuidv4();


    if (name === '' || lastName === '' || jmbg === '') {
        ui.showAlert('Please fill in all fields', 'danger');
    } else {
        const person = new Person(name, lastName, jmbg);
        ui.addPersonToLIst(person);
        ui.showAlert('Person Added', 'success');
        // ui.clearFields();
    }
})

///document.querySelector('.person-list').addEventListener('click', (e) => {
//    ui.deletePerson(e.target);
//    ui.showAlert('Person Removed', 'success');
//});