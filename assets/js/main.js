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

// modal
const modal =
  document.querySelector('#terms.modal');
const btn =
  document.querySelector('#btn')
const close =
  document.querySelector('#terms .modal-close')

btn.addEventListener('click',
  function () {
    modal.style.display = 'flex'
  })

close.addEventListener('click',
  function () {
    modal.style.display = 'none'
  })

window.addEventListener('click',
  function (event) {
    if (event.target.className ===
      'modal-background') {
      modal.style.display = 'none'
    }
  })

// mask forms
var phoneWork = document.getElementById('phone-mask');
var maskphone = {
  mask: '(00)00000-0000'
};
IMask(phoneWork, maskphone);

var cpfWork = document.getElementById('cpf-mask');
var maskCpf = {
  mask: '000.000.000-00'
};
IMask(cpfWork, maskCpf);

var cepWork = document.getElementById('cep-mask');
var maskCep = {
  mask: '00000-000'
};
IMask(cepWork, maskCep);

var contactPhone = document.getElementById('phone-mask-contact');
IMask(contactPhone, maskphone);

var clientPhone = document.getElementById('client-mask-phone');
IMask(clientPhone, maskphone);


// form work
function send_form() {
  var loading = document.querySelector('#loading');
  loading.style.display = 'flex'
  var obj = {}

  var form = document.querySelectorAll("#form-work input");
  form.forEach(function (element) {
    if (element.name != "") obj[element.name] = element.value
  })
  var form_select = document.querySelectorAll("#form-work select");
  form_select.forEach(function (element) {
    if (element.name != "") obj[element.name] = element.value
  })
  obj.filename = document.getElementById("resume").value.split("fakepath\\")[1];
  if(validateForm(obj) && validate_pdf() ){
    var file = document.querySelector('#resume').files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      obj.resume = reader.result
      var data = JSON.stringify(obj);
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
          loading.style.display = 'none'
          clearForm()
        }
      });
      xhr.open("POST", "https://oxar.appetiteapex.com/ords/apex/crl/insertcrl");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("accept", "application/json");
      xhr.send(data);
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  }else{
    loading.style.display = 'none'
  }
}

// clear form
function clearForm(){
  var clear = document.querySelectorAll("#form-work input");
  clear.forEach(function (element) {
    element.value = ""
  })
}



function toggle_button() {
  var button = document.getElementById("button_send")
  if (button.hasAttribute("disabled")) button.disabled = false
  else button.disabled = true
}

// validate form
function validateForm(obj){
  var form_select = document.querySelectorAll("#form-work input");
  var exist_error = true
  var clear = document.querySelectorAll(".help.is-danger")
  clear.forEach(function (element){
    element.remove()
  })
  form_select.forEach(function (element) {
    element.classList.remove("is-danger")
    if (element.hasAttribute("required") && element.value == "") {
      var error = document.createElement("p")
      error.innerHTML = 'Campo obrigatório'
      error.classList.add("help")
      error.classList.add("is-danger")
      element.classList.add("is-danger")
      element.parentElement.after(error)
      exist_error = false
    }
  })
  return exist_error
}

// validate pdf file

function validate_pdf(){
  var file_name = document.getElementById("resume").value.split(".");
  var format = file_name[file_name.length-1]
  if(format == 'pdf') return true
  else return false

}

var file_pdf = document.getElementById("resume")
file_pdf.addEventListener("change",(event) => {
    var file_name = document.getElementById("resume").value.split("fakepath\\")[1];
    var pdf = document.querySelector(".file-name")
    pdf.textContent = file_name
} )