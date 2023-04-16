let images = [
  'img/21.jpg',
  'img/20.jpg',
  'img/19.jpg',
  'img/18.jpg',
  'img/17.jpg',
  'img/16.jpg',
  'img/15.jpg',
  'img/14.jpg',
  'img/13.jpg',
  'img/12.jpg',
  'img/11.jpg',
  'img/10.jpg',
  'img/9.jpg',
  'img/8.jpg',
  'img/7.jpg',
  'img/6.jpg',
  'img/5.jpg',
  'img/4.jpg',
  'img/3.jpg',
  'img/2.jpg',
  'img/1.jpg'];

var currentImageIndex = 0;
var imageElement = document.getElementById("threesixty-img");
var isHolding = false;
var lastX;
var threshold = 30;

var progressBar = document.getElementById("progress-bar");

imageElement.addEventListener("load", function() {
  var progress = (currentImageIndex + 1) / images.length;
  progressBar.style.width = (progress * 100) + "%";
});

imageElement.addEventListener("mousedown", function(event) {
  isHolding = true;
  lastX = event.clientX;
  console.log(lastX)
});

imageElement.addEventListener("mouseup", function() {
  isHolding = false;
});

imageElement.addEventListener("mouseout", function() {
  isHolding = false;
});

imageElement.addEventListener("mousemove", function(event) {
  if (!isHolding) {
    return;
  }
  var deltaX = event.clientX - lastX;
  if (Math.abs(deltaX) > threshold) {
    lastX= event.clientX
    if (deltaX > 0) {
      nextImage();
    } else {
      previousImage();
    }
  }
});

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageElement.src = images[currentImageIndex];
}

function previousImage() {
  currentImageIndex = (currentImageIndex + images.length - 1) % images.length;
  imageElement.src = images[currentImageIndex];
}

nextImage();

//event listener double click
var zoom = true
var logo360 = document.getElementById("logo-360");
imageElement.addEventListener("dblclick", function() {
  if (zoom) {
    imageElement.style.transform = "scale(2) translate(0%,5.5%)";
    zoom = false;
    logo360.style.display = "none";
  }
  else{
    imageElement.style.transform = "scale(1)";
    zoom = true;
    logo360.style.display = "block";
  }
});