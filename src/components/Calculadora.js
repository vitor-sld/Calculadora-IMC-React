import { useEffect, useState } from "react"

function Calculadora({ imcPeso, valorAltura }) {

    const [classificacao, setClassificacao] = useState('')
    
    useEffect(() => {
        if(valorAltura >= 0) {
            if (imcPeso < 18.5 && imcPeso > 0) {
                setClassificacao('Seu IMC aponta peso abaixo do normal')
            }
            else if (imcPeso >= 18.5 && imcPeso < 25) {
                setClassificacao('Seu IMC aponta peso normal')
            }
            else if (imcPeso >= 25 && imcPeso < 30) {
                setClassificacao('Seu IMC aponta excesso de peso')
            }
            else if (imcPeso >= 30 && imcPeso < 35) {
                setClassificacao('Seu IMC aponta obesidade classe I')
            }
            else if (imcPeso >= 35 && imcPeso < 40) {
                setClassificacao('Seu IMC aponta obesidade classe II')
            }
            else if (imcPeso >= 40) {
                setClassificacao('Seu IMC aponta obesidade classe III')
            } else {
            setClassificacao('Digite seu IMC');
        }
        }else{
            setClassificacao('Digite seu IMC corretamente');
        }

    }, [imcPeso,valorAltura])


    return (
        <div>
            <p>{imcPeso > 0 && valorAltura > 0 && `Seu IMC é de: ${imcPeso.toFixed(2)}`}</p>

            <span>{classificacao}</span>

        </div >
    ) 
}
export default Calculadora