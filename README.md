# Pokédex em React

## **Visão Geral**
Esta aplicação é uma Pokédex desenvolvida com **React**, utilizando a API [PokeAPI](https://pokeapi.co/) para obter informações dos Pokémon. Os recursos incluem: Navegação com **React Router**, **Local Storage** para salvar Pokémon favoritos, paginação para organizar os resultados e um sistema de busca por nome. Certifique-se de ter instalado Node.js (versão LTS recomendada) e npm ou yarn (gerenciador de pacotes). Para começar, clone o repositório com o comando `git clone https://github.com/CharlesMeloBC/Pokedex-React.git`, entre no diretório com `cd POKEDEX` e instale as dependências com `npm install`. Para rodar a aplicação, execute `npm start` e acesse `http://localhost:3000` no navegador.

A estrutura do projeto é organizada da seguinte forma: na pasta **src/**, estão os principais arquivos da aplicação. A pasta **components/** contém os componentes reutilizáveis, como o card de Pokémon. A pasta **pages/** contém as páginas principais, como Home, Favoritos e Detalhes. Em **routes/** está configurado o React Router, em **services/** a comunicação com a PokeAPI, e em **utils/** funções auxiliares, como o gerenciamento de favoritos no Local Storage.

A aplicação utiliza o React Router para gerenciar a navegação entre as páginas. As rotas configuradas incluem: `/` (Página inicial com listagem de Pokémon), `/details/:id` (Página com detalhes de um Pokémon) e `/favorites` (Página que exibe os Pokémon favoritos). Por exemplo, a configuração do React Router pode ser feita assim:
```javascript
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
A integração com a PokeAPI é feita utilizando requisições `GET` para obter os Pokémon com paginação e seus detalhes pelo ID ou nome. Por exemplo:
```javascript
const fetchPokemon = async (offset = 0, limit = 20) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const data = await response.json();
  return data.results;
};
```
A funcionalidade de paginação utiliza os parâmetros `offset` e `limit` fornecidos pela API. A busca por Pokémon permite ao usuário encontrar Pokémon pelo nome utilizando uma barra de pesquisa. O seguinte código ilustra como isso funciona:
```javascript
<input
  type="text"
  placeholder="Buscar Pokémon"
  onChange={(e) => setSearchTerm(e.target.value)}
/>
```

Pokémon favoritos são salvos no **Local Storage**. Para adicionar um Pokémon aos favoritos, usamos:
```javascript
const addToFavorites = (pokemon) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(pokemon);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
```
A listagem de favoritos pode ser exibida lendo os dados salvos no Local Storage:
```javascript
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
```

---

Este projeto demonstra como integrar APIs, gerenciar o estado com Local Storage e criar uma interface responsiva e funcional com React.
