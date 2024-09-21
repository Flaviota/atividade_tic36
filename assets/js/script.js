function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    // Calcular IMC
    const imc = peso / (altura * altura);
    const categoria = imc < 18.5 ? 'Baixo peso' : imc < 24.9 ? 'Peso normal' : imc < 29.9 ? 'Sobrepeso' : 'Obesidade';

    // Exibir resultado
    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)} (${categoria})`;
}