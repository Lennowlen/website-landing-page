// Global variable
const endpoint = 'https://script.google.com/macros/s/AKfycbzqvSqKmDxX3gF-RkhavxcV_0307B64jDIfSBFuAUUsiVe3H3JY-DZ8JUJxTDE6zyE1/exec';

const names = document.getElementById("name")
names.innerHTML = "Lenn"

// navbar link active
const links = document.querySelectorAll('.navbar__links')
const url = window.location.href
links.forEach(link => {

    if (url.includes(link.getAttribute('href'))) {
        link.classList.add('active')
    } else {
        link.classList.remove('active')
    }
})


const scriptURL = endpoint; // URL Web App 
const form = document.getElementById('dataForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });

        const result = await response.json();
        if (result.status === 'success') {
            alert('Data berhasil dikirim!');
        }
    } catch (error) {
        alert('Gagal mengirim data: ' + error.message);
    }
});