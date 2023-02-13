import onError from '../index.js';
import { name } from '../index.js';

// export default function fetchCountries(name) {
//     const URL = `https://restcountries.com/v3.1/name/${name}?fields=name,flags,capital,languages,population`;
//         return fetch(URL)       
//     }

export default function fetchCountries(name) {
 return fetch(`"https://restcountries.com/v3.1/name/${name}"`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const { name, capital, population, flags, languages } = data[0];

      console.log(name.official),
        console.log(flags.svg),
        console.log(capital[0]),
        console.log(population),
        console.log(Object.values(languages).join(', '));
      
    })
    .catch(onError);
}

