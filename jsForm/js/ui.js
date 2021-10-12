class Person {
    constructor(name, lastName, JMBG) {
        this.name = name;
        this.lastName = lastName;
        this.JMBG = JMBG;
    }
}

class UI {
    static displayPerson() {
        let storePersons = [{
                name: 'Marko',
                lastName: 'Radonic',
                JMBG: '06041990'
            },
            {
                name: 'Marko',
                lastName: 'Radosevic',
                JMBG: '08041990'
            }
        ];

        let persons = storePersons;

        persons.forEach((person) => UI.addPersonToLIst(person));

    }

    static addPersonToLIst(person) {
        const list = document.querySelector('#person-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${person.name}</td>
        <td>${person.lastName}</td>
        <td>${person.JMBG}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        `;
        list.appendChild(row);
    }

    static deletePerson(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.firstCh');
        const form = document.querySelector('#person-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }


    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#lastName').value = '';
        document.querySelector('#jmbg').value = '';
    }
}

document.addEventListener('DOMContentLoaded', UI.displayPerson);

document.querySelector('#person-form').addEventListener('submit', (e) => {

    e.preventDefault();

    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let jmbg = document.querySelector('#jmbg').value;


    if (name === '' || lastName === '' || jmbg === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        const person = new Person(name, lastName, jmbg);
        UI.addPersonToLIst(person);
        UI.showAlert('Person Added', 'success');
        UI.clearFields();
    }

})

document.querySelector('#person-list').addEventListener('click', (e) => {
    UI.deletePerson(e.target);
    UI.showAlert('Person Removed', 'success');
});