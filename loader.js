fetch('games.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('games-container');

    data.games.forEach(game => {
      const card = document.createElement('div');
      card.className = 'card';

      // Set image — fallback if missing
      const imageFile = game.image ? game.image : 'default.jpg';

      card.innerHTML = `
        <div class="card-bg" style="background-image: url('games/${imageFile}')"></div>
        <div class="card-content">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
        </div>
      `;

      card.onclick = () => {
        window.location.href = `games/${game.file}`;
      };

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Error loading games:', err);
  });
