function push() {
  let name = prompt("What's your name?");
  let count = prompt("How many ginger word can you spot?");
  let h1 = document.querySelector("h1");

  if (count === "4") {
    h1.innerHTML = "You got the eye of the tiger " + name;
  } else {
    h1.innerHTML = "Are you sure " + name;
  }
}

let pushButton = document.querySelector("button");
pushButton.addEventListener("click", push);
