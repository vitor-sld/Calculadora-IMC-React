function Calculadora({ valorAltura, valorPeso }) {
    console.log(valorAltura + '  ' + valorPeso);
    const alturaAoQuadrado = valorAltura ** 2
    const imc = valorPeso / alturaAoQuadrado
    const classificacaoIMC = document.getElementById('classificacaoIMC')

    
    if (imc <= 0 || valorAltura <= 0) {
        classificacaoIMC.innerHTML = 'Dados incorretos'
    }
    else if (imc < 18.5 && imc > 0) {
        classificacaoIMC.innerHTML = 'Seu IMC aponta peso abaixo do normal'
    }
    else if (imc >= 18.5 && imc < 25) {
        classificacaoIMC.innerHTML = 'Seu IMC aponta peso normal'
    }
    else if (imc >= 25 && imc < 30) {
        classificacaoIMC.innerHTML = 'Seu IMC aponta excesso de peso'
    }
    else if (imc >= 30 && imc < 35) {
        classificacaoIMC.innerHTML = 'Seu IMC aponta obesidade classe I'
    }
    else if (imc >= 35 && imc < 40) {
        classificacaoIMC.innerHTML = 'Seu IMC aponta obesidade classe II'
    }
    else {
        classificacaoIMC.innerHTML = 'Seu IMC aponta obesidade classe III'
    }

    return (
        <div>
            {valorAltura > 0 && valorPeso > 0 && (
                <p>{imc.toFixed(2)}</p>

            )}
            <span id="classificacaoIMC"></span>

        </div >
    )
}
export default Calculadora