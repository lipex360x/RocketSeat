<h1 align="center">Template ReactJS</h1>

### E o que tem aqui dentro?
Este é um Template ReactJS com integração ao **Reactotron**, configurada com **Redux**, **Redux Persist**, **Rotas Privadas** controladas por **Autenticação Persistida** e preparada para receber dados de uma **API REST Node** (Veja [Template API](https://github.com/lipex360x/template_api)).

Tudo isso com todo o ambiente de desenvolvimento devidamente configurado com **linting** do código e Snnipets preparados para otimizar a criação de Páginas, Layouts, Actions, Reducers, Sagas e muito mais.

___
### Tabela de Conteúdo

- [Start do Template (Leitura Obrigatória)](#start-do-template)
- [Arquivos Iniciais](#arquivos-iniciais)
- [WebSocket](#websocket)
- [Rotas Iniciais](#rotas-iniciais)
- [VS Code Snippets](#vscode-snippets)


### Start do Projeto
Sim...
Você precisa ler e executar todos os passos para ter tudo funcionando direito :)
1. Para começar, instale as seguintes aplicações em seu sistema operacional (caso não tenha instalado):
* [Yarn](https://yarnpkg.com/en/docs/install#mac-stable)
* [VS Code](https://code.visualstudio.com/download)
* [Fonte FiraCode](https://github.com/tonsky/FiraCode)
* [Reactotron](https://github.com/infinitered/reactotron/releases)

2. Instale as seguintes extensões No **VS Code**:

```bash
Color Highlight
Dracula Official
EditorConfig
ESLint
Git History
markdownlint
Material Icon Theme
Prettier
Rocketseat React Native
Rocketseat ReactJS
vscode-styled-components
```

3. Após instalado o *VS Code* com as extensões e a fonte *Fira Code*, acesse os Settings do **VS Code** em `settings.json (VS Code Preferences > settings.json)`apague tudo e cole o conteúdo contido no arquivo:
```bash
template_path
├── etc/
│....└── VSCodeSettings.json
```
---
### Arquivos Iniciais
 **@ Configurações @**
* ***~/services/api.js*** > baseURL
Conexão do Axios à uma API Rest
```bash
template_path
├── src/
│....├── services/
│....│....└── api.js
```

* ***~/services/socket.js*** > baseURL
Conexão Websocket à uma API Rest
```bash
template_path
├── src/
│....├── services/
│....│....└── socket.js
```

* ***~/routes/index.js*** > baseURL
Conexão Websocket à uma API Rest
```bash
template_path
├── src/
│....├── services/
│....│....└── socket.js
```

* ***~/pages/. . . /index.js*** > connect( )
Habilitação (caso necessário) da Conexão Websocket à uma API Rest e construção de página
```bash
template_path
├── src/
│....├── pages/
│....│....├── . . ./
│....│....│....└── index.js
```

* ***~/pages/_layouts/. . . /index.js***
Layouts padrão das páginas.
Pode ser alterada no arquivo ***~/routes/Route.js*** > const Layout
```bash
template_path
├── src/
│....├── pages/
│....│....│....├── _layouts
│....│....│....│....│....├── . . ./
│....│....│....│....│....│....└── index.js
```

 **@ React Redux @**
 A Saga do Caminho:
 ``` bash
 dispatch( ) . .  > . . action( )
action( ). . . . > . . saga( )
saga( ). . . . . > . . action( ) . . > . . reducer:{ }
reducer:{ }. . . > . . estado{ }
 ```
* ***~/store/modules/rootReducer.js*** > combineReducers({ })
Combina Reducers da Aplicação
```bash
template_path
├── src/
│....├── store/
│....│....├── modules/
│....│....│....└── rootReducer.js
```

* ***~/store/modules/rootSaga.js*** > rootSaga({ })
Combina Sagas da Aplicação
```bash
template_path
├── src/
│....├── store/
│....│....├── modules/
│....│....│....└── rootSaga.js
```

* ***~/store/persistReducers.js*** > whitelist[  ]
Persiste Reducers da Aplicação
```bash
template_path
├── src/
│....├── store/
│....│....└── persistReducers.js
```
---
### WebSocket

Os *WebSocket Event Listener* podem ser configurados em qualquer módulo do template.

Um *Listener 'backend'* está configurado como exemplo no arquivo socket.js localizado em:
```bash
template_path
├── src/
│....├── services/
│....│....└── socket.js
```

---
### Rotas Iniciais
Depois de passar por todas as configurações, estamos prontos para subir os serviços do Template.

No diretório do Template, via **Terminal** execute os seguintes comandos

```bash
> Iniciar Template
yarn start
```
Uma aba do navegador será aberta no endereço `localhost` do template

O arquivo de Rotas está localizado em:
```bash
template_path
├── src/
│....├── routes/
│....│....└── index.js
```
Para habilitar ***Rotas Privadas*** basta adicionar o parâmetro ***isPrivate*** no componente `<Route />`


- ***/*** - Rota Inicial: Hello World
- ***/login*** - Input de Texto sem validação de exemplo com login persistido e redirecionamento para rota */dashboard*

As rotas abaixo só são acessíveis após enviar formulário na rota */login*.
- ***/dashboard*** - Rota Privada
- ***/profile*** - Rota Privada
---
### VSCode Snippets
Para agilizar a construção de ***Páginas***, ***Actions***, ***Reducers*** e afins, um arquivo de Snippets para ***VSCode*** está disponível em:
```bash
api_path
├── etc/
│....└── REACTJS.code-snippets
```
Crie um arquivo de Snippets no **VS Code** em **Preferences > User Snippets** e cole os dados do arquivo **REACTJS.code-snippets**

***### Lista de Snippets ###*** <br/>

 **@ PROP TYPES @**
- ***PTypes:*** function.propTypes { }
- ***propDefault:*** function.defaultProps { }<br><br>


**@ LAYOUTS @**
- ***layoutTemplate*** <br><br>


 **@ PAGES @**
- ***pageTemplate:*** arquivo index.js
- ***styleTemplate:*** arquivo styles.js
- ***unform:*** formulário modelo utilizando @rocketseat/unform (vide página **SignIn** para importações necessárias)<br><br>


**@ YUP VALIDATIONS @**
- ***yupWebValidation:*** validações de formulários<br><br>

 **@ REDUX @**
- ***reducerTemplate***
- ***reducerCase***
- ***sagasTemplate***
- ***sagaFunction***
- ***actionTemplate***<br><br>


 **@ REACT HOOKS @**
- ***useState***
- ***useEffect***
- ***useMemo***
-  ***useSelector***
