function fmtDate(d) {
  if (!d) return '—';
  return new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function fmtMoney(n) {
  if (n == null || isNaN(n)) return '—';
  return '$' + Number(n).toFixed(2);
}
function today() {
  return new Date().toISOString().split('T')[0];
}
function showToast(msg, type = 'success') {
  const existing = document.getElementById('_toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.id = '_toast';
  t.className = 'toast' + (type === 'error' ? ' toast-error' : '');
  t.innerHTML = `<span class="toast-icon">${type === 'error' ? '✕' : '✓'}</span> ${msg}`;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3000);
}
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    const match = href === page || (href === 'index.html' && (page === '' || page === 'index.html'));
    a.classList.toggle('active', match);
  });
}
