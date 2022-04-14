const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
const menuList = document.querySelector('.menu-list');
const searchBar = document.querySelector('.search-bar');


menuIcon.addEventListener('click', () => {

    navbar.classList.toggle('v-height');
    setTimeout(() => {
        menuList.classList.toggle('v-class');
        searchBar.classList.toggle('v-class');
    }

        , 500);

})

