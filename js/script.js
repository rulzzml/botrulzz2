// toggle clas active

const navbarNav = document.querySelector('.navbar-nav');

// ketika di klik

document.querySelector('#hamburger-menu').
onClick = () => {
    navbarNav.classList.toggle('active')
};

// Klik diluar slidebar

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});