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

// header slide
var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  imagesLoaded: true,
  percentPosition: false,
  pageDots: false,
  wrapAround: true
});

var elem_merchan = document.querySelector('#merchan .carousel');
var flkty_merchan = new Flickity(elem_merchan, {
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  imagesLoaded: true,
  percentPosition: false,
  pageDots: false,
  wrapAround: true
});

var elem_brands = document.querySelector('#brands .carousel');
var flkty_brands = new Flickity(elem_brands, {
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  imagesLoaded: true,
  percentPosition: false,
  pageDots: false,
  groupCells: 2,
  wrapAround: true
});

buttons = document.getElementsByClassName('contact-button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      let form_name = buttons[i].innerText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      document.getElementById('buttons-container').style.display = 'none';
      document.getElementById(`form-${form_name}`).style.display = 'block';
      document.getElementById('form-contact').innerHTML = `Preencha o formulário abaixo para enviar sua ${buttons[i].innerText}`;
      if (form_name === 'denuncia') {
        document.getElementById('form-contact').innerHTML = `Preencha o formulário abaixo para enviar sua ${buttons[i].innerText}. Caso prefira, entre em contato com <address><a href="tel:+5584996312468">(84) 9 9631-2468</a></address>`;
      }
      });
  }

  document.addEventListener("DOMContentLoaded", () => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {threshold: 0.1});
  
    const fadeInSection = document.querySelectorAll('.fade-in-form').forEach(fade => {
      observer.observe(fade);
    })
  });

  let buttons_back = document.getElementsByClassName('btn-back-buttons');
  
  for (let i = 0; i < buttons_back.length; i++) {
    buttons_back[i].addEventListener('click', function () {
      document.getElementById('buttons-container').style.display = 'flex';
      document.getElementById('form-duvida').style.display = 'none';
      document.getElementById('form-sugestao').style.display = 'none';
      document.getElementById('form-reclamacao').style.display = 'none';
      document.getElementById('form-denuncia').style.display = 'none';
      document.getElementById('form-contact').innerHTML = '{{ site.data.contact.text }}';
      
    });

  }