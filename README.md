<h1 align="center" id="">
   Markdown Previewer
</h1>


<h2 id="tabela-de-conteudo">Tabela de conteúdos</h2>
<!--ts-->
   
- [Sobre](#)

- [Tabela de Conteudo](#tabela-de-conteudo)

- [Features](#features)

- [Como usar](#como-usar)

  - [Pre Requisitos](#pré-requisitos)

  - [Instalação](#instalação)

  - [Rodando a aplicação](#-rodando-a-api)

- [Storybook](#storybook)

- [Testes](#-testes)

- [Tecnologias](#-tecnologias)


<!--te-->

<h2  id="features">  
  Features
</h2>

- [x] Configurado style guide.
- [x] Adicionado tipagens.
- [x] Criado página para previewe de markdown.
- [x] Criação de pagina de erro 404.
- [x] Aplicação de documentação de componentes com storybook.
- [x] Aplicado conteinerização com docker

<h2>Como usar</h2>

<h3>Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<h3 id="instalacao">Instalação</h3>

```bash
# Clone este repositório
$ git clone <https://github.com/jhony2488/markdown-previewer>
# Acesse a pasta do projeto no terminal/cmd
$ cd markdown-previewer
# Instale as dependências
$ npm install || yarn install
```

<h3 id="rodando-api">🎲 Rodando a aplicação sem docker</h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

```bash
# Execute a aplicação em modo de desenvolvimento
$ npm run dev || yarn dev
# O servidor inciará na porta:5173 - acesse <http://localhost:5173>
```

<h3 id="rodando-api">🎲 Rodando a aplicação com docker</h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

```bash
# Execute a aplicação em modo de desenvolvimento
$ docker compose up --build
# O servidor inciará na porta:5173 - acesse <http://localhost:5173>
```

<h3 id="storybook">🎲 Storybook</h3>

```bash
# execute o storybook
$ npm run storybook || yarn storybook
# O servidor inciará na porta:6006 - acesse <http://localhost:6006/?path=#>
$ 
```

<h3 id="teste">🎲 Testes Unitarios e de Integração com Jest</h3>

```bash
# execute os testes com jest
$ npm run test || yarn test
```

<h3 id="teste">🎲 Testes End to End com Cypress</h3>

```bash
# Abra o cypress
$ npm run cypress:open || yarn cypress:open
# execute os testes do cypress
$ npm run cypress:run || yarn cypress:run
```

<h2 id="tecnologias">🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React.js](https://pt-br.reactjs.org/)
- [Jest](https://jestjs.io/)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Storybook](https://storybook.js.org/)
- [Material UI](https://mui.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

