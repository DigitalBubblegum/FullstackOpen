import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
  console.log(token)
}
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const config = { headers: { Authorization: token } }
  console.log(config)
  const response = await axios.post(baseUrl,newObject,config)
  console.log(response)
  return response.data
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const noteService = {
  getAll: getAll,
  create: create,
  update: update,
  setToken: setToken
}

export default noteService