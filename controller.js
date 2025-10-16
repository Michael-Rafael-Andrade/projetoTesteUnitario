const converterTexto = require('./string-utils'); 
// O Controller importa a função Pura (Model) que já testamos!

class TextController {

    // 1. GET / (Carrega a página inicial)
    static renderIndex(req, res) {
        // Renderiza a view inicial sem nenhum resultado
        res.render('index', { 
            titulo: 'Inversor de Texto'
        });
    }

    // 2. POST /inverter (Recebe e Processa o formulário)
    static processarTexto(req, res) {
        // O Express coloca os dados do formulário em req.body
        const textoOriginal = req.body.texto;
        
        // O Controller chama a Lógica Pura (Model)
        const resultadoInvertido = converterTexto(textoOriginal);
        
        // Renderiza a View novamente, mas agora com os resultados
        res.render('index', {
            titulo: 'Resultado da Inversão',
            resultado: resultadoInvertido,
            textoOriginal: textoOriginal // Devolve o texto para o formulário
        });
    }
}

module.exports = TextController;