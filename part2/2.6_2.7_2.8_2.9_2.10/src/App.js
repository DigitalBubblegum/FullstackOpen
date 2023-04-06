import { useState } from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

const App = () => {
  //states
  const [persons, setPersons] = useState([
    {id: 1, name: 'Arto Hellas', phone: '111111' },
    {id: 2,name: 'Emma Johnson',phone: '222222'},
    {id: 3,name: 'Michael Chen',phone: '333333'},
    {id: 4,name: 'Sara Lee',phone: '444444'},
    {id: 5,name: 'David Kim',phone: '555555'},
    {id: 6,name: 'Sophie Martinez',phone: '666666' },
    {id: 7,name: 'Jackie Wong',phone: '777777' },
    {id: 8,name: 'Rahul Gupta',phone: '888888' },
    {id: 9,name: 'Emily Thompson',phone: '999999' },
    {id: 10,name: 'Nate Johnson',phone: '101010' },
    {id: 11,name: 'Lila Rodriguez',phone: '111111' },
    {id: 12,name: 'Mia Davis',phone: '121212' },
    {id: 13,name: 'Ethan Brown',phone: '131313' },
    {id: 14,name: 'Samantha Patel',phone: '141414' },
    {id: 15,name: 'Maxwell Wilson',phone: '151515' },
    {id: 16,name: 'Ava Garcia',phone: '161616' },
    {id: 17,name: 'Oliver Hernandez',phone: '171717' },
    {id: 18,name: 'Isabella Jones',phone: '181818' },
    {id: 19,name: 'Lucas Martin',phone: '191919' },
    {id: 20,name: 'Avery Taylor',phone: '202020' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  
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