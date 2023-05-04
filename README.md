# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para ser usada no desenvolvimento das API's nos Projetos Front-end.

## Endpoints

Assim como a documentação do JSON-Server-Auth traz (https://www.npmjs.com/package/json-server-auth), existem 3 endpoints que podem ser utilizados para cadastro e 2 endpoints que podem ser usados para login.

### LINK PARA API https://soundspaceapi.onrender.com

### Cadastro

POST /register <br/>

Devera passar o body com

```
{
  "email": "test@gmail.com",
  "password": "exemplo",
  "name": "test",
  "avatar": "link"
}
```

Caso o email ja exita ira retorna 400 <br/>

```
  {
    "Email already exists"
  }

```

Caso seja sucesso ira retorna 200<br/>

```
  {
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMkBnbWFpbC5jb20iLCJpYXQiOjE2ODI2MTExNTIsImV4cCI6MTY4MjYxNDc1Miwic3ViIjoiNSJ9.rvgosEMlcoRzJvHBYbv_rCHn18UZuW2vot3E-k14-4k",
	"user": {
		"email": "test12@gmail.com",
		"name": "test",
		"avatar": "link",
		"id": 5
	}
}

```

### Login

POST /login <br/>
Devera passar o body com

```
{
"email": "test@gmail.com",
"password": "exemplo"
}
```

Caso o email ja exita ira retorna 400 <br/>

```
  {
    "Cannot find user"
  }
 ||
 {
    "Incorrect password"
 }
```

Caso seja sucesso ira retorna 200<br/>

```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY4MjYxMjY2NiwiZXhwIjoxNjgyNjE2MjY2LCJzdWIiOiI0In0.qE9404arw9GWtTlVB9sQGrax86fVLs8vE9G7Yt-Bx5k",
	"user": {
		"email": "testtest@gmail.com",
		"name": "test3",
		"playlist": "link",
		"id": 4
	}
}

```

### Posts

GET /posts <br />
Devera passar o token, essa rota necessita de um token.

POST /posts <br />
Devera passar o token, e o body com

```
{
  "description": "test1",
  "link": "test1",
  "type": "Spotify",
  "like": [],
  "user": {},
  "userId": 1
}
```

PATCH /posts:id <br/>
Devera passar o token, e o body com o campo q queira editar

```
{
  "description ": "test1",
  "link": "test1",
  "type": "Youtube",
  "like": [
    {
      "userID": 1
    }
  ],
  "user": {
    "name": "kenzinho",
    "avatar": "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg"
		},
  "userId": 1
}
```

DELETE /posts/:id <br/>
Devera passar o token, e passar o id na url

<br/>

### Comentarios

GET /comments <br />
Devera passar o token.

POST /comments <br />
Devera passar o token, e o body com

```
{
  "text": "test3",
  "userId": 3,
  "postId": 2
}
```

PATCH /comments/:id <br />
Devera passar o token, e o body com

```
{
  "text": "test3",
}
```

DELETE /comments/:id <br />
Devera passar o token.
