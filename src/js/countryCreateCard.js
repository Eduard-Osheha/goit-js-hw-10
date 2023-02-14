 function createMarkupForOneElement({name, capital, population, flags, languages}) {
  const languageList = languages.map(language => language.name);
   return `
    <div class="country-card">
    <h2 class="country-name">
    <img src=${flags.svg} class="article-img" width=35px height = 25px/> ${name}</h2>
    <h3 class="country-capital"> Capital: ${capital}</h3>
     <h3  class="country-population">Population: <span>${population}</span> </h3>
      <h3  class="country-languages">Languages: <span>${Object.values(languageList).join(', ')}</span></h3>
      </div>
    `;
  }

  function createMarkupList ({name, flags}) {
      return ` <p class="country-name">
  <img src=${flags.svg} class="country-flag" width=35px height = 25px/> ${name}</p>
  `}

  export {createMarkupForOneElement, createMarkupList };