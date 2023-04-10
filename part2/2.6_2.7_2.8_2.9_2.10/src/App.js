import { useEffect, useState } from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import axios  from "axios";
const App = () => {
  //states
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  //effects
  const hook = () => {
    console.log('effect');
    axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled');
      setPersons(response.data)
    })
  }
  useEffect(hook,[])
  //functions
  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter))

  const addPerson = (event) =>{
    event.preventDefault()
    if (checkNameExists(newName) === false) {
      console.log(persons.includes(newName));
      console.log('button clicked');
      const numberObject = {
        id: persons.length + 1,
        name: newName,
        phone: newPhone,
      }
      setPersons(persons.concat(numberObject))
      setNewName('')
      setNewPhone('')
    } else {
      alert (`${newName} is already added to phonebook`)
      setNewName('')
      setNewPhone('')
    }
  }

  const checkNameExists = (nameToCheck) => {
    const names = persons.map((person) => person.name)
    return names.includes(nameToCheck)
}

  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) =>{
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }
  const handleFilterChange  =(event) =>{
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Filter newFilter = {newFilter} handleFilterChange = {handleFilterChange} showAll = {showAll} setShowAll = {setShowAll}/>
      <PersonForm addPerson = {addPerson} newName = {newName} handleNameChange = {handleNameChange} newPhone = {newPhone} handlePhoneChange = {handlePhoneChange}/>
      <Person personsToShow = {personsToShow}/>
    </div>
  )
}

export default App