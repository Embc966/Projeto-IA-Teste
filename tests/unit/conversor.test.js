// TDD - Passo 2: Implementando o código mínimo necessário no próprio arquivo
const converterDolarParaReal = (valorDolar, taxa) => {
    return valorDolar * taxa;
};

// bloco de teste que agora lê a função acima
describe("Testando Ferramenta de Conversão de Moeda via TDD", () => {
    test("Deve converter 10 dólares para reais considerando a taxa de 5.50", () => {
        // Esperamos que 10 * 5.50 seja igual a 55
        expect(converterDolarParaReal(10, 5.50)).toBe(55);
    });
});