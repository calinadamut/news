

let apiUrl = 'https://newsapi.org/v2/top-headlines?sources=bloomberg'
let apiKey = '&apiKey=c6186e7143cf4e73a254cd62cd0fd71b'
let apiString = apiUrl + apiKey

fetch(apiString)
.then(result => result.json())
.then(result =>
{
  result.articles.map(news =>
  {
    document.getElementById("app").innerHTML = `
    <h1 class="app-title">${news.source.name} News</h1>
    ${result.articles.map(newsTemplate).join("")}

    <p class="footer">These ${result.totalResults} news were added recently. Check back soon for updates.</p>
    `
  });
});

function newsTemplate(news) {
  return `
    <div class="newscard">
    <img class="news-photo" src="${news.urlToImage}">
    <h4 class="news-escription">${news.description} <a href=${news.url} target="_blank">[link]</a></h4>
    <p>Author: ${news.author}</p>
    <p>Published at: ${news.publishedAt}</p>
    <p>Source: ${news.source.name}</p>
    </div>
  `;
}
