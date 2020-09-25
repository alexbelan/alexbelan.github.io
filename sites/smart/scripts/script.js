let btnMenu = document.getElementById("btnMenu");
let menu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
})

// let teamSwiper = new Swiper('.people', {
//     speed: 400,
//     spaceBetween: 100,
//     init: false
// })

let mySwiper = new Swiper('.gallery', {
    speed: 400,
    spaceBetween: 100, 
    init: false,
})

let clientsSwiper = new Swiper('.clients-viewport', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
})

let companySwiper = new Swiper('.company', {
    speed: 400,
    spaceBetween: 100,
    init: false,
})

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 768) {
        mySwiper.init();
    }
    if (window.innerWidth < 1024) {
        companySwiper.init();
    }
})

window.addEventListener("resize", () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 768) {
        mySwiper.init();
    } else {
        mySwiper.destroy(false, true);
    }

    if (window.innerWidth < 1024) {
        companySwiper.init();
    } else {
        companySwiper.destroy(false, true);
    }
    
})

let btnsServices = document.querySelector(".btns-services")
let headerContent = document.querySelector(".data h3")
let servicesContent = document.querySelector(".data .content")
let tab = "analitic"

let services = {
    "analitic": {
        "header": "Modern App Design",
        "content": `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum totam ad sint error porro. Consectetur, sunt, aperiam. Magni rem optio distinctio illum consequuntur delectus nulla illo aperiam itaque cumque.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel officia vitae eveniet quam rem unde facilis.</p>
                    <p>vitae eveniet quam rem unde facilis.</p>`,
    },
    "settings": {
        "header": "New App",
        "content": `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore, mollitia non soluta excepturi minima alias porro. Necessitatibus, optio dicta voluptatem, officia vero, in sit soluta hic pariatur blanditiis et.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est libero natus laudantium ipsa, optio temporibus quam impedit totam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ea!</p>`
    },
    "charts": {
        "header": "App Development",
        "content": `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus nulla facere corrupti, quae debitis corporis? Quos assumenda est velit expedita sit esse ullam temporibus et voluptatibus voluptates? A, quisquam impedit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quam? Commodi soluta quos dolor quia!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>`
    },
    "analiti2": {
        "header": "New Modern App Design",
        "content": `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam reiciendis, impedit corrupti aliquid voluptates illum a laudantium placeat hic perspiciatis quis soluta dicta non fuga quisquam ratione vero quaerat debitis!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque assumenda porro animi amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>`
    }
}

btnsServices.addEventListener("click", (e) => {
    let tabActive = document.querySelector("button." + tab);
    tabActive.classList.toggle("active")
    tab = e.target.className;
    headerContent.innerHTML = services[e.target.className]["header"]
    servicesContent.innerHTML = services[e.target.className]["content"]
    document.querySelector("button." + e.target.className).classList.toggle("active")
})