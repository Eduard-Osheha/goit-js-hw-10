

export function createMarkupOneCountryCard(country) {
    return `
    <div class="country-card">
    <h2 class="country-name"> Country: ${name}</h2>
    <h3 class="country-capital">Capital: ${capital}</h3>
      <p class="country-flag"> Flag: <img src=${flags.svg} class="article-img" /></p>    
      <p  class="country-population">Population: ${population}</p>
      <p  class="country-languages">Languages: ${languages}</p>
      </div>
    `;
  }

  export function createMarkupCountryList (){
    
  }