API Rest que calcula comissão de vendas. Parte do desafio para programador backend Jr da empres TG4.

## 1. Iniciando

### 1.1 Requísitos

- NodeJs, NPM ou Yarn (https://nodejs.org/)

### 1.2 Configurações do Projeto

Comece clonando o repositório para sua máquina.

```sh
git clone https://github.com/gbrb1/desafio-tg4.git
```

### 1.3 Rodar Projeto

Use os comandos

```sh
yarn
```

Depois

```sh
yarn start
```

Única rota da aplicação

```sh
http://localhost:3333/api/balanco
```

### 1.4 Exemplo de request

```sh
{"pedidos": [
{ "vendedor": 1, "data": "2022-03-01", "valor":500.34 },
{ "vendedor": 1, "data": "2022-03-01", "valor":1000.22 },
{ "vendedor": 1, "data": "2022-03-01", "valor":100.35 },
{ "vendedor": 1, "data": "2022-03-01", "valor":22.34 },
{ "vendedor": 1, "data": "2022-04-01", "valor":5000.34 },
{ "vendedor": 2, "data": "2022-03-01", "valor":2000.34 },
{ "vendedor": 2, "data": "2022-04-01", "valor":3000.34 }
]}
```
