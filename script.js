const $ = (selector) => document.querySelector(selector);
const grid = $('#work-grid');
const menu = $('#site-menu');
const toggle = $('#menu-toggle');
const pages = {works:$('#works-page'), project:$('#project-page'), about:$('#about-page'),contact:$('#contact-page')};

works.forEach((work, i) => {
  const figure = document.createElement('figure');
  figure.className = 'work-card';
  const a = document.createElement('a');
  a.href = '#work/' + encodeURIComponent(work.slug);
  a.setAttribute('aria-label', `${work.title}, ${work.year}`);
  const img = document.createElement('img');
  img.className = 'work-image';
  img.src = work.image;
  img.alt = work.alt;
  img.loading = i < 3 ? 'eager' : 'lazy';
  a.appendChild(img);
  const caption = document.createElement('figcaption');
  caption.className = 'work-caption';
  const title = document.createElement('span');
  title.className='work-name'; title.textContent=work.title;
  const year = document.createElement('span');
  year.className='work-year'; year.textContent=work.year;
  caption.append(title,year);
  a.appendChild(caption); figure.appendChild(a); grid.appendChild(figure);
});

function closeMenu() { menu.hidden=true; toggle.setAttribute('aria-expanded','false'); }
toggle.addEventListener('click', () => {
  const willOpen = menu.hidden;
  menu.hidden=!willOpen;
  toggle.setAttribute('aria-expanded', String(willOpen));
});
document.addEventListener('keydown', e => { if(e.key==='Escape') closeMenu(); });
document.addEventListener('click', e => {if (!menu.contains(e.target) && e.target!==toggle) closeMenu(); });

function route() {
  let route = decodeURIComponent(location.hash.substring(1));
  if (!route || route==='top') route='works';
  const parts=route.split('/');
  let which=['about','contact'].includes(parts[0]) ? parts[0] : parts[0]==='work' ? 'project' : 'works';
  let item=null;
  if(which==='project') {
    item=works.find(w=>w.slug===parts[1]);
    if(!item) which='works';
  }
  for(const [name,el] of Object.entries(pages)) el.hidden=name!==which;
  if(item) {
    $('#project-title').textContent=item.title;
    $('#project-year').textContent=item.year;
    const images=$('#project-images'); images.replaceChildren();
    const srcs = Array.isArray(item.images) && item.images.length ? item.images : [item.image];
    for (const src of srcs) {
      const im=document.createElement('img'); im.src=src; im.alt=item.alt || item.title;
      images.appendChild(im);
    }
    const index=works.indexOf(item), next=works[(index+1)%works.length];
    const nextBox=$('#project-next');
    nextBox.replaceChildren();
    const link=document.createElement('a'); link.href='#work/'+encodeURIComponent(next.slug);
    link.textContent='Next work →'; nextBox.appendChild(link);
  }
  document.title = `${item ? item.title : which==='works'?'Works':which==='about'?'About':'Contact'} — Your Name`;
  closeMenu();
  window.scrollTo({top:0, behavior:'instant'});
}
window.addEventListener('hashchange',route);
route();
$('#go-top').addEventListener('click',e=>{e.preventDefault(); location.hash='#works'; window.scrollTo({top:0, behavior:'smooth'});});
$('#year').textContent=new Date().getFullYear();
