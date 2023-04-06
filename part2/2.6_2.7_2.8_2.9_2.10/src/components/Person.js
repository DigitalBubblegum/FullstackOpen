const Person = ({personsToShow}) => {
  console.log(personsToShow.map((person)=>person.name))
  return(<div>
          <h2>Numbers</h2>
          <ul>
            {personsToShow.map((person)=><li key={person.id}>{person.name} - {person.phone}</li>)}
          </ul>
        </div>

  )
}

export default Person