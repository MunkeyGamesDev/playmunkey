fetch('/games.json')
.then(r=>r.json())
.then(d=>{
const c=document.getElementById('games-container')
c.innerHTML=''
d.games.forEach(g=>{
const a=document.createElement('a')
a.className='game-card'
a.href='/games/'+g.file
a.target='_blank'
const i=document.createElement('img')
i.src='/games/'+g.image
i.alt=g.title
const o=document.createElement('div')
o.className='game-overlay'
const h=document.createElement('h3')
h.textContent=g.title
const p=document.createElement('p')
p.textContent=g.description
o.appendChild(h)
o.appendChild(p)
a.appendChild(i)
a.appendChild(o)
c.appendChild(a)
})
})
