const name = localStorage.getItem('name');

$(document).ready(function () {
    let name = localStorage.getItem('name');
    for (let i = 0; i < $('.row').length; i++) {
        if ($('.row')[i].textContent == name) {
            $('.row')[i].style.color = 'rgb(173, 0, 0)';
            $('.row')[i + 1].style.color = 'rgb(173, 0, 0)';
            $('.row')[i + 2].style.color = 'rgb(173, 0, 0)';
        }
    }
})