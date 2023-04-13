import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  const nonExistant = {
    id:10000,
    content: 'this note is hardcoded',
    important: true
  }
  return request.then(response => response.data.concat(nonExistant))
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const noteService = {
    getAll: getAll,
    create: create,
    update: update
}

export default noteService