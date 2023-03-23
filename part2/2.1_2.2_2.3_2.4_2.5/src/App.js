const Header = (props) =>{
  return (
    <h1>{props.course}</h1>
  )
}
const Content = ({course}) =>{
  return (
    <div>{course.parts.map(note => <p>{note.name} {note.exercises}</p>)}</div>  
  )
}
const Course = ({course}) => {
  console.log(course.parts.map(note => note.exercises));
  console.log(course.parts.map(note => note.name));
  return (<div>
      <Header course={course.name} />
      <Content course = {course} />
      {/* <Total course ={course}/> */}
    </div>)
}
const Total = ({course}) =>{
  console.log('render');
  console.log(course.parts.reduce((sum, number) => sum + number,0));
  console.log('');
  console.log(course.parts.map(note => note.exercises));
  const total = course.parts.reduce((sum, note) => sum + note.exercises,0)
  return (<p>{total}</p>
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
      },
      {
        name: 'Refactoring Modules',
        exercises: 14,
        id: 6
      },
      {
        name: 'Map',
        exercises: 14,
        id: 7
      }
    ]
  }
  return (<Course course={course} />)
}

export default App