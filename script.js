:root {
  --bg: #0d1321;
  --panel: #171f2f;
  --panel-strong: #101827;
  --panel-soft: #1d2940;
  --card: rgba(255, 255, 255, 0.04);
  --card-hover: rgba(255, 255, 255, 0.06);
  --text: #f3f4f6;
  --muted: #c1c8d6;
  --gold: #d4a574;
  --gold-dark: #a77743;
  --line: rgba(196, 202, 218, 0.18);
  --success: #83dba8;
  --danger: #ff7a7a;
  --shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  --container: min(1200px, calc(100% - 2rem));
}

body.light-mode {
  --bg: #f5f1ea;
  --panel: #ffffff;
  --panel-strong: #f0ede8;
  --panel-soft: #f9f5f0;
  --card: rgba(17, 24, 39, 0.02);
  --card-hover: rgba(17, 24, 39, 0.04);
  --text: #1a1a1a;
  --muted: #525d71;
  --gold: #b57d40;
  --gold-dark: #8b5a2b;
  --line: rgba(24, 38, 54, 0.08);
  --shadow: 0 18px 42px rgba(27, 38, 61, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, var(--bg) 0%, #0f172a 100%);
  color: var(--text);
  transition: background 0.25s ease, color 0.25s ease;
}

body.light-mode {
  background: linear-gradient(180deg, var(--bg) 0%, #efe7de 100%);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: var(--container);
  margin: 0 auto;
}

.section {
  padding: 5rem 0;
}

.section-alt {
  background: rgba(255, 255, 255, 0.015);
}

.eyebrow {
  margin: 0 0 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--gold);
}

h1,
h2,
h3,
h4 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  letter-spacing: -0.03em;
}

h1 {
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 0.92;
}

h2 {
  font-size: clamp(2.4rem, 4vw, 3.5rem);
  line-height: 1;
}

h3 {
  font-size: clamp(1.8rem, 2vw, 2.3rem);
}

p {
  color: var(--muted);
  line-height: 1.7;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(9, 13, 23, 0.82);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

body.light-mode .topbar {
  background: rgba(255, 255, 255, 0.8);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(212, 165, 116, 0.16);
  border: 1px solid rgba(212, 165, 116, 0.35);
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.3rem;
  color: var(--muted);
  font-size: 0.94rem;
}

.desktop-nav a:hover,
.footer-links a:hover,
.text-link:hover {
  color: var(--gold);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.icon-btn,
.menu-toggle {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999px;
  padding: 0.92rem 1.4rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--gold) 0%, #f0c38b 100%);
  color: #111827;
  box-shadow: 0 18px 28px rgba(212, 165, 116, 0.28);
}

.btn-secondary,
.btn-outline {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--text);
}

.btn.small {
  padding: 0.7rem 1rem;
  font-size: 0.8rem;
}

.hero-section {
  padding: 4.5rem 0 3rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
}

.hero-copy {
  padding-right: 1rem;
}

.lead {
  max-width: 620px;
  margin: 1.2rem 0 2rem;
  font-size: 1.04rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.4rem;
}

.stat-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(110px, 1fr));
  gap: 1rem;
  max-width: 520px;
}

.stat-row div {
  padding: 1rem 1.2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 18px;
}

.stat-row strong {
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.stat-row span {
  color: var(--muted);
  font-size: 0.8rem;
}

.hero-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  border: 1px solid var(--line);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.feature-card {
  position: relative;
}

.feature-card img {
  width: 100%;
  height: 100%;
  min-height: 520px;
  object-fit: cover;
}

.card-badge {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  background: rgba(17, 24, 39, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  border-radius: 999px;
  padding: 0.5rem 0.9rem;
  font-size: 0.75rem;
  font-weight: 700;
}

.card-info {
  position: absolute;
  left: 1.2rem;
  right: 1.2rem;
  bottom: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
  padding: 1rem 1.1rem;
  background: rgba(11, 17, 29, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 18px;
  backdrop-filter: blur(10px);
}

.card-info p {
  margin: 0 0 0.2rem;
  color: #dbe2f2;
}

.card-info h3 {
  margin: 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.section-header.center {
  justify-content: center;
  text-align: center;
}

.text-link {
  color: var(--gold);
  font-weight: 600;
}

.auction-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.3rem;
}

.auction-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.auction-card:hover {
  transform: translateY(-4px);
  border-color: rgba(212, 165, 116, 0.7);
}

.auction-image {
  position: relative;
}

.auction-image img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.premium-tag {
  position: absolute;
  inset: 1rem auto auto 1rem;
  background: rgba(212, 165, 116, 0.18);
  border: 1px solid rgba(212, 165, 116, 0.45);
  border-radius: 999px;
  padding: 0.45rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: #f8d8a2;
}

.watch-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(10, 14, 22, 0.65);
  color: #fff;
  border-radius: 50%;
}

.auction-body {
  padding: 1.2rem 1.2rem 1.4rem;
}

.meta-row,
.price-row,
.auction-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.meta-row {
  margin-bottom: 0.8rem;
  font-size: 0.8rem;
  color: var(--muted);
}

.auction-body h3 {
  margin-bottom: 0.3rem;
  font-weight: 600;
}

.auction-description {
  margin: 0.6rem 0 1rem;
  font-size: 0.95rem;
}

.price-row {
  margin-bottom: 1rem;
}

.price-row strong {
  color: var(--gold);
  font-size: 1.6rem;
}

.tag {
  background: rgba(131, 219, 168, 0.12);
  border: 1px solid rgba(131, 219, 168, 0.35);
  color: var(--success);
  padding: 0.36rem 0.6rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.72rem;
}

.auction-footer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
}

.timer {
  font-size: 0.8rem;
  color: var(--muted);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}

.category-card {
  padding: 1.5rem 1.2rem;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  text-align: center;
}

.category-card .icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  margin-bottom: 1rem;
  background: rgba(212, 165, 116, 0.12);
  color: var(--gold);
  font-size: 1.5rem;
}

.event-list {
  display: grid;
  gap: 1rem;
}

.event-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
}

.event-date {
  width: 74px;
  height: 74px;
  border-radius: 18px;
  background: rgba(212, 165, 116, 0.12);
  border: 1px solid rgba(212, 165, 116, 0.28);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--gold);
}

.event-date span {
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 1;
}

.event-date small {
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.filter-bar {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) auto;
  gap: 1rem;
  align-items: end;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 2rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field label,
.checkbox-wrap {
  font-size: 0.82rem;
  color: var(--muted);
  font-weight: 600;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.82rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
}

input:focus,
select:focus,
textarea:focus {
  outline: 2px solid rgba(212, 165, 116, 0.28);
  border-color: rgba(212, 165, 116, 0.45);
}

.checkbox-wrap {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  padding: 0.9rem 1rem;
}

.checkbox-wrap input {
  width: auto;
}

.listing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.detail-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 1.25rem;
  box-shadow: var(--shadow);
}

.detail-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
}

.gallery-stack {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1rem;
}

.gallery-main img,
.gallery-side img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
}

.gallery-main img {
  min-height: 420px;
}

.gallery-side {
  display: grid;
  gap: 1rem;
}

.gallery-side img {
  min-height: 200px;
}

.detail-copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.price-box {
  padding: 1rem 1.1rem;
  background: rgba(212, 165, 116, 0.08);
  border: 1px solid rgba(212, 165, 116, 0.25);
  border-radius: 16px;
}

.price-box strong {
  color: var(--gold);
  font-size: 2rem;
}

.bid-actions {
  display: flex;
  gap: 0.8rem;
}

.bid-form {
  display: flex;
  gap: 0.8rem;
  align-items: end;
}

.bid-form .field {
  flex: 1;
}

.history-list {
  display: grid;
  gap: 0.8rem;
  margin-top: 0.5rem;
}

.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0.9rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 12px;
}

.register-grid,
.contact-grid,
.about-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: center;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 1.6rem 0 0;
  display: grid;
  gap: 0.9rem;
  color: var(--text);
}

.check-list i {
  color: var(--success);
  margin-right: 0.7rem;
}

.form-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 1.2rem;
  box-shadow: var(--shadow);
}

.form-row.two-col {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1.4rem;
}

.dashboard-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1.2rem 1rem;
}

.accent-card {
  background: linear-gradient(145deg, rgba(212, 165, 116, 0.12), rgba(212, 165, 116, 0.03));
  border-color: rgba(212, 165, 116, 0.25);
}

.dashboard-card p {
  margin: 0 0 0.5rem;
}

.dashboard-card h3 {
  font-size: 2rem;
}

.dashboard-panels {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1.25rem;
}

.mini-list {
  display: grid;
  gap: 0.8rem;
  margin-top: 1rem;
}

.mini-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0.9rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.team-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
}

.team-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.team-card h4,
.team-card p {
  padding: 0 1rem;
}

.team-card h4 {
  margin-top: 1rem;
  font-size: 1.7rem;
}

.team-card p {
  margin: 0.2rem 0 1rem;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.testimonial-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1.4rem;
}

.testimonial-card .stars {
  color: var(--gold);
  margin-bottom: 0.85rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.blog-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  overflow: hidden;
}

.blog-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-content {
  padding: 1.1rem 1rem 1.3rem;
}

.blog-content .meta {
  color: var(--gold);
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.contact-info {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.1rem;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.contact-info i {
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(212, 165, 116, 0.12);
  color: var(--gold);
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 1.5rem 0;
  background: rgba(255, 255, 255, 0.015);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 1rem;
  color: var(--muted);
}

.modal {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 100;
}

.modal.hidden {
  display: none;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 14, 0.72);
}

.modal-card {
  position: relative;
  z-index: 1;
  width: min(520px, calc(100% - 2rem));
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 1.4rem;
  box-shadow: var(--shadow);
}

.modal-close {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  width: 38px;
  height: 38px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: transparent;
  color: var(--text);
}

.auth-tabs {
  display: flex;
  gap: 0.8rem;
  margin: 0.7rem 0 1.2rem;
}

.tab-btn {
  flex: 1;
  background: transparent;
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 999px;
  padding: 0.8rem 1rem;
}

.tab-btn.active {
  background: rgba(212, 165, 116, 0.12);
  border-color: rgba(212, 165, 116, 0.35);
  color: var(--gold);
}

.auth-form {
  display: none;
}

.auth-form.active {
  display: block;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1rem 1.2rem 1.3rem;
  border-top: 1px solid var(--line);
}

.mobile-menu.open {
  display: flex;
}

@media (max-width: 980px) {
  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .hero-grid,
  .detail-layout,
  .register-grid,
  .contact-grid,
  .about-grid,
  .dashboard-panels,
  .filter-bar {
    grid-template-columns: 1fr;
  }

  .auction-grid,
  .category-grid,
  .testimonial-grid,
  .blog-grid,
  .dashboard-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .section-header {
    align-items: start;
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .auction-grid,
  .category-grid,
  .testimonial-grid,
  .blog-grid,
  .dashboard-grid,
  .form-row.two-col {
    grid-template-columns: 1fr;
  }

  .hero-section {
    padding-top: 2.8rem;
  }

  .stat-row {
    grid-template-columns: 1fr;
  }

  .nav-actions .btn-outline {
    display: none;
  }

  .card-info {
    flex-direction: column;
    align-items: start;
  }

  .gallery-stack {
    grid-template-columns: 1fr;
  }

  .bid-actions,
  .bid-form,
  .footer-content {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (min-width: 981px) {
  .menu-toggle {
    display: none;
  }
}










































































































































































































































