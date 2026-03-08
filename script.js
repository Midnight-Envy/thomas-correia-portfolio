const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

// Show the current time
const time = document.createElement("p");
time.textContent = "Current time: " + new Date().toLocaleTimeString();
document.body.appendChild(time);

// Create a button
const button = document.createElement("button");
button.textContent = "Change Background";
document.body.appendChild(button);

// When button is clicked, change background color
button.addEventListener("click", function () {
  document.body.style.backgroundColor = "#0f172a";
});