import './App.css';
import { useEffect, useState } from 'react';
import { Dado } from './components/Dado';

function App() {
  const [ativo, setAtivo] = useState(true);
  const [pontuacaoP1, setPontuacaoP1] = useState(0);
  const [pontuacaoP2, setPontuacaoP2] = useState(0);
  const [jogadaP1, setJogadaP1] = useState(1);
  const [jogadaP2, setJogadaP2] = useState(1);

  useEffect(() => {
    if (ativo) {
      if (jogadaP1 > jogadaP2) {
        setPontuacaoP1(pontuacaoP1+1);
      };

      if (jogadaP2 > jogadaP1) {
        setPontuacaoP2(pontuacaoP2+1);
      }
    }
  }, [jogadaP2]);

  function toggleAtivo() {
    setAtivo(!ativo);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Jogo do Dado</h1>

        <div className="arena">
          <div className="player-container">
            <p>Pontuação Player 1: {pontuacaoP1}</p>
            <Dado ativo={!ativo} toggleAtivo={toggleAtivo} setJogada={setJogadaP1} jogada={jogadaP1} />
          </div>

          <div className="player-container">
            <p>Pontuação Player 2: {pontuacaoP2}</p>
            <Dado ativo={ativo} toggleAtivo={toggleAtivo} setJogada={setJogadaP2} jogada={jogadaP2} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
