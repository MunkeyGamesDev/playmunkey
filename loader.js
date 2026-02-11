fetch('/games.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('games-container');
    container.innerHTML = '';

    data.games.forEach(game => {
      const card = document.createElement('a');
      card.className = 'game-card';
      card.href = '/games/' + game.file;
      card.target = '_blank';

      const img = document.createElement('img');
      img.className = 'game-img';
      img.src = '/games/' + game.image;
      img.alt = game.title;

      const overlay = document.createElement('div');
      overlay.className = 'game-overlay';

      const title = document.createElement('h3');
      title.textContent = game.title;

      const desc = document.createElement('p');
      desc.textContent = game.description;

      overlay.appendChild(title);
      overlay.appendChild(desc);

      card.appendChild(img);
      card.appendChild(overlay);
      container.appendChild(card);
    });
  })
  .catch(err => console.error(err));
