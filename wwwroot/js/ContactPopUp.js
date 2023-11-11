function openAddContactModal() {
    let addContactModal = document.getElementById('addContactModal');

    // Отображение модального окна
    addContactModal.style.display = 'block';
}

function openEditContactModal(contactId) {
    let editContactModal = document.getElementById('editContactModal');

    fetch(`/Contact/GetContact?id=${contactId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById('contactId').value = data.id;
            document.getElementById('editName').value = data.name;
            document.getElementById('editMobilePhone').value = data.mobilePhone;
            document.getElementById('editJobTitle').value = data.jobTitle;

            // Отображение модального окна
            editContactModal.style.display = 'block';
        });
}