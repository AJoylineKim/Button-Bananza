const button = document.getElementById('redbutton');
const container = document.getElementById('imgcontainer');

button.addEventListener('click', function() {
  const img = document.createElement('img');
  img.src = "nyancat.gif"; 
  img.alt = "nyancat.gif";
  container.appendChild(img);
});

document.getElementById("redbutton").addEventListener("click", function() {
    document.getElementById("consoleLog").textContent = "You clicked the button!";
});
