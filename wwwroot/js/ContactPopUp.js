const addContactForm = document.getElementById('addContactForm');
const editContactForm = document.getElementById('editContactForm');
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

        closeAllModals();

        // делаем видимыми кнопки на выбранном элементе
        const editButton = clickedElement.querySelector('.editButton');
        const deleteButton = clickedElement.querySelector('.deleteButton');
        editButton.style.display = 'inline-block';
        deleteButton.style.display = 'inline-block';
    }
});

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

document.getElementById('addContactForm').addEventListener('click', function (event) {
    event.stopPropagation();
});
document.getElementById('editContactForm').addEventListener('click', function (event) {
    event.stopPropagation();
});

function openAddContactModal() {
    closeEditContactModal();
    let addContactModal = document.getElementById('addContactModal');
    addContactModal.style.display = 'flex';
}

function closeAddContactModal() {

    let addContactModal = document.getElementById('addContactModal');
    addContactModal.style.display = 'none';
}
function openEditContactModal(contactId) {
    closeAddContactModal();
    let editContactModal = document.getElementById('editContactModal');


    fetch(`/Contact/GetContact?id=${contactId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('contactId').value = data.id;
            document.getElementById('editName').value = data.name;
            document.getElementById('editMobilePhone').value = data.mobilePhone;
            let birthDateOnly = data.birthDate.substring(0, 10);
            document.getElementById('editBirthDate').value = birthDateOnly;
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

    if (name === '') {
        alert('Please enter a name');
        return false;
    }
    else if (!(/^[a-zA-Z]+$/.test(name))) {
        alert('Name must contain only letters of the Latin alphabet');
        return false;
    }


    if (mobilePhone === '') {
        alert('Please enter a phone');
        return false;
    }
    else if (!/^(\+|[0-9])\d*$/.test(mobilePhone))
    {
        alert('The mobile phone number must consist of numbers only');
        return false;
    }
    else if (!((mobilePhone.startsWith("80") && mobilePhone.length === 11) || (mobilePhone.startsWith("+375") && mobilePhone.length === 13))) {
        alert('Incorrect phone format. (only +375/80 + 9 numbers)')
        return false;
    }

    if (jobTitle === '') {
        alert('Please enter a job title');
        return false;
    }



    if (birthDate === '') {
        alert('Please enter birth date');
        return false;
    }
    else {
        const birthDateInDate = new Date(birthDate);
        const currentDate = new Date();
        const eighteenYearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
        if (birthDateInDate > eighteenYearsAgo) {
            alert('You are too young (you must be at least 18 years old');
            return false;
        }
    }

    return true;
}

function closeAllModals()
{

    closeEditContactModal();
    closeAddContactModal();
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeAllModals();
    }
});