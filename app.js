const query = document.getElementById('query');
const submit = document.getElementById('submit');
const drinksEl = document.getElementById('drinks');
const resultHeading = document.getElementById('result-heading');
const errorHeading = document.getElementById('error-heading');
const randomDrinkBtn = document.getElementById('randomDrink');
const singleDrinkEl = document.getElementById('single-drink');
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
        resultHeading.innerHTML = `<h2 class="search-results">Results for - ${searchTerm}...</h2>`;
        if (data.drinks === null) {
          errorHeading.innerHTML = `No search results for - ${searchTerm}`;
        } else if (data.drinks !== null) {
          drinksEl.innerHTML = data.drinks
            .map(
              (drink) => `
                  <div class="col s1 m4"> 
                    <div class="card"> 
                      <div class="card-image"> 
                      <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" /> 
                        <span class="card-title">${drink.strDrink}</span>  
                      </div>
                        </div>
                        </div> 
            `,
            )
            .join(''); // turn arr to str
        }
      });
  } else {
    errorHeading.innerHTML = '<h2>Please enter a correct value 🤷‍♂️</h2>';
    window.setTimeout(() => {
      errorHeading.innerHTML = '';
    }, 2000);
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
  singleDrinkEl.innerHTML = `
      <div class="col s12 m10"> 
        <div class="card"> 
          <div class="card-image" data-drinkID="data-drinkID"> 
            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
              <span class="card-title span-style">${drink.strDrink}</span> 

            } 
              </div>  
              <div class="single-drink-info"> 
                ${drink.strCategory ? `<p>${drink.strCategory}</p>` : ''} 
                ${drink.strAlcoholic ? `<p>${drink.strAlcoholic}</p>` : ''} 
                  </div>
                      <p>
                        ${recipe.map((item) => `<li>${item}</li>`).join('')}
                      </p>
                        <p> ${drink.strInstructions}</p> 
                          </div>
                            </div>
                              </div>

  `;
}






function getRandomDrink() {
  drinksEl.innerHTML = '';
  resultHeading.innerHTML = '';
  errorHeading.innerHTML = '';
  const randomDrinkURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  fetch(randomDrinkURL)
    .then((res) => res.json())
    .then((data) => {
      const drink = data.drinks[0];
      addDrinksToPage(drink);
    });
}


function getDrinkById(drinkID) { 
  drinksEl.innerHTML = ''; 
  resultHeading.innerHTML = ''; 
  errorHeading.innerHTML = ''; 
  const ID_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}
  `; 
  fetch(ID_URL) 
    .then((res) => res.json())
    .then((data) => { 
      const drink = data.drinks[0]; 
      addDrinksToPage(drink);
    })
}

// EVENT LISTENERS
submit.addEventListener('submit', getDrinks);
randomDrinkBtn.addEventListener('click', getRandomDrink);
drinksEl.addEventListener('click', (e) => { 
  const drinkInfo = e.path.find((item) => { 
    if(item.classList){
      return item.classList.contains('card-image')
    }else { 
      return false; 
    }
  }); 
  if(drinkInfo){
    const drinkID = drinkInfo.getAttribute('data-drinkID'); 
    getDrinkById(drinkID)
  }
});
