function showTab(tab) {
    document.getElementById('list').classList.add('hidden');
    document.getElementById('calendar').classList.add('hidden');
    document.getElementById(tab).classList.remove('hidden');
}

function openRegister() {
    document.getElementById('registerModal').classList.remove('hidden');
}

function closeRegister() {
    document.getElementById('registerModal').classList.add('hidden');
}

function openUpdate() {
    document.getElementById('updateModal').classList.remove('hidden');
}

function closeUpdate() {
    document.getElementById('updateModal').classList.add('hidden');
}
