import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
    return axios.get(baseUrl)
    .then(response => response.data)
}

const create = newObject => {
    return axios.post(baseUrl,newObject)
    .then(response => response.data)
}
const remove = (id) => {
    console.log(id);
    return axios.delete(`${baseUrl}/${id}`)
}
const modify = (id,changednum) => {
    return axios.put(`${baseUrl}/${id}`,changednum)
}
const communications = {
    getAll,
    create,
    remove,
    modify
}

export default communications