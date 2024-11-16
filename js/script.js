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