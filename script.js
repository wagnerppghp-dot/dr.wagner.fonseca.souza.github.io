const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(element=>revealObserver.observe(element));

const sections=[...document.querySelectorAll('main section[id]')];
const navAnchors=[...document.querySelectorAll('.nav-links a[href^="#"]')];
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navAnchors.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));}}),{rootMargin:'-35% 0px -55%'});
sections.forEach(section=>sectionObserver.observe(section));

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(item=>item.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>card.classList.toggle('hidden',filter!=='todos'&&card.dataset.category!==filter));}));

const toast=document.querySelector('.toast');
document.querySelector('.copy-email').addEventListener('click',async event=>{try{await navigator.clipboard.writeText(event.currentTarget.dataset.email);toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200);}catch{window.location.href=`mailto:${event.currentTarget.dataset.email}`;}});
document.querySelector('#year').textContent=new Date().getFullYear();
