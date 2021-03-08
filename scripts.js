// on load make font 80px //

window.onload = function () {
  document.querySelector("#title").style.fontSize = "80px";
};

// click to make title red //

cheesedip = document.querySelector("#title");
title.onclick = function () {
  cheesedip.classList.toggle("clicked");
};

// hidden info //
hidden1 = document.querySelector("div#ingredients");
hidden1.onclick = function () {
  hidden1.classList.toggle("ingredientsClicked");
};

hidden2 = document.querySelector("div#equipment");
hidden2.onclick = function () {
  hidden2.classList.toggle("equipmentClicked");
};

hidden3 = document.querySelector("div#directions");
hidden3.onclick = function () {
  hidden3.classList.toggle("directionsClicked");
};
// added HTML //
x = document.getElementById("done");
x.innerHTML = "Done and Enjoy!";
x.style.fontSize = '40px';
x.style.fontFamily = 'Bungee';
x.style.textAlign = 'center';
