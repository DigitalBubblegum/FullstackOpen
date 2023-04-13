import { useEffect, useState } from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import communications from "./services/communications";
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
    communications.getAll()
    .then(response =>{
      console.log(response);
      setPersons(response)
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
      communications.create(numberObject)
      .then(returnedPerson => {
        console.log('successfully created new entry in DB');
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhone('')
      })
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
  const handleDelete = (id,name) => {
    if (window.confirm('are you sure you want to delete '+name)) {
      console.log('confirm');
      console.log('deleting the number'+id);
      communications.remove(id)
        .then(response =>{
        console.log(response)
      communications.getAll()
        .then(response => {
        console.log(response);
        setPersons(response)
        })
      })
    }
    else{
      console.log('denied');
    }

  }
  return (
    <div>
      <Filter newFilter = {newFilter} handleFilterChange = {handleFilterChange} showAll = {showAll} setShowAll = {setShowAll}/>
      <PersonForm addPerson = {addPerson} newName = {newName} handleNameChange = {handleNameChange} newPhone = {newPhone} handlePhoneChange = {handlePhoneChange}/>
      <Person personsToShow = {personsToShow} handleDelete = {handleDelete}/>
    </div>
  )
}

export default App