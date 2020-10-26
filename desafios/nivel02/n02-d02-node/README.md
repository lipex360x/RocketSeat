<img alt="FullStack" src="./banner.png" />

<h2 align="center">Banco de Dados e Upload de Arquivos no NodeJs</h2>

<p align="center">
	<img alt="GitHub language count"  src="https://img.shields.io/github/languages/count/lipex360x/n02-d02-node?color=brightgreen">
	<a href="http://github.com/lipex360x">
		<img alt="Made by Felipe Borges"  src="https://img.shields.io/badge/made%20by-Felipe%20Borges-brightgreen">
</a>
<img alt="Status" src="https://img.shields.io/badge/status-complete-brightgreen" />
<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
	<a href="#rocket-desafio">Desafio</a>&nbsp;&nbsp;|&nbsp;
	<a href="#dart-solução">Solução</a>&nbsp;&nbsp;|&nbsp;
	<a href="#wrench-tecnologias-aplicadas">Tecnologias Aplicadas</a>&nbsp;&nbsp;|&nbsp
	<a href="#memo-licença">Licença</a>
</p>

## :rocket: Desafio
Desenvolver uma API Rest que permita realizar o gerenciamento de transações financeiras com a função de importação de dados de arquivos CSV


## :dart: Solução
Desenvolvimento de uma aplicação para armazenar transações financeiras de entrada e saída, permitindo o cadastro e a listagem dessas transações vindas de um banco de dados relacional.

A construção das tabelas do banco de dados bem como o relacionamento entre elas foi feita utilizando migrations.

A função de importação de arquivos trata o nome, retirando caracteres especiais e normalizando antes de realizar a gravação no banco de dados.

A aplicação foi construída utilizando os conceitos de Repository e Service

### Rotas da aplicação

- **`POST /transactions`**: A rota deve receber `title`, `value`, `type`, e `category` dentro do corpo da requisição, sendo o `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro do seu banco de dados, possuindo os campos `id`, `title`, `value`, `type`, `category_id`, `created_at`, `updated_at`.


```js
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income",
  "category": "Alimentação"
}

// * id: string (Universally Unique Identifier),
// * title: string
// * value: number
// * type: string ("income" || "outcome")
// * category: string
```

- **`GET /transactions`**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor da soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto o seguinte formato:

```js
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income",
      "category": {
        "id": "uuid",
        "title": "Salary",
        "created_at": "2020-04-20T00:00:49.620Z",
        "updated_at": "2020-04-20T00:00:49.620Z",
      },
      "created_at": "2020-04-20T00:00:49.620Z",
      "updated_at": "2020-04-20T00:00:49.620Z",
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome",
      "category": {
        "id": "uuid",
        "title": "Others",
        "created_at": "2020-04-20T00:00:49.620Z",
        "updated_at": "2020-04-20T00:00:49.620Z",
      },
      "created_at": "2020-04-20T00:00:49.620Z",
      "updated_at": "2020-04-20T00:00:49.620Z",
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
// * category: object
//	-> id: string (Universally unique identifier),
//	-> title: string,
//	-> created_at: date,
//	-> updated_at: date,

// balance
// * income: number,
// * outcome: number
// * total: number
```

- **`DELETE /transactions/:id`**: A rota deve deletar uma transação com o `id` presente nos parâmetros da rota;

* **`POST /transactions/import`**: A rota deve permitir a importação de um arquivo com formato `.csv` contendo as mesmas informações necessárias para criação de uma transação `id`, `title`, `value`, `type`, `category_id`, `created_at`, `updated_at`, onde cada linha do arquivo CSV deve ser um novo registro para o banco de dados, e por fim retorne todas as `transactions` que foram importadas para seu banco de dados.

### Específicação dos testes

Para entrega do desafio, os seguintes  **Testes**  foram atendidos:

- **`should be able to create a new transaction`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.

* **`should create tags when inserting new transactions`**: Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que não existe, essa seja criada e inserida no campo category_id da transação com o `id` que acabou de ser criado.

- **`should not create tags when they already exists`**: Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que já existe, seja atribuído ao campo category_id da transação com o `id` dessa categoria existente, não permitindo a criação de categorias com o mesmo `title`.

* **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um array de objetos contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa (total de income), retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`.

* **`should be able to delete a transaction`**: Para que esse teste passe, você deve permitir que a sua rota de delete exclua uma transação, e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.

- **`should be able to import transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja importado um arquivo CSV. Com o arquivo importado, você deve permitir que seja criado no banco de dados todos os registros e categorias que estavam presentes nesse arquivo, e retornar todas as transactions que foram importadas.


## :wrench: Tecnologias Aplicadas
- **Docker Compose**
- **Banco de Dados Relacional**: Postgres
- **Express**
- **Typescript**
- **TypeORM**
- **Multer**: Importação de Arquivos
- **Tecnologias**
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENCE.md) para mais detalhes.

---

Feito com ♥ por Felipe Borges :wave: [Fale Comigo](https://www.linkedin.com/in/lipex360/)
