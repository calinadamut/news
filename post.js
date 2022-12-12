const apiUrl = 'https://jsonplaceholder.typicode.com'

async function fetchPosts()
{
  try
  {
      const response = await fetch(`${apiUrl}/posts`);
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
      if(!posts){
        postContainerElement.innerHTML = 'No posts fetched.';
        return;
      }

      for(const post of posts){
        postContainerElement.appendChild(postElement(post));
      }
    }
  )
  .catch ((error) => {
      console.log(error);
    });
}

function postElement(post){
  const anchorElement = document.createElement ('a');
  anchorElement.setAttribute('href', `${apiUrl}/posts/${post.id}`);
  anchorElement.setAttribute('target', '_blank');
  anchorElement.innerText = capitalizeFirstLetter(post.title);

  const postTitleElement = document.createElement('h3');
  postTitleElement.appendChild(anchorElement);

  return postTitleElement

}

function capitalizeFirstLetter(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}