class UI {

    static persons = [];
    static titleValue = document.getElementById('name');
    static lastNameValue = document.getElementById('lastName');
    static jmbgValue = document.getElementById('jmbg');
    static btn = document.querySelector(".btn");
    static btnEdit = document.querySelector(".btnEdit");


    static getAll() {
        fetch("https://localhost:44300/api/Persons")
            .then(response => response.json())
            .then(responseData => {
                UI.persons = responseData.data
                UI.persons.forEach((person) => UI.displayPerson(person));
            });
    }

    static displayPersons() {

        UI.cleanListOnUi();
        UI.getAll();

    }

    static displayPerson(person) {
        let row = document.createElement('tr');
        let list = document.querySelector('.person-list');
        row.innerHTML = `
        <td class="person-name">${person.name}</td>
        <td class="person-lastName">${person.lastName}</td>
        <td class="person-jmbg">${person.jmbg}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete" onClick="UI.deletePerson('${person.id}')" >Delete</a> 
        <a href="#" class="btn btn-primary btn-sm delete" onClick="UI.editPerson('${person.id}')" >Edit</a> </td>
        `;

        list.appendChild(row);
    }

    addPersonToLIst() {

        let _data = {
            name: UI.titleValue.value,
            lastName: UI.lastNameValue.value,
            jmbg: UI.jmbgValue.value
        }

        fetch("https://localhost:44300/api/Persons", {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(data => {
            UI.displayPersons(data);
            UI.clearFields();
            // setTimeout(() => {
            //     window.location.reload();
            // }, 1000);


        })

    }


    static servicesGetPersonId(id) {
        let url = "https://localhost:44300/api/Persons";
        fetch(`${url}/${id}`)
            .then(response => response.json())
            .then(responseData => {

                UI.titleValue.value = responseData.data.name;
                UI.lastNameValue.value = responseData.data.lastName;
                UI.jmbgValue.value = responseData.data.jmbg;
            });
    }

    static editPersonId(id) {
        let url = "https://localhost:44300/api/Persons";
        fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: UI.titleValue.value,
                lastName: UI.lastNameValue.value,
                jmbg: UI.jmbgValue.value
            })

        }).then(data => {
            UI.displayPersons(data);
            UI.clearFields();
            window.location.reload();

        })
    }

    static editPerson(id) {

        UI.servicesGetPersonId(id);

        UI.btn.addEventListener('click', (e) => {
            e.preventDefault();
            UI.editPersonId(id)
        })



    }


    static deletePerson(id) {
        let url = "https://localhost:44300/api/Persons";
        let result = confirm("Want to delete?");
        // vise ti nece trebati ova logika za brisanje iz baze
        console.log(`${url}/${id}`)

        if (result) {
            fetch(`${url}/${id}`, {
                    method: "DELETE",
                })
                .then(data => {
                    UI.displayPersons(data);
                })
        }
        // i ovde samo pozoves osvezenje ui uz funkciju UI.displayPersons();
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


    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#lastName').value = '';
        document.querySelector('#jmbg').value = '';
    }

    static cleanListOnUi() {
        let list = document.querySelector('.person-list');
        list.innerHTML = "";
    }
}