const addContactForm = document.getElementById('addContactForm');
const editContactForm = document.getElementById('editContactForm');

function openAddContactModal() {
    closeEditContactModal();
    let addContactModal = document.getElementById('addContactModal');
    addContactModal.style.display = 'flex';
}

function closeAddContactModal() {

    let addContactModal = document.getElementById('addContactModal');
    addContactModal.style.display = 'none';
}

const contactList = document.getElementById('contactList');

contactList.addEventListener('click', function (event) {
    
    const clickedElement = event.target;

    // проверяем, был ли клик на записи списка контактов
    if (clickedElement.tagName === 'LI') {
        // скрываем все кнопки редактирования 
        document.querySelectorAll('.editButton').forEach(button => {
            button.style.display = 'none';
        });
        // скрываем все кнопки удаления
        document.querySelectorAll('.deleteButton').forEach(button => {
            button.style.display = 'none';
        });

        closeAddContactModal();
        closeEditContactModal();

        // делаем видимыми кнопки на выбранном элементе
        const editButton = clickedElement.querySelector('.editButton');
        const deleteButton = clickedElement.querySelector('.deleteButton');
        editButton.style.display = 'inline-block';
        deleteButton.style.display = 'inline-block';
    }
});

function openEditContactModal(contactId) {
    closeAddContactModal();
    let editContactModal = document.getElementById('editContactModal');


    fetch(`/Contact/GetContact?id=${contactId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('contactId').value = data.id;
            document.getElementById('editName').value = data.name;
            document.getElementById('editMobilePhone').value = data.mobilePhone;
            document.getElementById('editBirthDate').value = data.birthDate;
            document.getElementById('editJobTitle').value = data.jobTitle;

            editContactModal.style.display = 'flex';
        });
}

function closeEditContactModal(contactId) {
    let editContactModal = document.getElementById('editContactModal');

    editContactModal.style.display = 'none';
}

function validateContactForm(form, nameElementId, phoneElementId, jobTitleElementId, birthDateElemetnId) {
    let name = form.querySelector('#' + nameElementId).value;
    let mobilePhone = form.querySelector('#' + phoneElementId).value;
    let jobTitle = form.querySelector('#' + jobTitleElementId).value;
    let birthDate = form.querySelector('#' + birthDateElemetnId).value;
    console.log(birthDate);

    if (name === '') {
        alert('Please enter a name');
        return false;
    }


    if (mobilePhone === '') {
        alert('Please enter a phone');
        return false;
    }

    if (jobTitle === '') {
        alert('Please enter a job title');
        return false;
    }

    return true;
}


// привязка функции валидации к событию submit
addContactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateContactForm(addContactForm, "addName", "addMobilePhone", "addJobTitle", "addBirthDate")) {
        addContactForm.submit();
    }
});

editContactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateContactForm(editContactForm, "editName", "editMobilePhone", "editJobTitle", "editBirthDate")) {
        editContactForm.submit();
    }
})
