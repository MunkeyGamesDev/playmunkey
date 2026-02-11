fetch('/games.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('games-container');
    container.innerHTML = '';

    data.games.forEach(game => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = new Image();
      img.className = 'game-img';
      img.src = '/games/' + game.image;

      const title = document.createElement('h3');
      title.textContent = game.title;

      const desc = document.createElement('p');
      desc.textContent = game.description;

      const link = document.createElement('a');
      link.href = '/games/' + game.file;
      link.target = '_blank';
      link.textContent = 'Play';

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(link);

      container.appendChild(card);
    });
  })
  .catch(err => console.error(err));
