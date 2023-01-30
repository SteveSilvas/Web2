import { useState } from "react";
import Button from "../../components/Button/Button";
import "./VoteCounter.css";

const VoteCounter = () => {
    const [biscoito, setBiscoito] = useState(0);
    const [bolacha, setBolacha] = useState(0);
    const [showResult, setShowResult] = useState(false);

    return (
        <section className="VoteCounter">
            <strong>Biscoito ou bolacha?</strong>
            {renderPanel()}
            {showResult ? renderResultPanel() : ""}

            <nav className="VoteCounterNav">
                <Button
                    id="biscoito"
                    onClick={(e) => vote(e)}
                    text="Biscoito"
                />
                <Button
                    className="CancelButton"
                    onClick={clearPlacar}
                    text="Limpar"
                />
                <Button
                    className="ConfirmButton"
                    id="encerrar"
                    onClick={calcularPlacar}
                    text="Encerrar"
                />
                <Button id="bolacha" onClick={(e) => vote(e)} text="Bolacha" />
            </nav>
        </section>
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
            <div className="VoteCounterPlacar">
                <h3>Placar</h3>
                <div className="VotesPanelRow">
                    <span className="VotesPainel">
                        <b>Biscoito: </b>
                        {biscoito}
                    </span>
                    <span className="VotesPainel">
                        <b>Bolacha: </b>
                        {bolacha}
                    </span>
                </div>
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

    function disableButtons() {
        const buttonBiscoito = document.getElementById("biscoito");
        buttonBiscoito.disabled = true;

        const buttonBolacha = document.getElementById("bolacha");
        buttonBolacha.disabled = true;

        const buttonFinish = document.getElementById("encerrar");
        buttonFinish.disabled = true;
    }

    function enableButtons() {
        const buttonBiscoito = document.getElementById("biscoito");
        buttonBiscoito.disabled = false;

        const buttonBolacha = document.getElementById("bolacha");
        buttonBolacha.disabled = false;

        const buttonFinish = document.getElementById("encerrar");
        buttonFinish.disabled = false;
    }
};

export default VoteCounter;
