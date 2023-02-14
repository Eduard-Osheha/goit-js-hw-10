import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '500px',
  position: 'center-top',
  closeButton: false,
  });
  
async function fetchCountries(searchedCountry) {
    return fetch(
    `https://restcountries.com/v2/name/${searchedCountry}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (response.status === 404 || !response.ok) {
        throw new Error(
          Notify.failure('Oops, there is no country with that name')          
        );
     
      } else {
          return response.json();
      }
    })
    .catch(error => console.log(error));
}

export default fetchCountries;
