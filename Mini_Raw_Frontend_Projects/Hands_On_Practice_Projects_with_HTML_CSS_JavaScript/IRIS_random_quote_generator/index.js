const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://type.fit/api/quotes";

async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    const response = await fetch(apiURL);
    const data = await response.json();
    // Select a random quote from the array of quotes
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    const quoteContent = randomQuote.text;
    const quoteAuthor = randomQuote.author || "Unknown"; // Fallback to "Unknown" if author is null
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    console.log(randomQuote);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again later";
    authorEl.innerText = "An error happened";
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
  }
}

getQuote();

btnEl.addEventListener("click", getQuote);
