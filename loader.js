fetch('/games.json')
  .then(r => r.json())
  .then(data => {
    const container = document.getElementById('games-container');
    container.innerHTML = '';

    data.games.forEach(game => {
      const link = document.createElement('a');
      link.className = 'card';
      link.href = '/games/' + game.file;
      link.target = '_blank';

      const img = document.createElement('img');
      img.src = '/games/' + game.image;
      img.className = 'game-img';
      img.loading = 'lazy';
      img.onerror = () => img.remove();

      const title = document.createElement('h3');
      title.textContent = game.title;

      const desc = document.createElement('p');
      desc.textContent = game.description;

      link.appendChild(img);
      link.appendChild(title);
      link.appendChild(desc);

      container.appendChild(link);
    });
  })
  .catch(err => console.error(err));
