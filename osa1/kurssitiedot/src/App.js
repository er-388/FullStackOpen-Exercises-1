const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>

  )
}

const Content = (props) => {
  
  return (
    
    <>
      <p>
        <Part1 parts={props.parts}/>
      </p>
      <p>
        <Part2 parts={props.parts} />
      </p>
      <p>
        <Part3 parts={props.parts} />
      </p>
    </>
  )
}

const Part1 = (props) => {
  return (
    
    <>
     {props.parts[0].name} {props.parts[0].exercises}
    </>
  )
}


const Part2 = (props) => {
  return (
    <>
      {props.parts[1].name} {props.parts[1].exercises}
    </>
    
  )
}

const Part3 = (props) => {
  return (
    <>
      {props.parts[2].name} {props.parts[2].exercises}
    </>
  )
}

const Total = (props) => {
  let exercisesSum = props.exercises[0].exercises +  props.exercises[1].exercises +props.exercises[2].exercises;
  return (
    <>
      <p>{'Number of exercises ' + exercisesSum }</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total exercises={course.parts}/>
    </div>
  )
}

export default App