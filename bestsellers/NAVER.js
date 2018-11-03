const API_KEY = "73b19491b83909c7e07016f4bb4644f9:2:60667290";
const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";

function fetchBooks(page = 1) {
  const display = 10;
  const start = display * (page-1) + 1;
  return fetch(`https://openapi.naver.com/v1/search/book.json?query=javascript&display=${display}&start=${start}`, {
    headers : {
      'X-Naver-Client-Id': 'vTiJhVKTgkFtmAOe1aRw',
      'X-Naver-Client-Secret': 'KNnOp1CgQd'
    }
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.items;
    })
    .catch(error => {
      console.error(error);
    });
}

fetchBooks(1).then(console.dir)
export default { fetchBooks: fetchBooks };
