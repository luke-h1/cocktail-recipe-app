const query = document.getElementById('query'); 
const submit = document.getElementById('submit');  
const drinksEl = document.getElementById('drinks'); 
const resultHeading = document.getElementById('result-heading'); 
const errorHeading = document.getElementById('error-heading'); 




// search drinks and fetch from API 

function getDrinks(e){
  e.preventDefault(); 
  const searchTerm = query.value; 
  const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`; 
  fetch(BASE_URL)
    .then((res) => res.json()) 
    .then((data) => { 
      console.log(data);
    })  

}



// EVENT LISTENERS 
submit.addEventListener('click', getDrinks); 