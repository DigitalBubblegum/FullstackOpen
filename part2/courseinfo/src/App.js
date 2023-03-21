import Note from './components/Note'
const App = ({notes}) => {
  const notes_imp = notes.map(note => note.important)
  const notes_id  = notes.map(note => note.id)
  console.log(notes_imp)
  console.log(notes_id);
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key = {note.id} note={note} />)}
      </ul>
    </div>
  )
}

export default App