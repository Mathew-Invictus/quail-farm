@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Epilogue:wght@300;400;500&display=swap');

:root {
  --bg:         #0d0d0d;
  --bg-card:    #161616;
  --bg-hover:   #1e1e1e;
  --bg-input:   #1a1a1a;
  --border:     rgba(255,255,255,0.07);
  --border-focus: rgba(198,160,90,0.5);
  --accent:     #c6a05a;
  --accent-dim: rgba(198,160,90,0.12);
  --accent-glow:rgba(198,160,90,0.25);
  --green:      #4caf7d;
  --green-dim:  rgba(76,175,125,0.12);
  --red:        #e05252;
  --red-dim:    rgba(224,82,82,0.12);
  --blue:       #5b9cf6;
  --blue-dim:   rgba(91,156,246,0.12);
  --text-1:     #f0ece4;
  --text-2:     #9a9490;
  --text-3:     #5a5652;
  --radius-sm:  8px;
  --radius:     12px;
  --radius-lg:  16px;
  --shadow:     0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3);
  --shadow-lg:  0 8px 32px rgba(0,0,0,0.5);
  --font-display: 'Syne', sans-serif;
  --font-body:    'Epilogue', sans-serif;
  --nav-h:      60px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text-1);
  min-height: 100vh;
  font-size: 14px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

/* ── Nav ── */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-h);
  background: rgba(13,13,13,0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 4px;
  z-index: 1000;
}

.nav-brand {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--text-1);
  text-decoration: none;
  margin-right: 16px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: -0.02em;
}

.nav-brand .brand-icon {
  width: 28px; height: 28px;
  background: var(--accent);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
}

.nav-brand .brand-sub {
  color: var(--accent);
  font-weight: 500;
}

.nav-divider {
  width: 1px; height: 20px;
  background: var(--border);
  margin: 0 8px;
}

.nav-link {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 400;
  color: var(--text-2);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  transition: color 0.15s, background 0.15s;
  white-space: nowrap;
}

.nav-link:hover { color: var(--text-1); background: var(--bg-hover); }
.nav-link.active { color: var(--text-1); background: var(--bg-hover); }
.nav-link.active::after {
  content: '';
  display: block;
  width: 3px; height: 3px;
  background: var(--accent);
  border-radius: 50%;
  margin: 2px auto 0;
}

/* ── Layout ── */
.page {
  max-width: 1160px;
  margin: 0 auto;
  padding: calc(var(--nav-h) + 32px) 24px 80px;
}

.page-header {
  margin-bottom: 32px;
}

.page-header h1 {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-1);
  line-height: 1.2;
  margin-bottom: 6px;
}

.page-header p { color: var(--text-2); font-size: 14px; }

/* ── Cards ── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow);
}

.card + .card { margin-top: 16px; }

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.card-title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-1);
  letter-spacing: -0.01em;
}

/* ── KPI Grid ── */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}

.kpi {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px 20px;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s;
}

.kpi::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--accent);
  opacity: 0.6;
}

.kpi.green::before  { background: var(--green); }
.kpi.red::before    { background: var(--red); }
.kpi.blue::before   { background: var(--blue); }

.kpi:hover { border-color: rgba(255,255,255,0.12); }

.kpi-label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-3);
  margin-bottom: 10px;
}

.kpi-value {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-1);
  line-height: 1;
}

.kpi-sub {
  font-size: 11px;
  color: var(--text-3);
  margin-top: 6px;
}

/* ── Forms ── */
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group.full { grid-column: 1 / -1; }
.form-group.half { grid-column: span 2; }

label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-2);
}

input, select, textarea {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  padding: 10px 14px;
  background: var(--bg-input);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-1);
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;
  -webkit-appearance: none;
}

input::placeholder, textarea::placeholder { color: var(--text-3); }

input:focus, select:focus, textarea:focus {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235a5652' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}

select option { background: #1e1e1e; }

textarea { resize: vertical; min-height: 80px; line-height: 1.5; }

.form-footer {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.form-hint {
  font-size: 13px;
  color: var(--accent);
  font-weight: 500;
}

/* ── Buttons ── */
.btn {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  padding: 9px 18px;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 0.01em;
  white-space: nowrap;
  text-decoration: none;
}

.btn:disabled { opacity: 0.5; cursor: not-allowed; }

.btn-primary {
  background: var(--accent);
  color: #0d0d0d;
  font-weight: 600;
}
.btn-primary:hover:not(:disabled) {
  background: #d4ae6a;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px var(--accent-glow);
}

.btn-ghost {
  background: var(--bg-hover);
  color: var(--text-1);
  border: 1px solid var(--border);
}
.btn-ghost:hover:not(:disabled) { border-color: rgba(255,255,255,0.15); }

.btn-danger {
  background: var(--red-dim);
  color: var(--red);
  border: 1px solid rgba(224,82,82,0.2);
}

.btn-sm { font-size: 12px; padding: 6px 12px; }

/* ── Tables ── */
.table-wrap { overflow-x: auto; margin-top: 4px; }

table { width: 100%; border-collapse: collapse; }

thead th {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-3);
  padding: 10px 14px;
  text-align: left;
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}

tbody tr {
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: background 0.1s;
}
tbody tr:last-child { border-bottom: none; }
tbody tr:hover { background: rgba(255,255,255,0.02); }

tbody td {
  padding: 12px 14px;
  color: var(--text-1);
  vertical-align: middle;
  font-size: 13px;
}

td.muted { color: var(--text-3); }

/* ── Badges ── */
.badge {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 20px;
  letter-spacing: 0.02em;
}

.badge-green  { background: var(--green-dim);  color: var(--green); }
.badge-red    { background: var(--red-dim);    color: var(--red); }
.badge-amber  { background: var(--accent-dim); color: var(--accent); }
.badge-blue   { background: var(--blue-dim);   color: var(--blue); }
.badge-gray   { background: rgba(255,255,255,0.06); color: var(--text-2); }

/* ── Toast ── */
.toast {
  position: fixed;
  bottom: 24px; right: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-1);
  padding: 12px 18px;
  border-radius: var(--radius);
  font-size: 13px;
  font-weight: 500;
  box-shadow: var(--shadow-lg);
  z-index: 9999;
  transform: translateY(12px);
  opacity: 0;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex; align-items: center; gap: 10px;
}

.toast.show { transform: translateY(0); opacity: 1; }

.toast-icon {
  width: 20px; height: 20px;
  background: var(--green-dim);
  color: var(--green);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; font-weight: 700;
  flex-shrink: 0;
}

.toast-error .toast-icon { background: var(--red-dim); color: var(--red); }

/* ── Empty state ── */
.empty {
  text-align: center;
  padding: 48px 20px;
  color: var(--text-3);
}
.empty-icon { font-size: 32px; margin-bottom: 12px; }
.empty p { font-size: 13px; }

/* ── Section gap ── */
.gap-top { margin-top: 16px; }
.gap-top-lg { margin-top: 24px; }

/* ── Two col grid ── */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.three-col { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

/* ── Alert ── */
.alert {
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  font-size: 13px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 16px;
}
.alert-warning { background: rgba(198,160,90,0.08); border: 1px solid rgba(198,160,90,0.2); color: var(--accent); }
.alert-error   { background: var(--red-dim); border: 1px solid rgba(224,82,82,0.2); color: var(--red); }

/* ── Page load animation ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.page-header { animation: fadeUp 0.3s ease both; }
.kpi-grid    { animation: fadeUp 0.35s ease 0.05s both; }
.card        { animation: fadeUp 0.35s ease 0.1s both; }

/* ── Mobile ── */
@media (max-width: 768px) {
  .nav-link { display: none; }
  .nav-link.active { display: flex; }
  .two-col, .three-col { grid-template-columns: 1fr; }
  .kpi-grid { grid-template-columns: 1fr 1fr; }
  .form-grid { grid-template-columns: 1fr; }
  .page { padding-left: 16px; padding-right: 16px; }
}
