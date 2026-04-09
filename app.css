@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Epilogue:ital,wght@0,300;0,400;0,500;1,300&display=swap');

:root {
  --bg:           #080a0c;
  --bg-card:      #0f1215;
  --bg-raised:    #161b20;
  --bg-hover:     #1c2229;
  --bg-input:     #0f1215;
  --border:       rgba(255,255,255,0.06);
  --border-mid:   rgba(255,255,255,0.1);
  --gold:         #d4a847;
  --gold-bright:  #f0c060;
  --gold-dim:     rgba(212,168,71,0.12);
  --gold-glow:    rgba(212,168,71,0.2);
  --green:        #34d399;
  --green-dim:    rgba(52,211,153,0.1);
  --red:          #f87171;
  --red-dim:      rgba(248,113,113,0.1);
  --blue:         #60a5fa;
  --blue-dim:     rgba(96,165,250,0.1);
  --purple:       #a78bfa;
  --purple-dim:   rgba(167,139,250,0.1);
  --text-1:       #e8e2d9;
  --text-2:       #8a8278;
  --text-3:       #4a4642;
  --nav-h:        58px;
  --r-sm:         6px;
  --r:            10px;
  --r-lg:         14px;
  --shadow:       0 1px 2px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3);
  --shadow-lg:    0 8px 40px rgba(0,0,0,0.6);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Epilogue', sans-serif;
  background: var(--bg);
  color: var(--text-1);
  min-height: 100vh;
  font-size: 14px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
::-webkit-scrollbar { width: 5px; background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border-mid); border-radius: 3px; }

/* ── NAV ─────────────────────────────────────────────────── */
.nav {
  position: fixed; top: 0; left: 0; right: 0;
  height: var(--nav-h);
  background: rgba(8,10,12,0.92);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center;
  padding: 0 20px; gap: 2px; z-index: 1000;
}
.nav-brand {
  font-family: 'Syne', sans-serif;
  font-size: 15px; font-weight: 700;
  color: var(--text-1);
  text-decoration: none;
  display: flex; align-items: center; gap: 10px;
  margin-right: 12px; letter-spacing: -0.02em;
}
.brand-mark {
  width: 30px; height: 30px;
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-bright) 100%);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; flex-shrink: 0;
  box-shadow: 0 0 12px var(--gold-glow);
}
.nav-sep { width: 1px; height: 18px; background: var(--border); margin: 0 6px; }
.nav-link {
  font-size: 12.5px; font-weight: 400; color: var(--text-2);
  text-decoration: none; padding: 5px 10px;
  border-radius: var(--r-sm);
  transition: color 0.15s, background 0.15s;
  white-space: nowrap; letter-spacing: 0.01em;
}
.nav-link:hover { color: var(--text-1); background: var(--bg-raised); }
.nav-link.active {
  color: var(--gold); background: var(--gold-dim);
}

/* ── LAYOUT ──────────────────────────────────────────────── */
.page {
  max-width: 1200px; margin: 0 auto;
  padding: calc(var(--nav-h) + 28px) 20px 80px;
}
.page-header { margin-bottom: 24px; }
.page-header h1 {
  font-family: 'Syne', sans-serif;
  font-size: 22px; font-weight: 700;
  letter-spacing: -0.03em; color: var(--text-1);
  margin-bottom: 4px; line-height: 1.2;
}
.page-header p { color: var(--text-2); font-size: 13px; }

/* ── CARDS ───────────────────────────────────────────────── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 20px;
  box-shadow: var(--shadow);
}
.card-hd {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 16px; padding-bottom: 14px;
  border-bottom: 1px solid var(--border);
}
.card-title {
  font-family: 'Syne', sans-serif;
  font-size: 13px; font-weight: 600;
  color: var(--text-1); letter-spacing: -0.01em;
}
.card-sub { font-size: 11px; color: var(--text-3); margin-top: 1px; }

/* ── KPI CARDS ───────────────────────────────────────────── */
.kpi-row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px; margin-bottom: 20px;
}
.kpi {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 16px 18px;
  position: relative; overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
  cursor: default;
}
.kpi:hover { border-color: var(--border-mid); transform: translateY(-1px); }
.kpi-accent {
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: var(--gold); opacity: 0.7;
}
.kpi.g .kpi-accent { background: var(--green); }
.kpi.r .kpi-accent { background: var(--red); }
.kpi.b .kpi-accent { background: var(--blue); }
.kpi.p .kpi-accent { background: var(--purple); }
.kpi-label {
  font-size: 10px; font-weight: 500; text-transform: uppercase;
  letter-spacing: 0.09em; color: var(--text-3); margin-bottom: 8px;
}
.kpi-val {
  font-family: 'Syne', sans-serif;
  font-size: 24px; font-weight: 700;
  letter-spacing: -0.04em; color: var(--text-1); line-height: 1;
}
.kpi-sub { font-size: 10px; color: var(--text-3); margin-top: 5px; }
.kpi-trend {
  font-size: 10px; font-weight: 500;
  margin-top: 4px; display: flex; align-items: center; gap: 3px;
}
.trend-up { color: var(--green); }
.trend-dn { color: var(--red); }

/* ── GRIDS ───────────────────────────────────────────────── */
.g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.g3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
.g21 { display: grid; grid-template-columns: 2fr 1fr; gap: 14px; }
.g12 { display: grid; grid-template-columns: 1fr 2fr; gap: 14px; }
.gap { margin-top: 14px; }

/* ── CHARTS ──────────────────────────────────────────────── */
.chart-wrap { position: relative; width: 100%; }
.chart-wrap canvas { width: 100% !important; }

/* ── TABLES ──────────────────────────────────────────────── */
.tbl-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; }
thead th {
  font-size: 10px; font-weight: 500; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--text-3);
  padding: 8px 12px; text-align: left;
  border-bottom: 1px solid var(--border); white-space: nowrap;
}
tbody tr { border-bottom: 1px solid rgba(255,255,255,0.03); transition: background 0.1s; }
tbody tr:last-child { border-bottom: none; }
tbody tr:hover { background: rgba(255,255,255,0.02); }
tbody td { padding: 10px 12px; font-size: 12.5px; vertical-align: middle; }
td.dim { color: var(--text-2); }
td.num { font-family: 'Syne', sans-serif; font-weight: 600; font-size: 13px; }

/* ── BADGES ──────────────────────────────────────────────── */
.badge {
  display: inline-flex; align-items: center;
  font-size: 10px; font-weight: 600; letter-spacing: 0.04em;
  padding: 2px 7px; border-radius: 20px; text-transform: uppercase;
}
.bg  { background: var(--green-dim);  color: var(--green); }
.br  { background: var(--red-dim);    color: var(--red); }
.ba  { background: var(--gold-dim);   color: var(--gold); }
.bb  { background: var(--blue-dim);   color: var(--blue); }
.bp  { background: var(--purple-dim); color: var(--purple); }
.bx  { background: rgba(255,255,255,0.06); color: var(--text-2); }

/* ── FORMS ───────────────────────────────────────────────── */
.form-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 14px; }
.fg { display: flex; flex-direction: column; gap: 7px; }
.fg.full { grid-column: 1 / -1; }
label {
  font-size: 10px; font-weight: 500; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--text-2);
}
input, select, textarea {
  font-family: 'Epilogue', sans-serif; font-size: 13px;
  padding: 9px 13px; background: var(--bg-input);
  border: 1px solid var(--border); border-radius: var(--r-sm);
  color: var(--text-1); outline: none; width: 100%;
  transition: border-color 0.15s, box-shadow 0.15s;
  -webkit-appearance: none;
}
input::placeholder, textarea::placeholder { color: var(--text-3); }
input:focus, select:focus, textarea:focus {
  border-color: rgba(212,168,71,0.4);
  box-shadow: 0 0 0 3px var(--gold-dim);
}
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%234a4642' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 11px center;
  padding-right: 32px; cursor: pointer;
}
select option { background: #161b20; }
textarea { resize: vertical; min-height: 72px; line-height: 1.5; }
.form-foot { margin-top: 18px; display: flex; align-items: center; gap: 12px; }
.form-hint { font-size: 12px; color: var(--gold); font-weight: 500; }

/* ── BUTTONS ─────────────────────────────────────────────── */
.btn {
  font-family: 'Epilogue', sans-serif; font-size: 12.5px; font-weight: 500;
  padding: 8px 16px; border: none; border-radius: var(--r-sm);
  cursor: pointer; transition: all 0.15s;
  display: inline-flex; align-items: center; gap: 6px;
  text-decoration: none; white-space: nowrap; letter-spacing: 0.01em;
}
.btn:disabled { opacity: 0.45; cursor: not-allowed; }
.btn-gold {
  background: var(--gold); color: #0a0800; font-weight: 600;
}
.btn-gold:hover:not(:disabled) {
  background: var(--gold-bright);
  box-shadow: 0 4px 14px var(--gold-glow);
  transform: translateY(-1px);
}
.btn-ghost {
  background: var(--bg-raised); color: var(--text-1);
  border: 1px solid var(--border);
}
.btn-ghost:hover:not(:disabled) { border-color: var(--border-mid); }
.btn-danger { background: var(--red-dim); color: var(--red); border: 1px solid rgba(248,113,113,0.15); }
.btn-sm { font-size: 11px; padding: 5px 11px; }

/* ── TOAST ───────────────────────────────────────────────── */
.toast {
  position: fixed; bottom: 20px; right: 20px;
  background: var(--bg-raised); border: 1px solid var(--border-mid);
  color: var(--text-1); padding: 11px 16px;
  border-radius: var(--r); font-size: 13px; font-weight: 500;
  box-shadow: var(--shadow-lg); z-index: 9999;
  transform: translateY(10px); opacity: 0;
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex; align-items: center; gap: 9px;
}
.toast.show { transform: translateY(0); opacity: 1; }
.t-icon {
  width: 18px; height: 18px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: 700; flex-shrink: 0;
  background: var(--green-dim); color: var(--green);
}
.toast.err .t-icon { background: var(--red-dim); color: var(--red); }

/* ── EMPTY STATE ─────────────────────────────────────────── */
.empty { text-align: center; padding: 36px 20px; color: var(--text-3); }
.empty-ico { font-size: 28px; margin-bottom: 10px; opacity: 0.5; }
.empty p { font-size: 12px; }

/* ── MINI SPARKLINE ──────────────────────────────────────── */
.sparkline { display: flex; align-items: flex-end; gap: 2px; height: 28px; margin-top: 8px; }
.spark-bar {
  flex: 1; background: var(--gold-dim); border-radius: 2px 2px 0 0;
  transition: background 0.2s; min-height: 2px;
}
.spark-bar:hover { background: var(--gold); }
.kpi.g .spark-bar { background: var(--green-dim); }
.kpi.g .spark-bar:hover { background: var(--green); }

/* ── DONUT ───────────────────────────────────────────────── */
.donut-wrap { display: flex; align-items: center; gap: 20px; }
.donut-legend { display: flex; flex-direction: column; gap: 8px; flex: 1; }
.legend-item { display: flex; align-items: center; gap: 8px; font-size: 12px; }
.legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.legend-label { color: var(--text-2); flex: 1; }
.legend-val { font-family: 'Syne', sans-serif; font-weight: 600; font-size: 13px; }

/* ── PAGE ANIM ───────────────────────────────────────────── */
@keyframes fadeUp { from { opacity:0; transform:translateY(10px);} to { opacity:1; transform:translateY(0);} }
.page-header { animation: fadeUp 0.3s ease both; }
.kpi-row     { animation: fadeUp 0.32s ease 0.04s both; }
.anim-1      { animation: fadeUp 0.34s ease 0.08s both; }
.anim-2      { animation: fadeUp 0.34s ease 0.12s both; }
.anim-3      { animation: fadeUp 0.34s ease 0.16s both; }
.anim-4      { animation: fadeUp 0.34s ease 0.20s both; }

/* ── QUICK ACTION GRID ───────────────────────────────────── */
.action-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; }
.action-btn {
  display: flex; flex-direction: column; align-items: flex-start;
  gap: 4px; padding: 14px; border-radius: var(--r);
  background: var(--bg-raised); border: 1px solid var(--border);
  text-decoration: none; transition: all 0.15s; cursor: pointer;
}
.action-btn:hover { border-color: var(--border-mid); background: var(--bg-hover); transform: translateY(-1px); }
.action-ico { font-size: 18px; }
.action-label { font-size: 11.5px; font-weight: 500; color: var(--text-1); }
.action-desc { font-size: 10px; color: var(--text-3); }

/* ── HEALTH UPCOMING ─────────────────────────────────────── */
.followup-item {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 0; border-bottom: 1px solid var(--border);
  font-size: 12px;
}
.followup-item:last-child { border: none; }

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 900px) {
  .kpi-row { grid-template-columns: repeat(3,1fr); }
  .g2, .g21, .g12, .g3 { grid-template-columns: 1fr; }
  .action-grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 600px) {
  .kpi-row { grid-template-columns: repeat(2,1fr); }
  .nav-link { display: none; }
  .nav-link.active { display: flex; }
}
