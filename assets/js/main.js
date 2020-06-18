function setcategory(category){
    var container = document.getElementById("category");
    var img = container.getElementsByClassName("column");
    for (var i=0;i<img.length;i++) {
      img[i].style.display = 'none';
    }
    var show = container.getElementsByClassName(category);
    for (var i=0;i<show.length;i++) {
      show[i].style.display = 'flex';
    }
    var category_header = document.getElementsByClassName("category-header")
    for (var i=0;i<category_header.length;i++) {
      var tag_category = category_header[i].getElementsByTagName("h3")[0]
      tag_category.classList.remove("category-active");
    }
    var active_category = document.getElementById(category);
    var tag_category = active_category.getElementsByTagName("h3")[0]
    tag_category.classList.add("category-active");
    }
  document.addEventListener("DOMContentLoaded", function() {
    setcategory('bebidas')
  });