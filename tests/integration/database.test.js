const mysql = require('mysql2/promise');
require('dotenv').config();

describe('Teste de Integração - Banco de Dados MySQL', () => {
    let connection;

    // Antes de rodar o teste, tenta abrir a conexão com o banco
    beforeAll(async () => {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || '',
            database: process.env.DB_NAME || 'aula_agente'
        });
    });

    // Fecha a conexão após o término do teste
    afterAll(async () => {
        if (connection) await connection.end();
    });

    test('TI-002 - Deve executar uma consulta de teste e validar a comunicação com o MySQL', async () => {
        // Executa uma query simples que não depende de dados existentes
        const [rows] = await connection.query('SELECT 1 + 1 AS resultado');
        
        // Verifica se o banco respondeu corretamente (1 + 1 = 2)
        expect(rows[0].resultado).toBe(2);
    });
});