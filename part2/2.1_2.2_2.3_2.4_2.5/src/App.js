const Header = (props) =>{
  return (
    <h1>{props.course}</h1>
  )
}
const Content = ({course}) =>{
  return (
    <div>{course.parts.map(note => <p key={note.id}>{note.name} {note.exercises}</p>)}</div>  
  )
}
const Course = ({course}) => {
  return (<div>
      <Header course={course.name} />
      <Content course = {course} />
      <Total course ={course}/>
    </div>)
}
const Total = ({course}) =>{
  const total = course.parts.reduce((sum, note) => sum + note.exercises,0)
  console.log(total);
  return (<b>total of {total} exercises</b>
  )
}

const App = () => {
  
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Rendering a collection',
        exercises: 14,
        id: 4
      },
      {
        name: 'JavaScript Arrays',
        exercises: 14,
        id: 5
      }
    ]
  }
  return (<Course course={course} />)
}

export default App