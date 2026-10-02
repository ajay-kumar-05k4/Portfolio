const $=id=>document.getElementById(id),U=f=>encodeURI('Certificates/'+f),isImg=f=>/\.(png|jpe?g)$/i.test(f);
$('me').src=$('pol').src=U('Myimage.png');
/* Menu */
const mb=$('mb'),mn=$('menu');
const tg=o=>{mn.classList.toggle('open',o);document.body.classList.toggle('mo',o);mb.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
mb.onclick=()=>tg(!mn.classList.contains('open'));mn.onclick=e=>{if(e.target.tagName=='A')tg(false)};
addEventListener('keydown',e=>{if(e.key=='Escape')tg(false)});
/* Scroll-fill intro */
const T="Hi, I'm Ajay, a computer science student and full-stack developer. I build shops that learn from their shoppers, elections nobody can tamper with and credentials employers can trust. Machine learning, blockchain and clean interfaces, shipped and live.";
const W=T.split(' '),RED=6;
$('fill').innerHTML=W.map((w,i)=>`<span class="${i>=W.length-RED?'r':''}">${w}</span> `).join('');
const sp=[...document.querySelectorAll('#fill span')];
function fill(){const r=$('fill').getBoundingClientRect(),vh=innerHeight;const p=Math.min(1,Math.max(0,(vh*.85-r.top)/(r.height+vh*.25)));const n=Math.round(p*sp.length);sp.forEach((s,i)=>s.classList.toggle('on',i<n))}
addEventListener('scroll',fill,{passive:true});addEventListener('resize',fill);fill();
/* Marquees */
const row=a=>(a.join('  ✦  ')+'  ✦  ').repeat(4);
$('m1').textContent=row(['React','Node.js','Express','MongoDB','Python','Solidity','Hardhat','Scikit-learn','Java','Docker']);
$('m2').textContent=row(['AWS Academy','PwC','Red Hat','IBM','Juniper','Zscaler','NPTEL','MongoDB University','Google','Infosys']);
/* Rows (projects & experience share one component) */
const META={'Pro-Shopify':[['Role','Full-stack & ML'],['Timeline','Jun 2025 – May 2026'],['Focus','AI e-commerce']],'E-Voting through Blockchain':[['Role','Team lead'],['Team','3 members'],['Deployed','Jun 2026'],['Network','Ethereum Sepolia']],'Spam Detection Using NLP':[['Role','Developer'],['Year','2025'],['Focus','NLP, TF-IDF']],'SkillPass':[['Role','Developer'],['Status','In progress'],['Team','3 members'],['Year','2026']]};
function rowHTML(name,meta,desc,thumb,link,jt,code){return `<article class="pr" tabindex="0"><div class="pt"><h3>${name}</h3><span class="jl">${code?`<a class="jump" href="${code}" target="_blank" rel="noopener">GitHub ↗</a>`:''}${link?`<a class="jump" href="${link}" target="_blank" rel="noopener">${jt} ↗</a>`:''}</span></div><div class="pb"><div class="pi"><div class="meta">${meta.map(([k,v])=>`<div><small>${k}</small><span>${v}</span></div>`).join('')}<p class="desc">${desc}</p></div>${thumb||'<div></div>'}</div></div></article>`}
$('pj').innerHTML=PROJECTS.map(p=>rowHTML(p.n,META[p.n]||[],p.d+' '+p.s.join(', ')+'.',p.live?`<div class="th"><iframe loading="lazy" src="${p.live}" title="${p.n} preview" tabindex="-1"></iframe></div>`:'<div class="th w">In development<br>Demo coming soon</div>',p.live||null,'Jump To Project',p.code||GH)).join('');
const EXP=[['PwC Launchpad Program',[['Type','Industry learning'],['Timeline','Feb – Aug 2026'],['Activities','240+']],'Python fundamentals, generative AI, modern data systems, cloud engineering and soft skills, each with a micro-credential. Business simulations and case exercises on problem solving and stakeholder communication.'],
['Wipro PBL, Java Full Stack',[['Type','Training'],['Timeline','Jul – Aug 2026']],'Core Java, OOP, collections, multithreading, I/O streams and JDBC, plus Servlets, JSP, JavaScript, AJAX, SQL and RDBMS.'],
['Team Lead, E-Voting',[['Role','Team lead'],['Team','3 members']],'Led the team from smart contract to interface on a blockchain-based election platform.']];
$('ex').innerHTML=EXP.map(e=>rowHTML(e[0],e[1],e[2])).join('');
document.querySelectorAll('.pr').forEach(r=>{const set=()=>{r.parentElement.querySelectorAll('.pr.on').forEach(x=>x.classList.remove('on'));r.classList.add('on')};r.addEventListener('mouseenter',set);r.addEventListener('focus',set);r.addEventListener('click',e=>{if(!e.target.closest('a'))set()})});
['pj','ex'].forEach(id=>$(id).firstElementChild.classList.add('on'));
/* Skills, certificates */
const brand=i=>i.split(' · ')[0].replace(/ (India|Academy|Networks|University|Skillshop|Springboard|Cognitive Class)$/,'');
function pdfPrev(){}
$('sg').innerHTML=Object.entries(SKILLS).map(([k,v])=>`<div><h3>${k}</h3><ul>${v.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('');
$('nc').textContent=CERTS.length+10;
const cats=['All',...new Set(CERTS.map(c=>c.c))];let cur='All';
function draw(){$('fl').innerHTML=cats.map(c=>`<button aria-pressed="${c==cur}" data-c="${c}">${c}</button>`).join('');
$('cg').innerHTML=CERTS.map((c,i)=>[c,i]).filter(([c])=>cur=='All'||c.c==cur).map(([c,i])=>`<button class="c" data-i="${i}"><div class="tt">${brand(c.i)}</div><div class="t"><b>${c.t}</b><small>${c.i}${c.d?' · '+c.d:''}</small></div></button>`).join('')}
draw();$('fl').onclick=e=>{if(e.target.dataset.c){cur=e.target.dataset.c;draw()}};
const dg=$('dg'),cl=()=>dg.close();
$('cg').onclick=e=>{const b=e.target.closest('.c');if(!b)return;const c=CERTS[b.dataset.i];$('dt').textContent=c.t+' · '+c.i;
$('db').innerHTML=(isImg(c.f)?`<img src="${U(c.f)}" alt="${c.t}">`:`<iframe src="${U(c.f)}" title="${c.t}"></iframe>`)+(c.g?`<ul>${[c.f,...c.g].map(f=>`<li><a href="${U(f)}" target="_blank">${f.replace('.pdf','')}</a></li>`).join('')}</ul>`:'');dg.showModal()};
$('dx').onclick=cl;dg.addEventListener('close',()=>$('db').replaceChildren());dg.onclick=e=>{if(e.target==dg)cl()};
document.addEventListener('keydown',e=>{if(e.key=='Escape'&&dg.open){e.preventDefault();cl()}});
/* Cursor */
if(matchMedia('(hover:hover) and (pointer:fine)').matches){const cursors=[...document.querySelectorAll('.cur')];document.body.classList.add('pen-cursor');
addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;cursors.forEach(c=>{c.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0) translate(-50%,-98%)`;c.classList.add('on');c.classList.toggle('active',!!e.target.closest('a,button,input,textarea,.pr,.c'))})},{passive:true});
addEventListener('pointerdown',e=>{if(e.button===0)cursors.forEach(c=>c.classList.add('press'))});
cursors.forEach(c=>c.addEventListener('animationend',()=>c.classList.remove('press')));
document.addEventListener('pointerleave',()=>cursors.forEach(c=>c.classList.remove('on')));
}
/* Contact form: sent to your inbox through FormSubmit (first message needs a one-time email activation) */
const cf=$('cf'),cs=$('cs');
cf.addEventListener('submit',async e=>{e.preventDefault();const d=new FormData(cf);
if(d.get('_honey'))return;
if(!d.get('name').trim()||!/^\S+@\S+\.\S+$/.test(d.get('email'))||!d.get('message').trim()){cs.textContent='Please fill in your name, a valid email and a message.';return}
const b=cf.querySelector('button');b.disabled=true;cs.textContent='Sending...';
const body={name:d.get('name'),email:d.get('email'),message:d.get('message'),_subject:'New portfolio message from '+d.get('name'),_replyto:d.get('email'),_template:'table',_captcha:'false'};
try{const r=await fetch('https://formsubmit.co/ajax/ajaymedaboina9676381509@gmail.com',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(body)});
const j=await r.json();if(!r.ok||j.success==='false')throw 0;cs.textContent='Thanks, your message is on its way. I will reply soon.';cf.reset()}
catch(_){cs.innerHTML='Could not send. <a href="mailto:ajaymedaboina9676381509@gmail.com?subject='+encodeURIComponent('Portfolio message from '+d.get('name'))+'&body='+encodeURIComponent(d.get('message'))+'">Send it by email instead</a>.'}
b.disabled=false});
