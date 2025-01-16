function mascaraBoleto(input) {
  // Remove todos os caracteres que não são dígitos
  let valor = input.value.replace(/\D/g, '');

  // Define a máscara
  let formato = '00000.00000 00000.000000 00000.000000 0 00000000000000';
  let resultado = '';
  let j = 0;

  for (let i = 0; i < formato.length; i++) {
      if (formato[i] === '0') {
          if (j < valor.length) {
              resultado += valor[j];
              j++;
          } else {
              break;
          }
      } else {
          resultado += formato[i];
      }
  }

  input.value = resultado;
}