import { useState } from 'react'

const Person = ({persons}) => {
  console.log(persons.map((person)=>person.name))
  return(<ul>{persons.map((person)=><li key={person.id}>{person.name} - {person.phone}</li>)}
  </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', phone: '111111' }, 
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  //functions

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
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange = {handleNameChange}/>
        </div>
        <div>
          number: <input value = {newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Person persons = {persons}/>
    </div>
  )
}

export default App