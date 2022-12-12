

let apiUrl = 'https://newsapi.org/v2/top-headlines/sources?country=us&language=en'
let apiKey = '&apiKey=c6186e7143cf4e73a254cd62cd0fd71b'
let apiString = apiUrl + apiKey

fetch(apiString)
.then(result => result.json())
.then(result =>
{
  result.sources.map(news =>
  {
    document.getElementById("app").innerHTML = `
    <h1 class="app-title">News by Country (US) & language (en)</h1>
    ${result.sources.map(newsTemplate).join("")}
    `
  });
});

function newsTemplate(news) {
  return `
    <div class="newscard">
    <h4 class="news-description">${news.description} <a href=${news.url} target="_blank">[${news.name}]</a></h4>
    <p>Published at: ${news.name}</p>
    <p>Category: ${news.category}</p>
    <p>Language: ${news.language}</p>
    <p>Country: ${news.country}</p>
    </div>
  `;
}

