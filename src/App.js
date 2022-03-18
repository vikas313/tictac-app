

import './App.css';
import { quotes } from './components/quotes';
import Game from './components/Game';
let name1 = prompt('enter your name', 'first player')
let name2 = prompt('enter your name', 'second player')

const num = Math.floor(Math.random()*quotes.length)
const App = () => {
  
  return (
    <>
    <h1 className='quote' >{quotes[num].text}</h1>
    
    <div className="App">
        
      <Game name1={name1} name2={name2} />
    </div>
    </>
  );
}

export default App;