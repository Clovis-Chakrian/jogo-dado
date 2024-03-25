export function Dado({ ativo, toggleAtivo, setJogada, jogada }) {
  function geraNumero() {
    toggleAtivo();
    return (Math.random() * 5 + 1).toFixed(0);
  };

  return (
    <>
      <img className='dado-image' src={`/images/dado${jogada}.png`} alt={`dado de numeração ${jogada}`} />
      <p>última jogada: {jogada}</p>
      <button className='button' disabled={ativo} type='button' onClick={() => setJogada(geraNumero())}>Jogar</button>
    </>
  );
};