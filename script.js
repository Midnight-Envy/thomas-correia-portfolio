const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

//Fixing the button to change background color and change it back to the original color when clicked again
const button = document.getElementById("color-button");

let darkMode = false;

button.addEventListener("click", function () {

  if (darkMode === false) {
    document.body.style.backgroundColor = "#0f172a";
    darkMode = true;
  } else {
    document.body.style.backgroundColor = "#1e3a8a";
    darkMode = false;
  }

});
// Show the current time
const time = document.createElement("p");
time.textContent = "Current time: " + new Date().toLocaleTimeString();
document.body.appendChild(time);
