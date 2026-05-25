const validarMensagem = require('../../utils/validarMensagem');

test('Deve retornar true para mensagem válida', () => {
    expect(validarMensagem("Olá IA")).toBe(true);
});

test('Deve retornar false para mensagem vazia', () => {
    expect(validarMensagem("")).toBe(false);
});

test('Deve retornar false para espaços vazios', () => {
    expect(validarMensagem("   ")).toBe(false);
});