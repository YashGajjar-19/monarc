// Locomotive Scroll Smooth Scroll Setup
function locomotiveAnimation() {
  if (window.LocomotiveScroll) {
    const scrollContainer = document.querySelector("#main");
    if (!scrollContainer) return;
    
    window.locomotiveInstance = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });

    // Update scroll after a delay to account for image loading
    setTimeout(() => {
      window.locomotiveInstance.update();
    }, 1000);
  }
}

// Collections Hover Preview Follower
function collectionsHoverAnimation() {
  const elemC = document.querySelector("#elem-container");
  const fixed = document.querySelector("#fixed-image");
  const elems = document.querySelectorAll(".elem");
  
  if (!elemC || !fixed) return;

  let mouseX = 0, mouseY = 0;
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let isHovered = false;

  elemC.addEventListener("mouseenter", function () {
    fixed.classList.add("visible");
    isHovered = true;
  });

  elemC.addEventListener("mouseleave", function () {
    fixed.classList.remove("visible");
    isHovered = false;
  });

  elemC.addEventListener("mousemove", function (e) {
    // Get mouse coordinates relative to viewport
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      const image = e.getAttribute("data-image");
      if (image) {
        fixed.style.backgroundImage = `url("${image}")`;
      }
    });
  });

  // Smooth cursor follow interpolation
  function animateFollower() {
    if (isHovered) {
      // Damping factor (0.1 means 10% move towards target per frame)
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      // Position follower centered on cursor
      const offsetWidth = fixed.offsetWidth || 300;
      const offsetHeight = fixed.offsetHeight || 400;
      fixed.style.left = `${currentX - offsetWidth / 2}px`;
      fixed.style.top = `${currentY - offsetHeight / 2}px`;
    }
    requestAnimationFrame(animateFollower);
  }

  animateFollower();
}

// Craft, Design, Identity Tab Animation
function page4Animation() {
  const tabs = document.querySelectorAll("#box-tabs h2, #box-tabs button");
  const img = document.querySelector("#box-right img");
  const desc = document.querySelector("#box-desc p");
  const boxRight = document.querySelector("#box-right");
  if (!tabs.length || !img || !desc || !boxRight) return;

  // Ensure boxRight has relative positioning for absolute child layers
  boxRight.style.position = "relative";

  let isTransitioning = false;

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      if (isTransitioning || tab.classList.contains("active")) return;

      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tab.classList.add("active");

      const newImg = tab.getAttribute("data-image");
      const newDesc = tab.getAttribute("data-desc");
      if (newImg && newImg !== img.getAttribute("src")) {
        isTransitioning = true;
        
        // Create secondary overlay image element for smooth opacity cross-fade
        const tempImg = document.createElement("img");
        tempImg.src = newImg;
        tempImg.alt = tab.textContent.trim();
        
        tempImg.style.position = "absolute";
        tempImg.style.top = "0";
        tempImg.style.left = "0";
        tempImg.style.width = "100%";
        tempImg.style.height = "100%";
        tempImg.style.objectFit = "cover";
        tempImg.style.objectPosition = "center";
        tempImg.style.borderRadius = window.getComputedStyle(img).borderRadius;
        tempImg.style.opacity = "0";
        tempImg.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        tempImg.style.zIndex = "2";
        
        boxRight.appendChild(tempImg);

        // Force reflow
        tempImg.offsetHeight;

        tempImg.style.opacity = "1";

        setTimeout(() => {
          img.src = newImg;
          img.alt = tempImg.alt;
          tempImg.remove();
          isTransitioning = false;
        }, 600);
      }
      if (newDesc) {
        desc.textContent = newDesc;
      }
    });
  });
}

// Swiper Carousel Setup
function swiperAnimation() {
  if (window.Swiper) {
    new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: false,
      spaceBetween: 30,
      breakpoints: {
        600: {
          spaceBetween: 100
        }
      }
    });
  }
}

// Mobile Menu Overlay Open/Close
function menuAnimation() {
  const menu = document.querySelector("nav h3");
  const full = document.querySelector("#full-scr");
  const navimg = document.querySelector("nav img");
  const menuLinks = document.querySelectorAll("#full-nav h2 a");
  
  if (!menu || !full) return;
  let flag = 0;

  function toggleMenu() {
    if (flag === 0) {
      full.style.top = "0%";
      if (navimg) navimg.style.opacity = 0;
      menu.innerHTML = "\u2715 Menu";
      flag = 1;
      
      // Staggered fade in for links
      menuLinks.forEach((link, index) => {
        link.style.opacity = "0";
        link.style.transform = "translateY(30px)";
        link.style.transition = "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
        setTimeout(() => {
          link.style.opacity = "1";
          link.style.transform = "translateY(0)";
        }, 100 + index * 60);
      });
    } else {
      full.style.top = "-100%";
      if (navimg) navimg.style.opacity = 1;
      menu.innerHTML = "Menu";
      flag = 0;
    }
  }

  menu.addEventListener("click", toggleMenu);

  // Close menu when any menu link is clicked
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      toggleMenu();
    });
  });
}

// Optimized Loader Animation
function loaderAnimation() {
  const loader = document.querySelector("#loader");
  if (!loader) return;

  const fadeOut = () => {
    loader.style.top = "-100%";
    setTimeout(() => {
      loader.style.display = "none";
    }, 800); // Matches transition time
  };

  if (document.readyState === "complete") {
    setTimeout(fadeOut, 800);
  } else {
    let loaded = false;
    window.addEventListener("load", function () {
      if (!loaded) {
        loaded = true;
        setTimeout(fadeOut, 600);
      }
    });

    // Fallback wait: 1.5 seconds maximum
    setTimeout(function () {
      if (!loaded) {
        loaded = true;
        fadeOut();
      }
    }, 1500);
  }
}

// Initialize all animations
document.addEventListener("DOMContentLoaded", () => {
  loaderAnimation();
  menuAnimation();
  collectionsHoverAnimation();
  page4Animation();
  swiperAnimation();
  locomotiveAnimation();
});
