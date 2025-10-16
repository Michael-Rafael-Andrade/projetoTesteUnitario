// Arquivos de testes

const converterTexto = require('./string-utils');

// O 'describe' agrupa todos os testes para uma unidade (função) específica
describe('Teste Unitário: função converterTexto', () => {

    // Cenário 1: String Normal
    test('1. Deve inverter uma palavra normal ("mundo") corretamente', () => {
        // Arrange (Preparar): Define a entrada
        const entrada = "mundo";

        // Act (Agir): Executa a função
        const resultado = converterTexto(entrada);

        // Assert (Avaliar): Verifica se o resultado é o esperado
        expect(resultado).toBe("odnum");
    });

    // Cenário 2: String Vazia (Teste de Borda)
    test('2. Deve retornar uma string vazia quando a entrada for vazia', () => {
        // O caso de borda testa os limites da função
        const resultado = converterTexto("");
        expect(resultado).toBe("");
    });

    // Cenário 3: Símbolos e Números
    test('3. Deve inverter strings com números e símbolos ("Michael@DEV")', () => {
        const entrada = "Michael@DEV";
        const resultadoEsperado = "VED@leahciM";

        const resultado = converterTexto(entrada);
        expect(resultado).toBe(resultadoEsperado);
    });

});