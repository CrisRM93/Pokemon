addEvent(window,'load',cargar, false);
    function addEvent(ele,eve,fun,cap){
        if(window.attachEvent)
            addAttachEvent('on'+eve,fun);
        else
            ele.addEventListener(eve,fun,cap);
        }

        async function cargar() {
        const searchBy = document.getElementById('searchBy').value;
        const searchValue = document.getElementById('searchInput').value.toLowerCase().trim();
  
        let url;
        if (searchBy === 'random') {
          const randomId = Math.floor(Math.random() * 150) + 1; // Genera un ID aleatorio entre 1 y 150
          url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
        } else {
          url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
        }
  
        try {
          const response = await fetch(url);
          const pokemonData = await response.json();
          displayPokemonInfo(pokemonData);
        } catch (error) {
          console.error('Error fetching Pokémon:', error);
        }
      }
  
      function displayPokemonInfo(pokemon) {
        const pokemonInfoDiv = document.getElementById('pokemonInfo');
        pokemonInfoDiv.innerHTML = `
          <div class="pokemon-card">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>Altura: ${pokemon.weight}</p>
            <p>Abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
          </div>
        `;
      }
  
      function showMoreInfo() {
        const moreInfoDiv = document.getElementById('moreInfo');
        moreInfoDiv.innerHTML = `<p>Más información detallada del Pokémon.</p>`;
        // Aquí podrías agregar más detalles o abrir un modal con información adicional
      }
  
      function addPokemonToTable() {
        let cont=0;
        let caracter=" ";
        do{
            if(confirm('Deseas añadir una caracteristica.')){
                var carac=prompt('Ingresa la caracteristica nueva');
                caracter= carac + caracter;
                cont=cont+1;
                console.log(caracter);
                const addInfoDiv = document.getElementById('addInfo');
                    addInfoDiv.innerHTML = `
                        <div class="add-card">
                            <h2>Más caracteristicas</h2>
                            <p>${caracter}</p>
                        </div>`
            }
            else{
                break;
            }
        }while(cont<6);
      }