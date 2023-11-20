import axios from 'axios'

const getToken = () => {
    return new Promise((resolve) => {
      resolve(`Bearer ${localStorage.getItem("token") || null}`);
    });
  };

let apiUrl; //endpoint to my database

const apiUrls = {
    production:'https://foodwars-backend-4e6318df540d.herokuapp.com/api', //blank for now
    development:'http://localhost:3000/api'
}
//to check, go to console.log window.location.hostname

if (window.location.hostname ==='localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}
// instance of axios that always knows how to use the right url

const api = axios.create({
    baseURL: apiUrl,
})

api.interceptors.request.use(
    async function (config) {
      config.headers["Authorization"] = await getToken();
      return config;
    },
    function (error) {
      console.log("Request error: ", error);
      return Promise.reject(error);
    }
  );
  
export default api;

