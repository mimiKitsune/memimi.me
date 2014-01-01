function snow() {
  var flake = snowTemplate.cloneNode(),
      x = rand(-2000, 2000),
      y = rand(-2000, 2000),
      z = rand(-2000, 2000),
      t = rand(1000, 2000),
      w = rand(8, 48);
  
  flake.style.width = w + "px";
  
  flake.id = null;
  flake.className = 'flake';
  document.body.appendChild(flake);
  flake.style.left = Math.floor(Math.random() * 100).toString() + "%";
  
  setTimeout(function() {
//      console.log('.');
    flake.style.opacity = 0;
    flake.style.webkitTransform = 
      "translateX(" + rand(-500, 500) + "px) translateY(" + t + "px) " + "rotateX(" + x + "deg) rotateY(" + y + "deg) rotateZ(" + z + "deg) ";
    flake.style.mozTransform = 
      "translateX(" + rand(-500, 500) + "px) translateY(" + t + "px) " + "rotateX(" + x + "deg) rotateY(" + y + "deg) rotateZ(" + z + "deg) ";
    flake.style.transform = 
      "translateX(" + rand(-500, 500) + "px) translateY(" + t + "px) " + "rotateX(" + x + "deg) rotateY(" + y + "deg) rotateZ(" + z + "deg) ";

  }, 100);
  
  setTimeout(function() {
    flake.remove();
    flake = null;
  }, 5000);

  if (dosnow) {
    setTimeout(snow, 50);
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

