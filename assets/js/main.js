

const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url).then((response) => response.json())
          .then((bodyJson) => console.log(bodyJson))
          .catch((error) => console.error(error))
          .finally(() => console.log('Requisição concluída'))
          


