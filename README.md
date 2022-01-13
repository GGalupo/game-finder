##  📖 Sobre o projeto
Game Finder é um projeto que permite ao usuário buscar jogos para jogar. Ao clicar em um jogo da lista, é possível ver informações detalhadas sobre ele.
Os dados são buscados da API https://www.mmobomb.com/api.

## 🎉 Projeto no ar
https://game-finder-ggalupo.vercel.app/

## ⚙ Configurando a variável de ambiente
É necessário adicionar uma chave da API para fazer as requisições. Caso não possua a sua, acesse o link https://rapidapi.com/digiwalls/api/mmo-games, crie sua conta e pegue uma.

Na raíz do projeto, existe um arquivo com nome .env.example. Renomeie-o para .env.local e, em seguida, adiciona sua chave logo após o sinal de =.

Exemplo: 
```bash
RAPIDAPI_KEY=abcdefghijklmnopqrs
```

## ⚙ Instalando as dependências
```bash
npm install
# ou
yarn
```
## 💻Rodando o projeto localmente
Para executar o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

## 🛠️Ferramentas utilizadas

 - NextJS
 - ReactJS
 - TypeScript
 - Styled-components
 - Axios
 - React-icons

