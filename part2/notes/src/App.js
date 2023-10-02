import {useState,useEffect} from 'react'
import Note from './components/Note'
import noteService from './services/notes'
// import LoginForm from './components/LoginForm';
import Notification from "./components/Notification";
import loginService from './services/login'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm';
import NoteForm from './components/NoteForm'
const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  //effects
    useEffect(() => {
    console.log('effect')
    noteService.getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])
  
  console.log('render', notes.length, 'notes')
  //functions
const toggleImportanceOf = id => {
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }
  noteService.update(id,changedNote).then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
  })
  .catch(error => {
    setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
    setNotes(notes.filter(n => n.id !== id))
  })
}
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  const handleUsernameChange = (event) => {
    console.log(event.target.value)
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };


  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target);
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      // id: notes.length + 1,
    }
    noteService.create(noteObject)
          .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
            setNewNote('Add a new note')
          })
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('logging in with',username, password)
    try {
      const user = await loginService.login({
        username,
        password,
      })
      window.localStorage.setItem('loggedNoteAppUser',JSON.stringify(user))
      //setting user token here
      noteService.setToken(user.token)
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  const handleLogOut = () =>{
    window.localStorage.removeItem("loggedNoteAppUser")
    window.location.reload()
  }
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      {user === null ? (
        <Togglable buttonLabel = 'Login'>
          <LoginForm
            handleLogin={handleLogin}
            username={username}
            password={password}
            handleUsernameChange={handleUsernameChange}
            handlePasswordChange={handlePasswordChange}
          />
        </Togglable>
      ) : (
        <div>
          <p>{user.name} logged in</p>
          <button onClick={handleLogOut}>logout</button>
          {/* {noteForm()} */}
          <Togglable buttonLabel="new note">
            <NoteForm
              onSubmit={addNote}
              value={newNote}
              handleChange={handleNoteChange}
            />
          </Togglable>
        </div>
      )}
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App