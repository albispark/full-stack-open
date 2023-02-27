const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p>Total of {sum} exercises</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {
      parts.map(part => 
        <Part
          key={part.id}
          part={part} 
        />
      )
    }    
  </>

const Course = ({ course }) => {
  var sum = course.parts.reduce((sum, part) => {
    return sum = sum + part.exercises
  }, 0)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </div>
  )
}

export default Course