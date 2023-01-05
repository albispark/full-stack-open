import { useState } from 'react'

const Header = (props) => (
    <h1>{props.name}</h1>
)

const Button = ({onClick, name}) => (
  <button onClick={onClick}>
    {name}
  </button>
)

const Stat = (props) => (
    <p>{props.name} {props.stat}</p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name='give feedback' />
      <Button onClick={() => setGood(good + 1)} name='good' />
      <Button onClick={() => setNeutral(neutral + 1)} name='neutral' />
      <Button onClick={() => setBad(bad + 1)} name='bad' />
      <Header name='statistics' />
      <Stat name='good' stat={good}/>
      <Stat name='neutral' stat={neutral}/>
      <Stat name='bad' stat={bad}/>
    </div>
  )
}

export default App