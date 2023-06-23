let navbar=document.querySelector('.header .navbar')


document.querySelector('#menu-btn').onclick = () => {

    navbar.classList.toggle('active');
}
window.onscroll =() => {

    navbar.classList.remove('active');
}

function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('#box')
    let l = document.getElementsByTagName('p')

    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('p')[0];

        let value = a.innerHTML || a.innerText || a.textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";

        }
        else {
            item[i].style.display = "none";
        }
    }
}

function searchtwo() {
    let filter = document.getElementById('catch').value.toUpperCase();
    let item = document.querySelectorAll('#boxx')
    let l = document.getElementsByTagName('p')

    for (var i = 0; i <= l.length; i++) {
        let a = item[i].getElementsByTagName('p')[0];

        let value = a.innerHTML || a.innerText || a.textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";

        }
        else {
            item[i].style.display = "none";
        }
    }
}
