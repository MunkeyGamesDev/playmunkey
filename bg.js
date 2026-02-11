
const c=document.getElementById('bg');
const ctx=c.getContext('2d');
let orbs=[];
function resize(){c.width=innerWidth;c.height=innerHeight}
addEventListener('resize',resize);resize();
for(let i=0;i<30;i++){orbs.push({x:Math.random()*c.width,y:Math.random()*c.height,r:2+Math.random()*4,dx:(Math.random()-.5)*.5,dy:(Math.random()-.5)*.5})}
function draw(){
ctx.clearRect(0,0,c.width,c.height);
orbs.forEach(o=>{
o.x+=o.dx;o.y+=o.dy;
if(o.x<0||o.x>c.width)o.dx*=-1;
if(o.y<0||o.y>c.height)o.dy*=-1;
ctx.beginPath();
ctx.arc(o.x,o.y,o.r,0,Math.PI*2);
ctx.fillStyle='rgba(100,150,255,.5)';
ctx.fill();
});
requestAnimationFrame(draw);
}
draw();
