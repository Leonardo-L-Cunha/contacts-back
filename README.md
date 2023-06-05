###contacts-back

## Instalação
1. Clone o repositório do Mobius Client para o seu ambiente local.
2. Certifique-se de ter o Node.js instalado em sua máquina.
3. Abra o terminal e navegue até o diretório do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Após a conclusão da instalação, execute o comando `npm run dev` para iniciar a aplicação.


# Rotas Users

Endpoint para criação do usuario

## Requisição
 -URL: `http://localhost:3000/register`
 
 
 - Content-Type: application/json
### Método: POST
Exemplo de corpo da requisição:

```json
{
  "email": "mail@example.com",
  "password": 1234
}
```
Exemplo de retorno : 
```json
{
  "id": 1,
  "email": "mail@example.com"
}
```

# Endpoint para fazer login do usuario
 
## Requisição
-URL: `http://localhost:3000/auth`

 - Content-Type: application/json
### Método: POST
Exemplo de corpo da requisição:

```json
{
  "email": "mail@example.com",
  "password": 1234
}
```
Exemplo de retorno : 
```json
{
 "token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

# Rotas Clients

Endpoints para Clients.

## Requisição

- URL: `http://localhost:3000/clients`

- Content-Type: application/json
- Bearer Token(precisa de autenticação)
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
- Bearer Token(precisa de autenticação)
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
 - se o ID nao existir retornarar um status 204 e uma mensagem not found
 - Bearer Token(precisa de autenticação)
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
  - Bearer Token(precisa de autenticação)
  - nao precisa de Body
  - Exemplo de retorno:

 
```json

```

# Rotas Contacts

Endpoints para Contact.

## Requisição

- URL: `http://localhost:3000/contacts/id/clients`

- Content-Type: application/json
- Bearer Token(precisa de autenticação)
### Método: POST
Exemplo de corpo da requisição:

```json
{
  "completeName": "Leonardo",
  "email": "mail@example",
  "phone": "(DD)877223122",
}
```
Exemplo de retorno : 
```json
{
  "id": 1,
  "completeName": "Leonardo",
  "email": "mail@example",
  "phone": "(DD)877223122",
  "createdAt": "0000-01-01"
}
```
### Método: GET
- URL:`http://localhost:3000/contacts/id/clients`
- Bearer Token(precisa de autenticação)
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
  "createdAt": "0000-01-01",
  "contacts": [
        {
      "id": 1,
      "completeName": "Leonardo",
      "email": "mail@example",
      "phone": "(DD)877223122",
      "createdAt": "0000-01-01"
    }
  ]
}

```

### Método: PACTH 
 - URL:`http://localhost:3000/contacts/id`
 - Bearer Token(precisa de autenticação)
 - se o ID nao existir retornarar um status 204 e uma mensagem not found
 - Exemplo do body :
 
```json
{
  "completeName": "Leonardo EDIT",
  "email": "mailEDIT@example",
  "phone": "(DD)877223122",
}
```

- Exemplo de retorno :

```json
{
  "id": 1,
   "completeName": "Leonardo EDIT",
  "email": "mailEDIT@example",
  "phone": "(DD)877223122",
  "createdAt": "0000-01-01"
}
```
### Método: DELETE
  - URL:`http://localhost:3000/contacts/id`
  - nao precisa de Body
  - Exemplo de retorno:

 
```json

```
