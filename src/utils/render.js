export const fetchCharacter = () => {
  fetch('https://swapi.dev/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(character => {
      // im going to show character data on the webpage
      renderCharacter(character);
    })
    .catch(error => {
      console.error('Error fetching character data:', error);
    });
}

export const renderCharacter = (character) => {
  const characterContainer = document.getElementById('character-container');
  const characterInfo = `
      <h2>${character.name}</h2>
      <p>Height:${character.height} cm</p>
      <p>Mass: ${character.mass} kg</p>
      <p>Gender: ${character.gender}</p>
    `;

    characterContainer.innerHTML = characterInfo;
  }