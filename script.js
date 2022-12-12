const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2016,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];


let apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch'
let apiKey = '&apiKey=c6186e7143cf4e73a254cd62cd0fd71b'
//let apiString = apiUrl + apiKey
let apiString = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c6186e7143cf4e73a254cd62cd0fd71b'

let usersUrl = 'https://reqres.in/api/users'

//fetch(apiString)
fetch(usersUrl)
.then(result => result.json())
.then(result =>
{
result.data.map(user =>
{
  document.getElementById("app").innerHTML = `
  <h1 class="app-title">Users (${result.total} results)</h1>
  <table id="table">
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>email</th>
    </tr>
    <tr>
      <td>${user.first_name}</td>
      <td>${user.last_name}</td>
      <td>${user.email}</td>
    </tr>
  </table>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  </br>
  <p class="footer">These ${result.total} users were added recently. Check back soon for updates.</p>
  `
});
});





/*
function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return "1 year old";
  } else if (calculatedAge == 0) {
    return "Baby";
  } else {
    return `${calculatedAge} years old`;
  }
}

function foods(foods) {
  return `
<h4>Favorite Foods</h4>
<ul class="foods-list">
${foods.map(food => `<li>${food}</li>`).join("")}
</ul>
`;
}

function petTemplate(pet) {
  return `
    <div class="animal">
    <img class="pet-photo" src="${pet.photo}">
    <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
    <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
    ${pet.favFoods ? foods(pet.favFoods) : ""}
    </div>
  `;
}



document.getElementById("app").innerHTML = `
  <h1 class="app-title">Pets (${petsData.length} results)</h1>
  ${petsData.map(petTemplate).join("")}
  <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
`;
*/