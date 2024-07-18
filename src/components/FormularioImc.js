import { useState, useEffect} from 'react';
import style from "./FormularioImc.module.css"
import Calculadora from "./Calculadora";

function FormularioImc() {

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [imc, setIMC] = useState(0)

    useEffect(() => {
            const calculoIMC = peso / (altura ** 2)
            setIMC(parseFloat(calculoIMC))
    }, [peso,altura]);

    return (
        <div className={style.corpoSite}>
            <div className={style.container}>
                <form>
                    <h2>Calculo de imc</h2>
                    <div className={style.formInputs}>
                        <label htmlFor="inputPeso">Digite seu peso: </label>
                        <input type='number' step={0.01} id="inputPeso" onChange={e => setPeso(parseFloat(e.target.value))} />
                    </div>
                    <div className={style.formInputs}>
                        <label htmlFor="inputAltura">Digite sua altura: </label>
                        <input type='number' step={0.01} id="inputAltura" onChange={e => setAltura(parseFloat(e.target.value))} />
                    </div>
                </form>
                <Calculadora imcPeso={imc} valorAltura={altura} />

            </div>
        </div>
    )
}

export default FormularioImc