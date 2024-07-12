import { useState } from 'react'; 
import style from "./FormularioImc.module.css"
import Calculadora from "./Calculadora";

function FormularioImc() {

    const [altura, setAltura] = useState()
    const [peso, setPeso] = useState()

    return (
        <div className={style.corpoSite}>
            <div className={style.container}>
                <form>
                    <h2>Calculo de imc</h2>
                    <div className={style.formInputs}>
                        <label htmlFor="inputPeso">Digite seu peso: </label>
                        <input type='number' step={0.01} id="inputPeso" onChange={e => setPeso(e.target.value)}/>
                    </div>
                    <div className={style.formInputs}>
                        <label htmlFor="inputAltura">Digite sua altura: </label>
                        <input type='number' step={0.01} id="inputAltura" onChange={e => setAltura(e.target.value)}/>
                    </div>
                </form>
                <Calculadora valorAltura={altura} valorPeso={peso} />

            </div>
        </div>
    )
}

export default FormularioImc