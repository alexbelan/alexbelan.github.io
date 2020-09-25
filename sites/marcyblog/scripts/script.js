let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector("nav");
console.log(btnMenu)

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show-meny')
    let arrSvgPaths = btnMenu.querySelectorAll('.cls-1')
    for (let i = 0; i < 3; ++i) {
        arrSvgPaths[i].classList.toggle('show-btn-meny');
    }
})