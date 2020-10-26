<img alt="FullStack" src="./banner.png" />

<h2 align="center">GoFinance Web</h2>

<p align="center">
	<img alt="GitHub language count"  src="https://img.shields.io/github/languages/count/lipex360x/n03-d01-reactjs?color=brightgreen">
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
Consumir a [API de Transações](https://github.com/lipex360x/n02-d02-node) desenvolvida em Node, realizando importação das transações através de um arquivo CSV


## :dart: Solução
Foi desenvolvida uma aplicação em ReactJS para consumir a API Rest onde os dados foram carregados e tratados.

Os valores financeiros bem como as datas foram normalizados para o padrão brasileiro.

A importação do arquivo CSV foi feita através de um componente de drag-n-drop com restrição de formato.

O Balanço Financeiro recebeu destaque em cartões com o resumo dos valores.

### Funcionalidades da aplicação

- **`Listar as transações da sua API`**: Sua página `Dashboard` deve ser capaz de exibir uma listagem através de uma tabela, com o campo `title`, `value`, `type` e `category` de todas as transações que estão cadastradas na sua API.

- **`Exibir o balance da sua API`**: Sua página `Dashboard`, você deve exibir o balance que é retornado do seu backend, contendo o total geral, junto ao total de entradas e saídas.

- **`Importar arquivos CSV`**: Na sua página `Import`, você deve permitir o envio de um arquivo no formato `csv` para o seu backend, que irá fazer a importação das transações para o seu banco de dados.


### Específicação dos testes

Para esse desafio, temos os seguintes testes:

- **`should be able to list the total balance inside the cards`**: Para que esse teste passe, sua aplicação deve permitir que seja exibido na sua Dashboard, cards contendo o total de `income`, `outcome` e o total da subtração de `income - outcome` que são retornados pelo balance do seu backend.

* **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que sejam listados dentro de uma tabela, toda as transações que são retornadas do seu backend.


- **`should be able to navigate to the import page`**: Para que esse teste passe, você deve permitir a troca de página através do Header, pelo botão que contém o nome `Importar`.


- **`should be able to upload a file`**: Para que esse teste passe, você deve permitir que um arquivo seja enviado através do componente de drag-n-drop na página de `import`, e que seja possível exibir o nome do arquivo enviado para o input.

## :wrench: Tecnologias Aplicadas
- **React**
- **Typescript**
- **Styled Components**
- **React Router DOM**
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENCE.md) para mais detalhes.

---

Feito com ♥ por Felipe Borges :wave: [Fale Comigo](https://www.linkedin.com/in/lipex360/)
