## contacts-back

## Instalação
1. Clone o repositório do Mobius Client para o seu ambiente local.
2. Certifique-se de ter o Node.js instalado em sua máquina.
3. Abra o terminal e navegue até o diretório do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Após a conclusão da instalação, execute o comando `npm run dev` para iniciar a aplicação.

# Rotas Clients

Endpoints para Clients.

## Requisição

- URL: `http://localhost:3000/clients`

- Content-Type: application/json
### Método: POST
Exemplo de corpo da requisição:

```json
{
  "completeName": "Leonardo",
  "email": "mail@example",
  "phone": "(DD)877223122",
  "profission": "Develop",(opicional)
  "Avatar":"photo.png",(opicional)
}
```
Exemplo de retorno : 
```json
{
  "id": 1,
  "completeName": "Leonardo",
  "email": "mail@example",
  "phone": "(DD)877223122",
  "profission": "Develop",(opicional)
  "Avatar":"photo.png",(opicional),
  "createdAt": "0000-01-01"
}
```
### Método: GET
- nao precisa de Body
- Exemplo de retorno :
```json
{
  "id": 1,
  "completeName": "Leonardo",
  "email": "mail@example",
  "phone": "(DD)877223122",
  "profission": "Develop",(opicional)
  "Avatar":"photo.png",(opicional),
  "createdAt": "0000-01-01"
}
```

### Método: PACTH 
 - URL:`http://localhost:3000/clients/id`
 - Exemplo do body :
 
```json
{
  "completeName": "Leonardo EDIT",
  "email": "mailEDIT@example",
  "phone": "(DD)877223122",
  "profission": "Develop",(opicional)
  "Avatar":"photo.png",(opicional)
}
```

- Exemplo de retorno :

```json
{
  "id": 1,
   "completeName": "Leonardo EDIT",
  "email": "mailEDIT@example",
  "phone": "(DD)877223122",
  "profission": "Develop",(opicional)
  "Avatar":"photo.png",(opicional)
  "createdAt": "0000-01-01"
}
```
### Método: DELETE
  - URL:`http://localhost:3000/clients/id`
  - nao precisa de Body
  - Exemplo de retorno:

 
```json

```
