var imgs = [
  "img/portfolio-1.jpg",
  "img/portfolio-3.jpg",
  "img/portfolio-4.jpg",
  "img/portfolio-1.jpg",
  "img/portfolio-3.jpg",
  "img/portfolio-4.jpg",
];

var rowDisplay = document.querySelector("#rowDisplay");
(function () {
  var box = ``;
  for (var i = 0; i < imgs.length; i++) {
    box += `
  <div class="col-md-4">
            <div class="card position-relative">
              <img src="${imgs[i]}" class="w-100" alt="">
              <div class="caption position-absolute translate-middle-x  p-3">
                <h3>item title${i + 1}</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
  
  `;
  }

  rowDisplay.innerHTML = box;
})();

var elements = Array.from(document.querySelectorAll("img"));

var lightBox = document.querySelector("#lightBox");
var item = document.querySelector("#item");
var nextElemnt = document.querySelector(".fa-arrow-right");
var prevElemnt = document.querySelector(".fa-arrow-left");
var closeElemnt = document.querySelector(".fa-xmark");

//show lightbox  function
var index;
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function (e) {
    lightBox.style.display = "flex";
    var imgSrc = e.target.getAttribute("src");
    item.style.backgroundImage = `url(${imgSrc})`;
    index = elements.indexOf(e.target);
  });
}

//next fun

nextElemnt.addEventListener("click", next);
prevElemnt.addEventListener("click", prev);
closeElemnt.addEventListener("click", close);

function next() {
  if (index == elements.length - 1) index = 0;
  else index++;

  var imgSrc = elements[index].src;
  item.style.backgroundImage = `url(${imgSrc})`;
}

function prev() {
  if (index == 0) index = elements.length - 1;
  else index--;
  var imgSrc = elements[index].src;
  item.style.backgroundImage = `url(${imgSrc})`;
}

function close() {
  lightBox.style.display = "none";
}

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") next();
  else if (e.key == "ArrowLeft") prev();
  else if (e.key == "Escape") close();
});
