const button = document.getElementById('redbutton');
const container = document.getElementById('imgcontainer');
console.log("loaded");

button.addEventListener('click', function() {
  const img = document.createElement('img');
  img.src = "nyancat.gif"; 
  img.alt = "nyancat.gif";
  container.appendChild(img);
});

document.getElementById("redbutton").addEventListener("click", function() {
    document.getElementById("container").textContent = "You clicked the button!";

  console.log("you clicked the button");
});
