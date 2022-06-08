// GLOBAL CONSTANTS
const API_KEY = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H';
const limit = 9;
const rating = "g";

// GLOBAL VARIABLES
let offset = 0;

// DOM
const searchArea = document.getElementById("search-area");
const findGifsButton = document.getElementById("submit-button");
const form = document.getElementById("form");
const gifArea = document.getElementById("gif-area");
const loadButton = document.getElementById("load-more-button");


form.addEventListener("submit", getResults)

loadButton.addEventListener("click", showMore)

/*async function handleFormSubmit(evt) {
    getResults(evt);
}*/

async function getResults(evt) {

    
    console.log("Inside getResults()");
    console.log(evt);
    evt.preventDefault();
    let data = searchArea.value;
    console.log("Data is", data)

    
    let apiUrl = ("https://api.giphy.com/v1/gifs/search?api_key=" + API_KEY + "&q=" + data + "&rating=" + rating + "&limit=" + limit + "&offset=" + offset)
    console.log(apiUrl);

    let apiFetch = await fetch(apiUrl);

    let apiFetchData = await apiFetch.json();

    console.log(apiFetchData)

    loadButton.classList.remove("hidden");

    displayResults(apiFetchData.data);

}

function displayResults(data) {
    data.forEach(gif => {
        gifArea.innerHTML += `
        <img src='${gif.images.original.url}'></img> 
        `
    })

}

function showMore(evt) {
    offset += limit;
    getResults(evt);
}

