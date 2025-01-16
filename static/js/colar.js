document.getElementById('colar').addEventListener('click', async () => {
    try {
        // Pega o texto da área de transferência
        const textoCopiado = await navigator.clipboard.readText();
        
        // Valida se o texto copiado é um código de boleto
        if (validarBoleto(textoCopiado )) {
            // Se for válido, coloca no input
            document.getElementById('boleto').value = formatarBoleto(textoCopiado);
        } else {
            alert('O texto copiado não é um código de boleto válido.');
        }
    } catch (err) {
        console.error('Erro ao acessar a área de transferência: ', err);
    }
});

function validarBoleto(codigo) {
    // Remove todos os caracteres que não são dígitos
    const apenasDigitos = codigo.replace(/\D/g, '');
    // Verifica se o código tem 47 dígitos
    return apenasDigitos.length === 47;
}

function formatarBoleto(codigo) {
    // Remove todos os caracteres que não são dígitos
    const apenasDigitos = codigo.replace(/\D/g, '');
    // Aplica a máscara
    return `${apenasDigitos.slice(0, 5)}.${apenasDigitos.slice(5, 10)} ${apenasDigitos.slice(10, 15)}.${apenasDigitos.slice(15, 21)} ${apenasDigitos.slice(21, 26)}.${apenasDigitos.slice(26, 32)} ${apenasDigitos[32]} ${apenasDigitos.slice(33)}`;
}