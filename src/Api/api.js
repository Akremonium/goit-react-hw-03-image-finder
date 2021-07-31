function apiServise(query, page) {
  const baseURL = "https://pixabay.com/api/";
  const KEY = "21845085-bf7da5e4527dd4de2f5d726ec";

  return fetch(
    `${baseURL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error("No matches found"));
  });
}

const api = { apiServise };

export default api;
