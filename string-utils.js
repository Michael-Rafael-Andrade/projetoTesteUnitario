function converterTexto(texto) {
    // 1. Divide a string em um array de caracteres
    const arrayDeCaracteres = texto.split(''); 

    // 2. Inverte a ordem do array
    const arrayInvertido = arrayDeCaracteres.reverse(); 

    // 3. Junta os caracteres invertidos de volta em uma string
    const resultado = arrayInvertido.join(''); 

    return resultado;
}

module.exports = converterTexto;