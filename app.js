// GLOBAL CONSTANTS
const API_KEY = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H';
const limit = 9;
const rating = "g";

// DOM
const searchArea = document.getElementById("search-area");
const findGifsButton = document.getElementById("submit-button");
const form = document.getElementById("form");

form.addEventListener("submit", getResults)

function getResults(evt) {
    console.log("Inside getResults()")
    console.log(evt)
}