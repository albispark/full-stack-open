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

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
      <div>
        <Stat name='good' stat={props.good}/>
        <Stat name='neutral' stat={props.neutral}/>
        <Stat name='bad' stat={props.bad}/>
        <Stat name='all' stat={all}/>
        <Stat name='average' stat={(props.good - props.bad) / all}/>
        <Stat name='positive' stat={props.good / all * 100} />
      </div>
    )
}

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App