class UI {
    static displayPerson() {
        let storePersons = [];
        let persons = storePersons;
        persons.forEach((person) => UI.addPersonToLIst(person));

    }

    addPersonToLIst(person) {
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

    deletePerson(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.firstCh');
        const form = document.querySelector('#person-form');
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }


    clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#lastName').value = '';
        document.querySelector('#jmbg').value = '';
    }
}