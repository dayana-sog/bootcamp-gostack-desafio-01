<p align="center">
  <img width="230" height="200" src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67">
</p>


## Desafio 1: Conceitos do NodeJS

## :rocket: Sobre o desafio

Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando Express.

## Rotas

* `POST /projects` : A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

* `GET /projects` : Rota que lista todos projetos e suas tarefas;
 
* `PUT /projects/:id` : A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

* `DELETE //projects/:id` : A rota deve deletar o projeto com o id presente nos parâmetros da rota;

* `POST /projects/:id/tasks` : A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

## Instalação 

##### 	Para instalar a aplicação é necessário ter o [Node](https://nodejs.org/en/) e o [Yarn](https://legacy.yarnpkg.com/en/docs/install/#mac-stable) instalados em sua máquina.

Clone o repositório:
```sh
$ git clone https://github.com/dayana-sog/bootcamp-gostack-desafio-01.git
```

Aceda a pasta do projeto:
```sh
$ cd bootcamp-gostack-desafio-01
```

Instale as dependências:
```sh
yarn
```
Inicie o servidor:
```sh
$ yarn dev
```

## Agradecimentos

### Dayana Sog :wave:

