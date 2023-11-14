        
async function fetchJoke() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any");
  return response.json();
}

async function displayJoke() {
const joke = await fetchJoke();
const jokeCard = document.getElementById("jokeCard");


const title = document.createElement("h1");
title.innerHTML = joke.category;


jokeCard.innerHTML = "";


jokeCard.appendChild(title);

if (joke.type === "twopart") {

  const setupParagraph = document.createElement("p");
  setupParagraph.innerHTML = joke.setup;

  const deliveryParagraph = document.createElement("p");
  deliveryParagraph.className = "red-text";
  deliveryParagraph.innerHTML = joke.delivery;

  jokeCard.appendChild(setupParagraph);
  jokeCard.appendChild(deliveryParagraph);
} else {
  const jokeParagraph = document.createElement("p");
  jokeParagraph.innerHTML = joke.joke;
  jokeCard.appendChild(jokeParagraph);
}
}


const newJokeButton = document.getElementById("newJokeButton");
newJokeButton.addEventListener("click", displayJoke);

displayJoke();