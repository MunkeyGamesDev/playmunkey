
fetch('games.json')
.then(r=>r.json())
.then(data=>{
const grid=document.getElementById('gamesGrid');
data.games.forEach(g=>{
const card=document.createElement('a');
card.className='card';
card.href='games/'+g.file;
card.style.background=`url('games/${g.image||'fallback.jpg'}') center/cover`;
const overlay=document.createElement('div');
overlay.className='overlay';
overlay.innerHTML=`<h3>${g.title}</h3><p>${g.description}</p>`;
card.appendChild(overlay);
grid.appendChild(card);
});
});
