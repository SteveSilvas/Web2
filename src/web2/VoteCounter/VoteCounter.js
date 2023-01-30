import { useState } from "react";

const VoteCounter = () => {
  const [biscoito, setBiscoito] = useState(0);
  const [bolacha, setBolacha] = useState(0);
  const [showResult, setShowResult] = useState(false);

  return (
    <div>
      <section>
        <strong>Biscoito ou bolacha?</strong>
        {renderPanel()}
        {showResult ? renderResultPanel() : ""}
        <nav>
          <button id="biscoito" onClick={(e) => vote(e)}>
            Biscoito
          </button>
          <button onClick={clearPlacar}>Limpar</button>
          <button id="encerrar" onClick={calcularPlacar}>Encerrar</button>
          <button id="bolacha" onClick={(e) => vote(e)}>
            Bolacha
          </button>
        </nav>
      </section>
    </div>
  );

  function vote(e) {
    let type = e.target.id;
    if (type === "bolacha") {
      setBolacha(bolacha + 1);
    } else {
      setBiscoito(biscoito + 1);
    }
  }

  function renderPanel() {
    return (
      <div>
        <span><b>Biscoito: </b>{biscoito}</span>
        <br/>
        <span><b>Bolacha: </b>{bolacha}</span>
      </div>
    );
  }

  function renderResultPanel() {
    const vencedor = verifyVencedor();
    return vencedor == null ? (
      <div>
        <strong>A votação resultou em empate! </strong>
      </div>
    ) : (
      <div>
        <strong>
          Parabéns para quem votou em {vencedor.escolha}
          <br />
          que venceu com {vencedor.votos} votos{" "}
        </strong>
        <br />
        <b>Biscoito:</b> {biscoito}
        <br />
        <b>Bolacha:</b> {bolacha}
      </div>
    );
  }

  function verifyVencedor() {
    let vencedor = { escolha: "", votos: 0 };
    if (biscoito > bolacha) {
      vencedor.escolha = "Biscoito";
      vencedor.votos = biscoito;
    } else if (bolacha > biscoito) {
      vencedor.escolha = "Bolacha";
      vencedor.votos = bolacha;
    } else {
      vencedor = null;
    }
    return vencedor;
  }

  function clearPlacar() {
    setBiscoito(0);
    setBolacha(0);
    setShowResult(false);
    enableButtons();
  }

  function calcularPlacar() {
    disableButtons();
    setShowResult(true);
  }

  function disableButtons(){
    const buttonBiscoito = document.getElementById("biscoito");
    buttonBiscoito.disabled = true;

    const buttonBolacha = document.getElementById("bolacha");
    buttonBolacha.disabled = true;

    const buttonFinish = document.getElementById("encerrar");
    buttonFinish.disabled = true;
  }


  function enableButtons(){
    const buttonBiscoito = document.getElementById("biscoito");
    buttonBiscoito.disabled = false;

    const buttonBolacha = document.getElementById("bolacha");
    buttonBolacha.disabled = false;

    const buttonFinish = document.getElementById("encerrar");
    buttonFinish.disabled = false;
  }

};

export default VoteCounter;
