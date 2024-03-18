import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [jogadaP1, setJogadaP1] = useState(1);
  const [jogadaP2, setJogadaP2] = useState(1);
  const [vez, setVez] = useState('P1');


  function geraNumero() {
    setVez(vez === 'P1' ? 'P2' : 'P1')
    return (Math.random() * 5 + 1).toFixed(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Jogo do Dado</h1>

        <div className="arena">
          <div className="player-container">
            <img className='dado-image' src={`/images/dado${jogadaP1}.png`} alt={`dado de numeração ${jogadaP1}`} />
            <p>última jogada: {jogadaP1}</p>
            <button className='button' disabled={vez === 'P2'} type='button' onClick={() => setJogadaP1(geraNumero())}>Jogar (P1)</button>
          </div>

          <div className="player-container">
            <img className='dado-image' src={`/images/dado${jogadaP2}.png`} alt={`dado de numeração ${jogadaP2}`} />
            <p>última jogada: {jogadaP2}</p>
            <button className='button' disabled={vez === 'P1'} type='button' onClick={() => setJogadaP2(geraNumero())}>Jogar (P2)</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
