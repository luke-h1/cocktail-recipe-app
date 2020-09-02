const query = document.getElementById('query');
const submit = document.getElementById('submit');
const drinksEl = document.getElementById('drinks');
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
                        <span class="card-title" data-drinkID="${drink.idDrink}">${drink.strDrink}</span> 
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

function addDrinksToPage(drink) {
  const recipe = [];
  for (let i = 1; i <= 20; i++) {
    if (drink[`strIngredient${i}`]) {
      recipe.push(`${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }
  drinksEl.innerHTML = ` 
          <div class="card"> 
            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" class="img-drink-single" />
              <span class="card-title">${drink.strDrink}</span>
                ${drink.strCategory ? `<p>${drink.strCategory}</p>` : ''} 
                ${drink.strAlcoholic ? `<p>${drink.strAlcoholic}</p>` : ''} 
                      <p class="recipe">
                        ${recipe.map((item) => `<li>${item}</li>`).join('')}
                      </p>
                        <p> ${drink.strInstructions}</p> 
                        </div> 

                              `;
}

async function getRandomDrink() {
  errorHandler('');
  resultHeading.innerHTML = '';
  const randomDrinkURL =
    'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  await fetch(randomDrinkURL)
    .then((res) => res.json())
    .then((data) => {
      const drink = data.drinks[0];
      addDrinksToPage(drink);
    });
}

async function getDrinkById(drinkID) {
  const ID_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
  await fetch(ID_URL)
    .then((res) => res.json())
    .then((data) => {
      const drink = data.drinks[0];
      errorHandler('');
      addDrinksToPage(drink);
    });
}

// EVENT LISTENERS
submit.addEventListener('submit', getDrinks);
randomDrinkBtn.addEventListener('click', getRandomDrink);
drinksEl.addEventListener('click', (e) => {
  const drinkInfo = e.path.find((item) => {
    if (item.classList) {
      errorHandler('');
      return item.classList.contains('card-title');
    }
    return false;
  });
  if (drinkInfo) {
    errorHandler('');
    const drinkID = drinkInfo.getAttribute('data-drinkID');
    getDrinkById(drinkID);
  }
});
