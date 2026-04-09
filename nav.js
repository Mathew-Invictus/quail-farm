@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --brown-dark:  #3B2010;
  --brown-med:   #7A4828;
  --brown-light: #C49A6C;
  --cream:       #FBF5EC;
  --cream-dark:  #F0E6D3;
  --green-dark:  #2D4A1E;
  --green-med:   #4A7A30;
  --green-light: #D6EAB8;
  --orange:      #D4711A;
  --white:       #FFFFFF;
  --text-dark:   #1A0F05;
  --text-med:    #5C3D1E;
  --text-light:  #9A7A5A;
  --shadow:      0 2px 12px rgba(59,32,16,0.10);
  --shadow-lg:   0 8px 32px rgba(59,32,16,0.15);
  --radius:      12px;
  --radius-sm:   8px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--cream);
  color: var(--text-dark);
  min-height: 100vh;
}

/* ── Nav ── */
nav {
  background: var(--brown-dark);
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 0;
  height: 56px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 16px rgba(0,0,0,0.25);
}

.nav-brand {
  font-family: 'Playfair Display', serif;
  color: var(--cream);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-right: auto;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-brand span { color: var(--brown-light); }

nav a {
  color: rgba(251,245,236,0.7);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  padding: 0 14px;
  height: 56px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  letter-spacing: 0.03em;
}

nav a:hover, nav a.active {
  color: var(--cream);
  border-bottom-color: var(--brown-light);
}

/* ── Page ── */
.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 24px 64px;
}

.page-header {
  margin-bottom: 28px;
}

.page-header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--brown-dark);
  margin-bottom: 4px;
}

.page-header p {
  color: var(--text-light);
  font-size: 14px;
}

/* ── Cards ── */
.card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  border: 1px solid rgba(196,154,108,0.2);
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--brown-dark);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--cream-dark);
}

/* ── KPI grid ── */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 28px;
}

.kpi {
  background: var(--white);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  border: 1px solid rgba(196,154,108,0.2);
  border-left: 4px solid var(--brown-light);
}

.kpi.green  { border-left-color: var(--green-med); }
.kpi.orange { border-left-color: var(--orange); }
.kpi.dark   { border-left-color: var(--brown-dark); }

.kpi-label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-light);
  margin-bottom: 6px;
}

.kpi-value {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--brown-dark);
  line-height: 1;
}

.kpi-sub {
  font-size: 11px;
  color: var(--text-light);
  margin-top: 4px;
}

/* ── Forms ── */
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group.full { grid-column: 1 / -1; }

label {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-med);
}

input, select, textarea {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  padding: 10px 14px;
  border: 1.5px solid var(--cream-dark);
  border-radius: var(--radius-sm);
  background: var(--cream);
  color: var(--text-dark);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
}

input:focus, select:focus, textarea:focus {
  border-color: var(--brown-light);
  box-shadow: 0 0 0 3px rgba(196,154,108,0.15);
  background: var(--white);
}

textarea { resize: vertical; min-height: 80px; }

/* ── Buttons ── */
.btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 22px;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.02em;
}

.btn-primary {
  background: var(--brown-dark);
  color: var(--cream);
}

.btn-primary:hover { background: var(--brown-med); transform: translateY(-1px); box-shadow: var(--shadow); }

.btn-success {
  background: var(--green-dark);
  color: var(--white);
}

.btn-success:hover { background: var(--green-med); transform: translateY(-1px); }

.btn-sm {
  font-size: 12px;
  padding: 6px 14px;
}

/* ── Table ── */
.table-wrap { overflow-x: auto; margin-top: 20px; }

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

thead th {
  background: var(--brown-dark);
  color: var(--cream);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 10px 14px;
  text-align: left;
  white-space: nowrap;
}

tbody tr {
  border-bottom: 1px solid var(--cream-dark);
  transition: background 0.15s;
}

tbody tr:hover { background: var(--cream); }

tbody td {
  padding: 10px 14px;
  color: var(--text-dark);
  vertical-align: middle;
}

/* ── Toast ── */
.toast {
  position: fixed;
  bottom: 28px;
  right: 28px;
  background: var(--brown-dark);
  color: var(--cream);
  padding: 14px 22px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  box-shadow: var(--shadow-lg);
  z-index: 9999;
  transform: translateY(80px);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
}

.toast.show { transform: translateY(0); opacity: 1; }
.toast.error { background: #7A1E1E; }

/* ── Misc ── */
.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 20px;
  background: var(--green-light);
  color: var(--green-dark);
}

.badge.red { background: #FDDCDC; color: #7A1E1E; }
.badge.orange { background: #FDECD0; color: #8B4513; }

.section-gap { margin-top: 28px; }

.empty-state {
  text-align: center;
  padding: 40px;
  color: var(--text-light);
  font-size: 14px;
}

.loading { opacity: 0.5; pointer-events: none; }

@media (max-width: 640px) {
  nav a { display: none; }
  nav a.active { display: flex; }
  .form-grid { grid-template-columns: 1fr; }
  .kpi-grid { grid-template-columns: 1fr 1fr; }
}
