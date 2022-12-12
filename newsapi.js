//const apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch'
//const apiKey = '&apiKey=c6186e7143cf4e73a254cd62cd0fd71b'
//const apiString = apiUrl + apiKey

const apiString = 'https://newsapi.org/v2/everything?q=apple&from=2022-11-28&to=2022-11-28&sortBy=popularity&apiKey=c6186e7143cf4e73a254cd62cd0fd71b'

//const apiUrl = 'https://jsonplaceholder.typicode.com'

async function fetchPosts()
{
  try
  {
    const response = await fetch(`${apiString}`);
    if(!response.ok)
    {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    return await response.json();
  }
  catch (error)
  {
    console.log(error);
  }
}

function listsPosts(postContainerElementId)
{
  const postContainerElement = document.getElementById(postContainerElementId);

  if(!postContainerElement)
  {
    return;
  }

  fetchPosts()
    .then 
    (
      (posts) => 
      {
        if(!posts)
        {
          postContainerElement.innerHTML = 'No posts fetched.';
          return;
        }

        for(const post of posts)
        {
          postContainerElement.appendChild(postElement(post));
        }
      }
    )
    .catch ((error) => {
        console.log(error);
      });
}

function postElement(post)
{
  const anchorElement = document.createElement ('a');
  anchorElement.setAttribute('href', `${apiString}`);
  //anchorElement.setAttribute('target', '_blank');
  //anchorElement.innerText = capitalizeFirstLetter(post.title);

  const postTitleElement = document.createElement('h3');
  postTitleElement.appendChild(anchorElement);
  return postTitleElement
}

/*
function capitalizeFirstLetter(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
*/