const Person = ({personsToShow,handleDelete}) => {
  return(<div>
          <h2>Numbers</h2>
          <ol>
            {personsToShow.map((person)=><li key={person.id}>{person.name} - {person.phone} <button onClick = {()=>handleDelete(person.id,person.name)}>delete</button></li>)}
          </ol>
        </div>

  )
}

export default Person