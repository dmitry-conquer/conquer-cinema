const API_KEY = "9052159beb633e86eed55a92c70e56a0";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMoviesData = async (path, id = "", endpoint = "", page = 1, query = "", genre = "", sort = "") => {
  const url = new URL(`${BASE_URL}/${path}`);
  const params = new URLSearchParams({
    language: "uk",
    api_key: API_KEY,
  });
  if (page) params.set("page", page);
  if (query) params.set("query", query);
  if (genre) params.set("with_genres", genre);
  if (sort) params.set("sort_by", sort);
  url.search = params.toString();

  if (id !== null) url.pathname += `/${id}`;
  if (endpoint !== null) url.pathname += `/${endpoint}`;

  const response = await fetch(url);
  return await response.json();
};
