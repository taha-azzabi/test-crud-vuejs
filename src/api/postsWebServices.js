const URL_API = 'https://jsonplaceholder.typicode.com';
const getPosts = () => {
    return new Promise((resolve,reject) => {
      fetch(`${URL_API}/posts`)
      .then(response => {
        if(!response.ok) {
          reject(response.json())
        }
         return response.json()
      })
      .then(response => resolve(response))
      .catch(error => reject(error))
    })
}

const removePost = (id) => {
    return new Promise((resolve,reject) => {
      fetch(`${URL_API}/posts/${id}`, {
        method:'DELETE'
      })
      .then(response => {
        if(!response.ok) {
          reject(response.json())
        }
         return response.json()
      })
      .then(response => resolve(response))
      .catch(error => reject(error))
    })
}
export{getPosts, removePost}