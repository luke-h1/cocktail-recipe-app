const query = document.getElementById('query');
const submit = document.getElementById('submit');
let drinksEl = document.getElementById('drinks');
const resultHeading = document.getElementById('result-heading');
const errorHeading = document.getElementById('error-heading');

// search drinks and fetch from API

function getDrinks(e) {
  e.preventDefault();
  const searchTerm = query.value;
  const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      resultHeading.innerHTML = `<h2 class="search-results">Results for - ${searchTerm}</h2>`;
      if (data.drinks === null) {
        errorHeading.innerHTML = `No Search results for - ${searchTerm}`;
      } else {
        drinksEl.innerHTML = data.drinks
          .map(
            (drink) => `
          <div class="drink"> 
            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" /> 
            <div class="drink-information" data-drinkID="${drink.idDrink}"
              <h3>${drink.strDrink}</h3> 
            </div> 
          </div> 
          `
          )
          .join('');
      }
    });
}

// EVENT LISTENERS
submit.addEventListener('click', getDrinks);
