import Content from "./components/Content"
const Header = ({courses}) =>{
  return (
    <div><h1>Wed development curriculum</h1></div>
  )
}

const Course = ({courses}) => {
  return (<div>
      <Header courses={courses} />
      <Content courses = {courses} />
    </div>)
}

const App = () => {
  
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        },
        {
          name: 'Rightwares',
          exercises: 10,
          id: 3
        }
      ]
    }
  ]

  return (<Course courses={courses} />)
}

export default App