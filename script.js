if (window.LocomotiveScroll) {
    new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
    });
}

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
if (elemC && fixed) {
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })
}

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        if (fixed) {
            fixed.style.backgroundImage = `url(${image})`
        }
    })
})

function page4Animation() { 
    var tabs = document.querySelectorAll("#box-tabs h2");
    var img = document.querySelector("#box-right img");
    var desc = document.querySelector("#box-desc p");
    if (!tabs.length || !img || !desc) return;

    tabs.forEach(function(tab) {
        tab.addEventListener("click", function(e) {
            e.preventDefault(); // prevent link from jumping to top
            
            // Remove active class from all tabs
            tabs.forEach(function(t) {
                t.classList.remove("active");
            });

            // Add active class to the clicked tab
            tab.classList.add("active");

            // Update the image and description
            var newImg = tab.getAttribute("data-image");
            var newDesc = tab.getAttribute("data-desc");
            img.src = newImg;
            img.alt = tab.textContent.trim() + " Ferrari image";
            desc.textContent = newDesc;
        });
    });
}

if (window.Swiper) {
    new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 100,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}


page4Animation()
