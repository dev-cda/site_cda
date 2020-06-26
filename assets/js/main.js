// Products
function setcategory(category) {
  var container = document.getElementById("category");
  var img = container.getElementsByClassName("column");
  for (var i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  var show = container.getElementsByClassName(category);
  for (var i = 0; i < show.length; i++) {
    show[i].style.display = "flex";
  }
  var category_header = document.getElementsByClassName("category-header");
  for (var i = 0; i < category_header.length; i++) {
    var tag_category = category_header[i].getElementsByTagName("h3")[0];
    tag_category.classList.remove("category-active");
  }
  var active_category = document.getElementById(category);
  var tag_category = active_category.getElementsByTagName("h3")[0];
  tag_category.classList.add("category-active");
}
document.addEventListener("DOMContentLoaded", function () {
  setcategory("alimentos-bebidas");
});

// Menu
document.addEventListener("DOMContentLoaded", () => {
  let navbarBurger = document.querySelector(".navbar-burger");
  let navbarMenu = document.querySelector(".navbar-menu");
  if (navbarBurger && navbarMenu) {
    navbarBurger.addEventListener("click", function () {
      navbarBurger.classList.toggle("is-active");
      if (navbarBurger.classList.contains("is-active")) {
        navbarMenu.style.display = "block";
        if (navbarMenu.querySelectorAll("a[href]")) {
          [].forEach.call(navbarMenu.querySelectorAll("a[href]"), function (
            navURL
          ) {
            navURL.addEventListener("click", function () {
              navbarMenu.style.display = "none";
              navbarBurger.classList.remove("is-active");
            });
          });
        }
      } else navbarMenu.style.display = "none";
    });
  }
  if (document.querySelectorAll(".navbar-link")) {
    [].forEach.call(document.querySelectorAll(".navbar-link"), function (
      elLink
    ) {
      if (elLink.classList.contains("is-active"))
        elLink.classList.toggle("is-active");
      if (
        elLink.nextElementSibling.classList.contains("navbar-dropdown") &&
        elLink.nextElementSibling.hasChildNodes()
      ) {
        elLink.addEventListener("click", function () {
          elLink.classList.toggle("is-active");
          if (
            elLink.classList.contains("is-active") &&
            elLink.nextElementSibling.style.display === "none"
          )
            elLink.nextElementSibling.style.display = "block";
          else if (
            !elLink.classList.contains("is-active") &&
            elLink.nextElementSibling.style.display === "block"
          )
            elLink.nextElementSibling.style.display = "none";
          [].forEach.call(elLink.nextElementSibling.childNodes, function (
            siblingChild
          ) {
            siblingChild.addEventListener("click", function () {
              siblingChild.parentNode.style.display = "none";
              if (elLink.classList.contains("is-active"))
                elLink.classList.toggle("is-active");
            });
          });
        });
        elLink.nextElementSibling.addEventListener("mouseleave", function () {
          elLink.nextElementSibling.style.display = "none";
          if (elLink.classList.contains("is-active"))
            elLink.classList.toggle("is-active");
        });
      }
    });
  }
});

// Scroll-down
window.addEventListener("scroll", function(){
  var header = this.document.querySelector(".hero-head");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// Brands slide 
window.onload = function () {
  //initialize swiper when document ready
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 7,
    spaceBetween: 20,
    freeMode: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

// form work 
const fileInput = document.querySelector('#file-js-example input[type=file]');
fileInput.onchange = () => {
  if (fileInput.files.length > 0) {
    const fileName = document.querySelector('#file-js-example .file-name');
    fileName.textContent = fileInput.files[0].name;
  }
}