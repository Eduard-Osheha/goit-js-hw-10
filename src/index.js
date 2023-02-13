import './css/styles.css';
import { debounce } from "debounce"
import fetchCountries from "./js/fetchCountries"

const DEBOUNCE_DELAY = 500;
let searchCountry = '';
const input = document.getElementById("search-box");

input.addEventListener("input", debounce((onInputEnterText), DEBOUNCE_DELAY));



export function onError(err) {
    console.error(err);
}

function onInputEnterText(e){
   const name = e.target.value;
     return name;
}

export {name};
