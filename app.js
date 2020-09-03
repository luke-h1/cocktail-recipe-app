const query = document.getElementById('query');
const form = document.getElementById('form');
const drinksEl = document.getElementById('drink-recipe');
const resultHeading = document.getElementById('result-heading');
const errorHeading = document.getElementById('error-heading');
const randomDrinkBtn = document.getElementById('randomDrink');
const singleDrinkEl = document.getElementById('single-drink');

// Error handler
function errorHandler(message) {
  errorHeading.innerHTML = message;
  window.setTimeout(() => {
    errorHeading.innerHTML = '';
  }, 2000);
}

// Result header
function resultsHeader(message) {
  resultHeading.innerHTML = message;
  window.setTimeout(() => {
    resultHeading.innerHTML = '';
  }, 2000);
}

// search drinks and fetch from API
async function getDrinks(e) {
  e.preventDefault();
  const searchTerm = query.value;
  const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  if (searchTerm.trim()) {
    await fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resultsHeader(
          `<h2 class="search-results">Results for - ${searchTerm}...</h2>`
        );
        if (data.drinks === null) {
          errorHeading.innerHTML = `No search results for - ${searchTerm}`;
        } else if (data.drinks !== null) {
          singleDrinkEl.innerHTML = data.drinks
            .map(
              (drink) => ` 
              <div class="card"> 
                      <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" class="img-drink" /> 
                      <div class="drink-info-data" data-drinkID="${drink.idDrink}> 
                        <span class="card-title">${drink.strDrink}</span> 
                        <div class="btn-container">
                        <button class="btn" onClick="getDrinkById()" data-drinkid> get data</button> 
                        </div> 
                        </div>                      
                        </div> 

            `
            )
            .join('');
        }
      });
  } else {
    errorHandler('<h2>Please enter a correct value 🤷‍♂️</h2>');
  }
}

function addDrinkToDOM(drink) {
  const ingredients = [];
  for (let i = 0; i < 20; i++) {
    if (drink[`strIngredients${i}`]) {
      ingredients.push(
        `${drink[`strIngredients${i}`]} - ${drink[`strMeasures${i}`]}`
      );
    } else {
      break;
    }
  }
  drinksEl.innerHTML = `
    <div class="single-drink"> 
      <h1>${drink.strDrink}</h1> 
        <img src="${drink.strDrink}"</h1>
          <div class="recipe">
            <ul>${ingredients
              .map((ingredient) => `<li>${ingredient}</li>`)
              .join('')}</ul> 
          </div>  
          </div> 
  `;
}

function getDrinkById(drinkID) {
  const ID_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
  fetch(ID_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const drink = data.drinks[0];
      addDrinkToDOM(drink);
    });
}

// event listeners

form.addEventListener('submit', getDrinks);
drinksEl.addEventListener('click', (e) => { 
  const drinkInfo = e.composedPath.find((item) => { 
    if(item.classList){
      return item.classList.contains('card-title'); 
    }else { 
      return false; 
    }
  }); 
  if(drinkInfo){
    const drinkId = drinkInfo.getAttrivbute('data-drinkid'); 
    getDrinkById(drinkId);
  }
})