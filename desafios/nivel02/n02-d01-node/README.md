<img alt="FullStack" src="./banner.png" />

<h2 align="center">Fundamentos do Node.js</h2>

<p align="center">
	<img alt="GitHub language count"  src="https://img.shields.io/github/languages/count/lipex360x/n02-d01-node?color=brightgreen">
	<a href="http://github.com/lipex360x">
		<img alt="Made by Felipe Borges"  src="https://img.shields.io/badge/made%20by-Felipe%20Borges-brightgreen">
</a>
<img alt="Status" src="https://img.shields.io/badge/status-complete-brightgreen" />
<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
	<a href="#rocket-desafio">Desafio</a>&nbsp;&nbsp;|&nbsp;
	<a href="#dart-solução">Solução</a>&nbsp;&nbsp;|&nbsp;
	<a href="#wrench-tecnologias-utilizadas">Tecnologias Utilizadas</a>&nbsp;&nbsp;|&nbsp
	<a href="#memo-licença">Licença</a>
</p>

## :rocket: Desafio
Desenvolver uma API Rest que permita realizar o gerenciamento de transações financeiras


## :dart: Solução
Desenvolvimento de uma aplicação para armazenar transações financeiras de entrada e saída, permitindo o cadastro e a listagem dessas transações.

A aplicação foi construída utilizando os conceitos de Repository e Service
### Rotas da aplicação

- **`POST /transactions`**: A rota deve receber `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saidas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o formato como o seguinte:

```js
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
// * id: string (Universally unique identifier),
// * title: string
// * value: number
// * type: string
```

- **`GET /transactions`**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:

```js
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}

// transactions
// * id: string (Universally unique identifier),
// * title: string
// * value: number
// * type: string

// balance
// * income: number,
// * outcome: number
// * total: number


```
### Específicação dos testes

Para entrega do desafio, os seguintes **Testes** foram atendidos:

- **`should be able to create a new transaction`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.

- **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`


## :wrench: Tecnologias Utilizadas
- **Typescript**
- **Express**
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENCE.md) para mais detalhes.

---

Feito com ♥ por Felipe Borges :wave: [Fale Comigo](https://www.linkedin.com/in/lipex360/)
