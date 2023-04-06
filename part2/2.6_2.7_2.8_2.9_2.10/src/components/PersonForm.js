const PersonForm = ({addPerson, newName, handleNameChange, newPhone, handlePhoneChange}) => {
  return (<div>
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
          </div>)
}

export default PersonForm