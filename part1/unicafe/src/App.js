import { useState } from 'react'

const Header = (props) => (
    <h1>{props.name}</h1>
)

const Button = ({onClick, name}) => (
  <button onClick={onClick}>
    {name}
  </button>
)

const StatisticLine = (props) => (
    <p>{props.name} {props.value}</p>
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
        <StatisticLine name='good' value={props.good}/>
        <StatisticLine name='neutral' value={props.neutral}/>
        <StatisticLine name='bad' value={props.bad}/>
        <StatisticLine name='all' value={all}/>
        <StatisticLine name='average' value={(props.good - props.bad) / all}/>
        <StatisticLine name='positive' value={props.good / all * 100} />
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