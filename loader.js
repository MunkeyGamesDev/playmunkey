fetch('games.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('games-container');

    data.games.forEach(game => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <a href="games/${game.file}" target="_blank">Play</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Error loading games:', err);
  });
