const App = (props) => {
  const { notes } = props
  const notes_imp = notes.map(note => note.important)
  console.log(notes_imp)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <li key = {note.id}>{note.content}</li>)}
      </ul>
    </div>
  )
}

export default App