let viewportSize = document.querySelector(".viewport").offsetWidth;
let slider = document.querySelector(".slider");
let viewSlide = document.querySelectorAll(".indicator-slide")
let numSlide = 0;
let i = 0;

viewSlide[0].childNodes[1].style.backgroundColor = "white"
viewSlide[0].childNodes[3].style.color = "white"

let sliderInterval = setInterval(() => {
    viewSlide[numSlide].childNodes[1].firstChild.style.width = 2.8 * i + "px"
    if (i == 100) {
        numSlide = (numSlide + 1) % 4
        if (numSlide == 0) {
            for(let j = 0; j < 4; ++j) {
                viewSlide[j].childNodes[1].firstChild.style.width = 0;
                viewSlide[j].childNodes[1].style.backgroundColor = null;
                viewSlide[j].childNodes[3].style.color = null;
            }
        }
        viewSlide[numSlide].childNodes[1].style.backgroundColor = "white"
        viewSlide[numSlide].childNodes[3].style.color = "white"
        i = 0;
    }  
    i++
    slider.style.left = -numSlide * viewportSize + "px";
}, 50)


let serviceContent = document.querySelector(".service-content")
let serviceContentBlocks = {
    "photography": {
        "show": true,
        "content": document.querySelector(".photography").nextSibling.nextSibling,
        "btn": document.querySelector(".photography").childNodes[3],
        "showService": function() {
            this.show = true
            this.content.style.height = "180px"
            this.content.style.opacity = 1
            this.content.childNodes[1].style.opacity = 1
            this.btn.style.transform = "rotate(0deg)"
        },
        "hideService": function() {
            this.show = false
            this.content.style.height = "0"
            this.content.style.opacity = 0
            this.content.childNodes[1].style.opacity = 0
            this.btn.style.transform = "rotate(180deg)"
        },
    },
    "creativity": {
        "show": false,
        "content": document.querySelector(".creativity").nextSibling.nextSibling,
        "btn": document.querySelector(".creativity").childNodes[3],
        "showService": function() {
            this.show = true
            this.content.style.height = "180px"
            this.content.style.opacity = 1
            this.content.childNodes[1].style.opacity = 1
            this.btn.style.transform = "rotate(0deg)"
        },
        "hideService": function() {
            this.show = false
            this.content.style.height = "0"
            this.content.style.opacity = 0
            this.content.childNodes[1].style.opacity = 0
            this.btn.style.transform = "rotate(180deg)"
        },
    },
    "web-design": {
        "show": false,
        "content": document.querySelector(".web-design").nextSibling.nextSibling,
        "btn": document.querySelector(".web-design").childNodes[3],
        "showService": function() {
            this.show = true
            this.content.style.height = "180px"
            this.content.style.opacity = 1
            this.content.childNodes[1].style.opacity = 1
            this.btn.style.transform = "rotate(0deg)"
        },
        "hideService": function() {
            this.show = false
            this.content.style.height = "0"
            this.content.style.opacity = 0
            this.content.childNodes[1].style.opacity = 0
            this.btn.style.transform = "rotate(180deg)"
        },
    },
}

function selectServiceContent(key, arr) {
    switch (key) {
        case "photography": 
            if (arr["photography"].show === true) {
                arr["photography"].hideService();
            } else {
                arr["photography"].showService();
                arr["creativity"].hideService();
                arr["web-design"].hideService();
            }
            break;
        case "creativity":
            if (arr["creativity"].show === true) {
                arr["creativity"].hideService();
            } else {
                arr["creativity"].showService();
                arr["photography"].hideService();
                arr["web-design"].hideService();
            }
            break;
        case "web-design":
            if (arr["web-design"].show === true) {
                arr["web-design"].hideService();
            } else {
                arr["web-design"].showService();
                arr["creativity"].hideService();
                arr["photography"].hideService();
            }
            break;
        default:
            break;
    }
}

serviceContent.addEventListener("click", (e) => {
    console.log(document.querySelector(".creativity").childNodes[3])
    let classArr = e.target.className.split(" ")
    if (classArr[0] == "btn-arrow") {
        let serviceName = e.target.parentNode.className.split(" ")[1]
        selectServiceContent(serviceName, serviceContentBlocks);
    }
})

let viewportSizeQuotations = document.querySelector(".viewport-quotations").offsetWidth;
let sliderQuotations = document.querySelector(".slider-quotations");
let btnLeftQuotations = document.querySelector(".btn-left-quotations");
let btnRightQuotations = document.querySelector(".btn-right-quotations");
let numSlideQuotations = 0;

console.log(btnLeftQuotations)

btnLeftQuotations.addEventListener("click", () => {
    if (numSlideQuotations <= 0) {
        numSlideQuotations = 4;
    } else if (numSlideQuotations > 0) {
        numSlideQuotations--
    }
    sliderQuotations.style.left = numSlideQuotations * -viewportSizeQuotations + "px";
})

btnRightQuotations.addEventListener("click", () => {
    if (numSlideQuotations >= 4) {
        numSlideQuotations = 0;
    } else if (numSlideQuotations < 4) {
        numSlideQuotations++
    }
    sliderQuotations.style.left = numSlideQuotations * -viewportSizeQuotations + "px";
})


let galleryImg = document.querySelectorAll(".block-left .img > img, .block-right .img-big > img, .img-mini .img > img");

for (let j = 0; j < 7; ++j) {
    let height = galleryImg[j].clientHeight;
    galleryImg[j].nextSibling.nextSibling.style.height = height - 1 + "px"
    galleryImg[j].parentNode.style.height = height + "px"
    console.log(galleryImg[j].nextSibling.nextSibling)
}

let viewportSizeReview = document.querySelector(".viewport-review").offsetWidth;
let sliderReview = document.querySelector(".slider-review");
let btnLeftReview = document.querySelector(".btn-left-review");
let btnRightReview = document.querySelector(".btn-right-review");
let numSlideReview = 0;

btnLeftReview.addEventListener("click", () => {
    if (numSlideReview <= 0) {
        numSlideReview = 4;
    } else if (numSlideReview > 0) {
        numSlideReview--
    }
    sliderReview.style.left = numSlideReview * -viewportSizeReview + "px";
})

btnRightReview.addEventListener("click", () => {
    if (numSlideReview >= 4) {
        numSlideReview = 0;
    } else if (numSlideReview < 4) {
        numSlideReview++
    }
    sliderReview.style.left = numSlideReview * -viewportSizeReview + "px";
})






