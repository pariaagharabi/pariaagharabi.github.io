document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.menu-toggle').style.display = "none";

});


document.addEventListener('click', function (event) {
    const menu = document.querySelector('.nav-links');
    const toggle = document.querySelector('.menu-toggle');

    if (menu.classList.contains('active') && !menu.contains(event.target) && event.target !== toggle) {
        menu.classList.remove('active');
        toggle.style.display = "block";
    }
});

