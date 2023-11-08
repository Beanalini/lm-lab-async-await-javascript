import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);
