const query = document.getElementById('query');
const submit = document.getElementById('submit');
let drinksEl = document.getElementById('drinks');
const resultHeading = document.getElementById('result-heading');
const errorHeading = document.getElementById('error-heading');

// search drinks and fetch from API

function getDrinks(e) {
  e.preventDefault();
  const searchTerm = query.value;
  const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  if (searchTerm.trim()) {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resultHeading.innerHTML = `<h2 class="search-results">Results for - ${searchTerm}...</h2>`;
        if (data.drinks === null) {
          errorHeading.innerHTML = `No search results for - ${searchTerm}`;
        } else if (data.drinks !== null) {
          drinksEl.innerHTML = data.drinks
            .map(
              (drink) => `
            <div class="drink"> 
              <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" /> 
              <div class="drink-information" data=drinkID="${drink.idDrink}" 
              <h3>${drink.strDrink}</h2> 
              </div> 
              </div> 
            `
            )
            .join(''); // turn arr to str
        } 
      });

        } else { 
          errorHeading.innerHTML = `<h2>Please enter a correct value 🤷‍♂️</h2>`;
          window.setTimeout(() => {
            errorHeading.innerHTML = '';
          }, 2000);
        }
  }

// EVENT LISTENERS
submit.addEventListener('submit', getDrinks);
