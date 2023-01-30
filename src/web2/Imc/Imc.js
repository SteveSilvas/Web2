import { useState } from "react";
import "./Imc.css";
import Button from "../../components/Button/Button";

function Imc() {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [idade, setIdade] = useState();

    function GetNumbers(text) {
        if (!text) return "";
        return text.replace(/[^0-9.]+/g, "");
    }

    function calculateIMC() {
        if (!validateFields()) return;
        let imc = peso / Math.pow(altura, 2);
        alert(imc);
    }

    function clearCalc() {
        setPeso("");
        setAltura("");
        setIdade("");
    }

    function validateFields() {
        if (peso === "") {
            alert("Preencha o peso.");
            return false;
        } else if (altura === "") {
            alert("Preencha a altura.");
            return false;
        }

        return true;
    }

    function handleChangeWeight(e) {
        let weight = e.target.value;
        setPeso(GetNumbers(weight));
    }

    function handleChangeHeight(e) {
        let height = e.target.value;
        setAltura(GetNumbers(height));
    }

    function handleChangeAge(e) {
        let age = e.target.value;
        setIdade(GetNumbers(age));
    }

    return (
        <section className="Form">
            <div className="Row">
                <strong className="Title">Cálculo de IMC</strong>
            </div>
            <div className="Row">
                <label>Peso:</label>
                <input
                    required
                    value={peso}
                    onChange={(e) => handleChangeWeight(e)}
                    type="text"
                ></input>
            </div>
            <div className="Row">
                <label>Altura:</label>
                <input
                    required
                    value={altura}
                    onChange={(e) => handleChangeHeight(e)}
                    type="text"
                ></input>
            </div>

            <div className="Row">
                <label>Idade:</label>
                <input onChange={(e) => handleChangeAge(e)} type="text"></input>
            </div>

            <div className="Row">
                <Button
                    text="Limpar"
                    className="CancelButton"
                    onClick={clearCalc}
                />
                <Button
                    text="Calcular"
                    className="ConfirmButton"
                    onClick={calculateIMC}
                />
            </div>
        </section>
    );
}

export default Imc;
