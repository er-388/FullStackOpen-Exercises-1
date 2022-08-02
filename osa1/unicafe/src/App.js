import { useState } from 'react'

const Button = ({handleClick, text}) => {
  
  return (
    
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Statistics = ({good, neutral, bad, total, average, positivePercentage}) => {
  if (total > 0) {
    return (
      <div>
        <StatisticsLine name="good" value={good} />
        <StatisticsLine name="neutral" value={neutral} />
        <StatisticsLine name="good" value={bad} />
        <StatisticsLine name="total" value={total} />
        <StatisticsLine name="average" value={average} />
        <StatisticsLine name="positive" value={positivePercentage} />

      </div>
    )
  }
  return (
    <div>use the buttons to give feedback</div>
  )
  
}

const StatisticsLine = ({name, value}) => {
  return (
    <div>
      {name}: {value}
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const countTotal = () => {
    setTotal(total + 1)
  }

  const average = (good - bad)/ total;

  const positivePercentage = (good / total) * 100;
  
  return (
    
    <div>
      <h1>give feedback</h1>
        <div>
          <Button handleClick={() => {
            countTotal();
            setGood(good + 1);
            } 
          }
            text="good" /> 

          <Button handleClick={() => {
            countTotal();
            setNeutral(neutral + 1 );
            }
          }
          text="neutral" />
          
          <Button handleClick={() => {
            countTotal();
            setBad(bad + 1);
            }
          }
          text="bad" />

        </div>
      <h1>statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positivePercentage={positivePercentage} />
    </div>
  )
}

export default App