const fmtDate = d => d ? new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : '—';
const fmtDateShort = d => d ? new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'}) : '—';
const fmtMoney = n => (n==null||isNaN(n)) ? '—' : '$'+Number(n).toFixed(2);
const today = () => new Date().toISOString().split('T')[0];
const daysAgo = n => { const d=new Date(); d.setDate(d.getDate()-n); return d.toISOString().split('T')[0]; };
const monthStart = () => { const d=new Date(); d.setDate(1); return d.toISOString().split('T')[0]; };

function showToast(msg, type='success') {
  document.getElementById('_toast')?.remove();
  const t = document.createElement('div');
  t.id = '_toast';
  t.className = 'toast' + (type==='error'?' err':'');
  t.innerHTML = `<span class="t-icon">${type==='error'?'✕':'✓'}</span>${msg}`;
  document.body.appendChild(t);
  requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),300);},3000);
}

function setActiveNav() {
  const page = location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-link').forEach(a=>{
    const h = a.getAttribute('href')||'';
    a.classList.toggle('active', h===page||(h==='index.html'&&(page===''||page==='index.html')));
  });
}

function renderNav() {
  const links = [
    ['index.html','Dashboard'],['hatch.html','Hatch Log'],['eggs.html','Egg Log'],
    ['mortality.html','Mortality'],['feed.html','Feed & Cost'],['health.html','Health'],['sales.html','Sales']
  ];
  document.body.insertAdjacentHTML('afterbegin',`<nav class="nav">
    <a href="index.html" class="nav-brand"><div class="brand-mark">🐦</div>Hickey Ranch</a>
    <div class="nav-sep"></div>
    ${links.map(([h,l])=>`<a href="${h}" class="nav-link">${l}</a>`).join('')}
  </nav>`);
  setActiveNav();
}

// Chart.js defaults
function chartDefaults() {
  if (!window.Chart) return;
  Chart.defaults.color = '#4a4642';
  Chart.defaults.borderColor = 'rgba(255,255,255,0.05)';
  Chart.defaults.font.family = "'Epilogue', sans-serif";
}
