import axios from "axios";
const baseUrl = 'https://restcountries.com/v3.1/name/'
const allUrl = 'https://restcountries.com/v3.1/all'
const getAll = () => {
  const request = axios.get(allUrl)
  return request.then(response => response.data)
}


const findCountries = form => {
  console.log(`${baseUrl}`);
  const request = axios.get(`${baseUrl}/${form}`)
  console.log(request);
  return request.then(response =>response.data)
}

const countriesService = {
  getAll: getAll,
  findCountries: findCountries,
}

export default countriesService