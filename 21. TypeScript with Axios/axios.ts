import axios, { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Method - 1 ( Not Suggested ) - Better to Use Method - 2 
const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = response.data;
    console.log("Todo: ", data);
  } catch (error) {
    console.log("Error: ", error);
  }
};

fetchData();

// Method - 2 - Preferred Method 
const dataFetchingFromApi = async () => {
  try {
    const response = await axios.get<Todo>(
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    const data = response.data;
    console.log("Todo: ", data);
  } catch (error) {
    console.log(error);
  }
};

dataFetchingFromApi();