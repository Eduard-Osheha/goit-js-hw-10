import './css/styles.css';
import fetchCountries from "./js/fetchCountries"
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {createMarkupForOneElement, createMarkupList } from './js/countryCreateCard';

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


const DEBOUNCE_DELAY = 1000;
const input = document.getElementById("search-box");
Notify.init({
  width: '500px',
  position: 'center-top',
  closeButton: false,
  });



input.addEventListener("input", debounce(onInputEnterText, DEBOUNCE_DELAY));


function onInputEnterText(e){
  const searchedCountry = e.target.value.trim();
 
  if(!searchedCountry) {
    Notify.failure('Field is empty. Please, enter country for search')
    return;
  }  else {
    
 fetchCountries(searchedCountry)
  .then( countries => {  
    if(countries.length >= 10) {
      Notify.info("Too many matches found. Please enter a more specific name.")
      clearPage()
     } else if(countries.length >= 2 && countries.length < 10 ) {
     const listMurkup = countries.reduce((murkup, country) => createMarkupList(country) + murkup,''
     );
     clearPage()
     updateCountryList(listMurkup)

    } else {  
      const cardMurkup = countries.reduce((murkup, country) => createMarkupForOneElement(country) + murkup,''
      );
      clearPage()
      updateCountryCard(cardMurkup)  
  } 
})
.catch(error => {
  console.log(error);
  clearPage();
})
}}

function updateCountryCard (cardMurkup) {
  clearPage();
  countryInfo.innerHTML = cardMurkup;
}
function updateCountryList (listMurkup) {
  clearPage();
  countryList.innerHTML = listMurkup;
}

 function clearPage (){  
  countryList.innerHTML ="";
  countryInfo.innerHTML = "";
}
