import { useEffect, useState } from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import communications from "./services/communications";
import Notification from "./components/Notification";
const App = () => {
  //states
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [notify, setNotify] = useState(null)
  //effects
  const fetchPersons = () => {
    communications.getAll().then((response) => {
      console.log(response);
      setPersons(response);
      });
  }
  const hook = () => {
    console.log('effect');
    fetchPersons();
  }
  useEffect(hook,[])
  console.log("render", persons.length, "persons");
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
        name: newName,
        phone: newPhone,
      }
      communications.create(numberObject)
      .then(returnedPerson => {
        console.log('successfully created new entry in DB');
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhone('')
        setNotify('Added '+returnedPerson.name)
        setTimeout(() => {
          setNotify(null);
        }, 5000).catch((error) => {
          console.log(error.message);
          setNotify(
            `Information of '${newName}' has already been removed from server`
          );
          setTimeout(() => {
            setNotify(null);
          }, 5000);
          ////////////////////////
          ////////ebdfudeswvfiuyerwvfiuyev
        });
      })
    } else {
      if (window.confirm (`${newName} is already added to phonebook do you want to modify the number`)) {
        console.log('modifying the number');
        // console.log(persons.map((person)=>person.name).findIndex(element => element === newName));
        const ind = persons.map((person)=>person.name).findIndex(element => element === newName)
        // console.log(persons[ind].name);
        // console.log(persons[ind].id);
        const id = persons[ind].id
        const phonenum = persons.find(person => person.id === id)
        const changednum = {...phonenum,phone : newPhone}
        // console.log(changednum);
        communications.modify(id,changednum)
        .then(response => {
          // setPersons(persons.map(person => person.id !== id ? person : response.data))
          fetchPersons();
        })
        .catch(error => {
          console.log(error.message);
          setNotify(
          `Information of '${newName}' has already been removed from server`
        )
        setTimeout(() => {
          setNotify(null)
        }, 5000)
        })
        //  communications.getAll()
        //   .then(response =>{
        //   console.log(response);
        //   setPersons(response)
        //   })
      }
      else{
        console.log('not confirm');
      }
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
        fetchPersons();
      // communications.getAll()
      //   .then(response => {
      //   console.log(response);
      //   setPersons(response)
      //   })
      })
      // communications.getAll()
    }
    else{
      console.log('denied');
    }

  }
  return (
    <div>
      <Filter newFilter = {newFilter} handleFilterChange = {handleFilterChange} showAll = {showAll} setShowAll = {setShowAll}/>
      <PersonForm addPerson = {addPerson} newName = {newName} handleNameChange = {handleNameChange} newPhone = {newPhone} handlePhoneChange = {handlePhoneChange}/>
      <Notification message={notify}/>
      <Person personsToShow = {personsToShow} handleDelete = {handleDelete}/>
    </div>
  )
}

export default App