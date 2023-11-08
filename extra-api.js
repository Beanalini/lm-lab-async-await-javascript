import fetch from "node-fetch";

const url = "https://api.chucknorris.io/jokes/random";

const fetchChuckJokes = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const result = await response.json();
    console.log(result.value);
  } catch (error) {
    console.log(error);
  }
};

fetchChuckJokes(url);
