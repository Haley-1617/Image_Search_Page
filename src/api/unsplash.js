import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID V6QdYQaVj_idUgTfGF6hB4ELh8eTplOzIw-5dQqLpT4",
  },
});
