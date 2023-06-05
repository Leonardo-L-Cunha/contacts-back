## contacts-back

## Instalação
1. Clone o repositório do Mobius Client para o seu ambiente local.
2. Certifique-se de ter o Node.js instalado em sua máquina.
3. Abra o terminal e navegue até o diretório do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Após a conclusão da instalação, execute o comando `npm run dev` para iniciar a aplicação.

## Rota POST - /clients

Endpoint para adicionar um novo cliente.

### Requisição

- URL: `http://localhost:3000/clients`
- Método: POST
- Content-Type: application/json

Exemplo de corpo da requisição:

```json
{
  "completeName": "Leonardo"
}
