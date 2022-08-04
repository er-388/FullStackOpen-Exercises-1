import { useState } from 'react'

const copy = [];


const NextAnecdote = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Anecdote = (props) => {
  return(
    <div>
      <h1>read some great anecdotes</h1>
      {props.selection}
    </div>
  )
}

const VoteButton = ({handleClick, pisteet, randomlulu}) => {
  return(
  <div>
    <button onClick={handleClick}>vote</button>
  </div>
  );
}


const SelectedVotes = ({pisteet, randomluku}) => {
  // Jos yhtään ääntä ei ole annettu
    if (pisteet.reduce(
      (prevValue, currValue) =>
      prevValue + currValue, 0) == 0) {
        return (
          <div>
            click the button to vote for the best anecdote!
          </div>
        )
      } else {
        return (
        <div>

          <ShowPoints pisteet={pisteet} randomluku={randomluku} />
        </div>
        )
      }
    }


const ShowPoints = ({pisteet, randomluku}) => {
  return(
    <>
      has {pisteet[randomluku]} votes
    </>
  )
}


const MostVotes = (props) => {
  return (
    <div>
      <br></br>
      <br></br>
      <h1>the most popular anecdote</h1>
      <p>{props.suosituin}</p>
    <p>has {props.suosituimmanAanet} votes</p>

    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ];

  const [selected, setSelected] = useState(anecdotes[0 ]);
  const [pisteet, setPisteet] = useState(new Uint8Array(7));


  return (
    <div>
      {/* // Näyttää valittuna olevan anekdootin */}
      <Anecdote selection={selected} />

      {/* //Seuraava anekdootti -nappi */}
      <NextAnecdote
        handleClick={() => {
          const seuraava = Math.floor(Math.random() * 6);
          setSelected(anecdotes[seuraava]);

          }
        }
        text="next anecdote"
      />

      {/* // Näkyvillä olevan anekdootin pisteet */}
      <SelectedVotes pisteet={pisteet} randomluku={anecdotes.indexOf(selected)} />

      {/* // Äänestysnappi   */}
      <VoteButton handleClick={() => {
          const copy = [... pisteet];
          copy[anecdotes.indexOf(selected)] +=1;
          setPisteet(copy);
          }
        }
        pisteet={pisteet}
        randomluku={anecdotes.indexOf(selected)}
        text="vote"
      />

      {/* // Suosituin anekdootti ja sen pisteet */}
      <MostVotes
      suosituin={anecdotes[pisteet.indexOf(Math.max(...pisteet))]}
      suosituimmanAanet={Math.max(...pisteet)}
      />
    </div>
  )
}


export default App