const Content = ({courses}) =>{
  return (
    <div>{courses.map(course => <div> <h2> {course.name}</h2> {course.parts.map(part => <p>{part.name} {part.exercises} </p>)} <b>total of {course.parts.reduce((sum, note) => sum + note.exercises,0)} exercises</b></div>)}</div>  
  )
}

export default Content