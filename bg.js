const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const orbs = [];
const colors = ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#FF6EC7'];

for(let i=0;i<60;i++){
  orbs.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*3+1,
    dx: (Math.random()-0.5)*0.7,
    dy: (Math.random()-0.5)*0.7,
    color: colors[Math.floor(Math.random()*colors.length)]
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  orbs.forEach(o=>{
    o.x+=o.dx;
    o.y+=o.dy;

    if(o.x<0 || o.x>canvas.width) o.dx*=-1;
    if(o.y<0 || o.y>canvas.height) o.dy*=-1;

    ctx.beginPath();
    ctx.arc(o.x,o.y,o.r,0,Math.PI*2);
    ctx.fillStyle = o.color;
    ctx.fill();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize',()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
