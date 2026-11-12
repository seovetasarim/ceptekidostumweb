// Cepteki Dostum — tanıtım sitesi.
// ===== TEK DÜZENLEME YERİ: mağaza linkleri, e-posta ve sosyal hesaplar =====
const SITE = {
  appStore: '',            // ör. https://apps.apple.com/app/id1234567890
  googlePlay: 'https://play.google.com/store/apps/details?id=com.ceptekidostum.app',
  email: '',               // ör. destek@alanadin.com
  developer: '',           // ör. Ad Soyad veya şirket adı (gizlilik politikası için)
  social: {
    youtube: 'https://www.youtube.com/@ceptekidostum',
    instagram: 'https://www.instagram.com/ceptekidostum',
    tiktok: 'https://www.tiktok.com/@ceptekidostum',
    facebook: 'https://www.facebook.com/ceptekidostum',
  },
};
// ==========================================================================

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body.dataset.page || 'home';
const home = page === 'home' ? '' : 'index.html';

const ICON = {
  home: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3 2 11.5h3V21h5.5v-6h3v6H19v-9.5h3z"/></svg>',
  pad: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7 7h10a5 5 0 0 1 4.9 6l-.8 4a2.6 2.6 0 0 1-4.5 1.2L14.4 16H9.6l-2.2 2.2A2.6 2.6 0 0 1 2.9 17l-.8-4A5 5 0 0 1 7 7m.5 2.5v1.5H6v1.5h1.5V14H9v-1.5h1.5V11H9V9.5zm8.3.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>',
  pic: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 13h16l-5-6.5-3.8 4.8-2.7-3.3zM8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>',
  q: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path fill="#8a4210" d="M12 6.5c-2 0-3.6 1.3-3.7 3.2h2.2c.1-.8.7-1.2 1.5-1.2s1.4.5 1.4 1.2c0 1.5-2.6 1.4-2.6 4.1h2.2c0-1.9 2.7-2 2.7-4.2 0-1.9-1.6-3.1-3.7-3.1m-1.3 9.2v2.2h2.4v-2.2z"/></svg>',
  head: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a8 8 0 0 0-8 8v5a3 3 0 0 0 3 3h1v-7H6v-1a6 6 0 0 1 12 0v1h-2v7h1.5l-.4 1H13v1.5h4.2a1.5 1.5 0 0 0 1.4-1L19.3 19A3 3 0 0 0 20 17v-6a8 8 0 0 0-8-8"/></svg>',
  dl: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11 3h2v9.2l3.3-3.3 1.4 1.4L12 16 6.3 10.3l1.4-1.4 3.3 3.3zM4 18h16v2H4z"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2.4H3zm0 4.8h18v2.4H3zm0 4.8h18V18H3z"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path fill="#00d4ff" d="M3.6 2.2 13.4 12 3.6 21.8a1.6 1.6 0 0 1-.6-1.3V3.5c0-.5.2-1 .6-1.3"/><path fill="#00f076" d="m16.6 8.8-3.2 3.2-9.8-9.8.3-.1c.5-.2 1-.2 1.5.1z"/><path fill="#ff3a44" d="M13.4 12l3.2 3.2-11.2 6.6c-.5.3-1 .3-1.5.1l-.3-.1z"/><path fill="#ffd400" d="m16.6 8.8 3.8 2.2c1 .6 1 1.9 0 2.4l-3.8 2.2-3.2-3.2z"/></svg>',
  apple: '<svg viewBox="0 0 384 512"><path fill="#fff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.7 4.5c2.2 0 3.6 1.3 4.3 2.4.7-1.1 2.1-2.4 4.3-2.4 3.7 0 5.8 3.8 4.3 7.2C19.5 16.4 12 21 12 21"/></svg>',
  yt: '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4.2" fill="#fff"/><path fill="#ff0033" d="M10 8.7v6.6l5.7-3.3z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.3" cy="6.7" r="1.25" fill="#fff" stroke="none"/></svg>',
  tt: (() => { const d = 'M16.6 2.5h-3.1v12.6a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6 0 .8.1V9.3a5.9 5.9 0 1 0 5 5.8V8.7a7.4 7.4 0 0 0 4.3 1.4V7a4.3 4.3 0 0 1-4.3-4.5'; return `<svg viewBox="0 0 24 24"><path fill="#25f4ee" transform="translate(-.8 -.6)" d="${d}"/><path fill="#fe2c55" transform="translate(.8 .6)" d="${d}"/><path fill="#fff" d="${d}"/></svg>`; })(),
  fb: '<svg viewBox="0 0 24 24"><path fill="#fff" d="M13.4 22v-8.4h2.9l.4-3.4h-3.3V8.1c0-1 .3-1.6 1.7-1.6h1.8V3.4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.5H7v3.4h2.9V22z"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  prev: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" d="M15 5l-7 7 7 7"/></svg>',
  next: '<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7"/></svg>',
};

const storeBtn = (kind) => {
  const url = kind === 'play' ? SITE.googlePlay : SITE.appStore;
  const name = kind === 'play' ? 'Google Play' : 'App Store';
  return `<a class="store${url ? '' : ' soon'}" href="${url || '#'}" ${url ? 'target="_blank" rel="noopener"' : 'data-soon'}>${ICON[kind === 'play' ? 'play' : 'apple']}<span><b>${name}</b><small>${url ? 'Hemen İndir' : 'Çok Yakında'}</small></span></a>`;
};

// ---- Üst menü + alt kısım (tüm sayfalarda aynı) ----
function chrome() {
  const links = [['anasayfa', 'Anasayfa', ICON.home, `${home}#anasayfa`], ['oyun', 'Oyun Hakkında', ICON.pad, `${home}#oyun`], ['ozellikler', 'Özellikler', ICON.star, `${home}#ozellikler`],
    ['ekranlar', 'Ekran Görüntüleri', ICON.pic, `${home}#ekranlar`], ['sss', 'S.S.S', ICON.q, `${home}#sss`], ['destek', 'Destek', ICON.head, 'destek.html']];
  const nav = $('header[data-nav]');
  if (nav) {
    nav.className = 'nav';
    nav.innerHTML = `<div class="wrap"><a class="logo-a" href="${home || '#anasayfa'}" aria-label="Cepteki Dostum anasayfa"><img class="logo" src="img/logo.webp" alt="Cepteki Dostum"></a>
      <ul>${links.map(([id, t, ic, href]) => `<li><a href="${href}" data-id="${id}">${ic}${t}</a></li>`).join('')}</ul>
      <a class="btn-dl" href="${home}#indir">${ICON.dl}<span>Oyunu İndir</span></a>
      <button class="menu-btn" aria-label="Menüyü aç" aria-expanded="false"><i></i><i></i><i></i></button></div>`;
    // Sağdan açılan menü (tablet / telefon)
    const subs = { anasayfa: 'Başlangıç', oyun: 'Neden Cepteki Dostum?', ozellikler: 'Besle, yıka, oyna', ekranlar: 'Oyundan kareler', sss: 'Merak edilenler', destek: 'Bize ulaş' };
    const dw = document.createElement('aside'); dw.className = 'drawer'; dw.setAttribute('aria-hidden', 'true');
    dw.innerHTML = `<div class="dw-head"><img class="dw-logo" src="img/logo.webp" alt="Cepteki Dostum"><button class="dw-x" aria-label="Menüyü kapat"><i></i><i></i></button></div>
      <div class="dw-hello"><img src="img/dog.webp" alt=""><div><b>Hoş geldin!</b><span>Minik dostun seni bekliyor 🐾</span></div></div>
      <nav class="dw-links">${links.map(([id, t, ic, href], i) => `<a href="${href}" data-id="${id}" style="--i:${i}"><span class="dw-ic">${ic}</span><span class="dw-t"><b>${t}</b><small>${subs[id] || ''}</small></span><svg class="dw-go" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7"/></svg></a>`).join('')}</nav>
      <div class="dw-foot"><p>Hemen indir, ücretsiz oyna!</p><div class="stores">${storeBtn('play')}${storeBtn('apple')}</div>
        <div class="dw-legal"><a href="gizlilik.html">Gizlilik</a><span>•</span><a href="kosullar.html">Koşullar</a><span>•</span><a href="hesap-silme.html">Hesap Silme</a></div></div>`;
    const dd = document.createElement('div'); dd.className = 'dw-dim';
    const layer = document.createElement('div'); layer.className = 'dw-layer'; layer.appendChild(dw);
    document.body.append(dd, layer);
    const mb = $('.menu-btn', nav);
    const setOpen = (v) => {
      document.documentElement.classList.toggle('dw-open', v);
      mb.setAttribute('aria-expanded', v); dw.setAttribute('aria-hidden', !v);
      if (v) $('.dw-x', dw).focus({ preventScroll: true });
    };
    mb.addEventListener('click', () => setOpen(!document.documentElement.classList.contains('dw-open')));
    $('.dw-x', dw).addEventListener('click', () => setOpen(false));
    dd.addEventListener('click', () => setOpen(false));
    $$('.dw-links a', dw).forEach((a) => a.addEventListener('click', () => setOpen(false)));
    addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    let sx = null;
    dw.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
    dw.addEventListener('touchmove', (e) => { if (sx == null) return; const dx = Math.max(0, e.touches[0].clientX - sx); dw.style.transform = `translateX(${dx}px)`; dw.style.transition = 'none'; }, { passive: true });
    dw.addEventListener('touchend', (e) => { const dx = e.changedTouches[0].clientX - (sx ?? 0); dw.style.transform = ''; dw.style.transition = ''; sx = null; if (dx > 70) setOpen(false); });
    addEventListener('resize', () => { if (innerWidth > 1150) setOpen(false); });
    $$('ul a', nav).forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));
    const cur = { destek: 'destek' }[page] || (page === 'home' ? 'anasayfa' : '');
    $$('ul a, .dw-links a').forEach((a) => a.classList.toggle('on', a.dataset.id === cur));
  }
  const foot = $('footer[data-foot]');
  if (foot) {
    const soc = [['youtube', 'yt', ICON.yt], ['instagram', 'ig', ICON.ig], ['tiktok', 'tt', ICON.tt], ['facebook', 'fb', ICON.fb]];
    foot.className = 'foot';
    foot.innerHTML = `<img class="flw l" src="img/deco-left.webp" alt=""><img class="flw r" src="img/deco-right.webp" alt="">
      <div class="wrap"><div class="cols">
        <div><img class="flogo" src="img/logo.webp" alt="Cepteki Dostum"><p>Cepteki Dostum, sevimli dostuna ilgilenebileceğin, besleyip büyütebileceğin, eğlenceli ve renkli bir sanal pet oyunudur.</p></div>
        <div><h4>Hızlı Bağlantılar</h4><ul><li><a href="${home}#anasayfa">Anasayfa</a></li><li><a href="${home}#oyun">Oyun Hakkında</a></li><li><a href="${home}#ozellikler">Özellikler</a></li><li><a href="${home}#ekranlar">Ekran Görüntüleri</a></li></ul></div>
        <div><h4>Destek</h4><ul><li><a href="${home}#sss">Sık Sorulan Sorular</a></li><li><a href="destek.html">Bize Ulaşın</a></li><li><a href="destek.html#sorun">Geri Bildirim</a></li><li><a href="destek.html#sorun">Sorun Bildir</a></li></ul></div>
        <div><h4>Bizi Takip Edin</h4><div class="socials">${soc.map(([k, c, ic]) => `<a class="${c}" href="${SITE.social[k] || '#'}" ${SITE.social[k] ? 'target="_blank" rel="noopener"' : 'data-soon-social'} aria-label="${k}">${ic}</a>`).join('')}</div></div>
        <div id="indir-alt"><h4>Uygulamayı İndir</h4><div class="stores">${storeBtn('play')}${storeBtn('apple')}</div></div>
      </div>
      <div class="legal"><span>© ${new Date().getFullYear()} Cepteki Dostum. Tüm hakları saklıdır.</span><img class="pawmark" src="img/st-paw.webp" alt=""><a href="gizlilik.html">Gizlilik Politikası</a><span class="sep">|</span><a href="kosullar.html">Kullanım Şartları</a><span class="sep">|</span><a href="gizlilik.html#cerez">Çerez Politikası</a></div></div>`;
  }
  $$('[data-stores]').forEach((e) => { e.innerHTML = storeBtn('play') + storeBtn('apple'); });
  document.addEventListener('click', (e) => {
    const s = e.target.closest('[data-soon]');
    if (s) { e.preventDefault(); toast('App Store sürümü çok yakında! 🐾'); }
    if (e.target.closest('[data-soon-social]')) { e.preventDefault(); toast('Sosyal medya hesaplarımız çok yakında! 🐾'); }
  });
  // Doldurulacak bilgiler (e-posta, geliştirici adı)
  $$('[data-fill]').forEach((e) => {
    const k = e.dataset.fill, v = SITE[k];
    if (k === 'email') {
      if (v) { if (e.tagName === 'A') e.href = `mailto:${v}`; if (!e.dataset.keep) e.textContent = v; }
      else if (!e.dataset.keep) { e.textContent = 'e-posta adresi yakında eklenecek'; }
    } else e.textContent = v || 'Cepteki Dostum';
  });
}

function toast(msg) {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t);
    Object.assign(t.style, { position: 'fixed', left: '50%', bottom: '30px', transform: 'translateX(-50%)', padding: '14px 26px', borderRadius: '999px', background: '#5f1db0', color: '#fff', fontSize: '20px', fontWeight: 800, zIndex: 99, boxShadow: '0 8px 20px rgba(0,0,0,.3)', transition: 'opacity .3s' }); }
  t.textContent = msg; t.style.opacity = 1; clearTimeout(t._h); t._h = setTimeout(() => { t.style.opacity = 0; }, 2400);
}

// ---- Görünür olunca beliren öğeler ----
function reveals() {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  $$('.reveal').forEach((e) => io.observe(e));
  // Menüde bulunduğun bölümü işaretle
  if (page === 'home') {
    const map = $$('.nav ul a');
    const so = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) [...map, ...$$('.dw-links a')].forEach((a) => a.classList.toggle('on', a.dataset.id === e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
    $$('section[id]').forEach((s) => so.observe(s));
  }
}

// ---- Süslemeler: kalpler, ışıltılar, kelebekler, uçan altınlar ----
function decorate() {
  $$('[data-hearts]').forEach((box) => {
    for (let i = 0; i < 6; i++) {
      const h = document.createElement('i'); h.className = 'heart'; h.innerHTML = ICON.heart;
      const s = 18 + Math.random() * 22;
      Object.assign(h.style, { width: `${s}px`, height: `${s}px`, left: `${62 + Math.random() * 35}%`, top: `${Math.random() * 18}%`, animationDelay: `${i * .55}s`, animationDuration: `${2.8 + Math.random() * 1.5}s` });
      h.style.setProperty('--x', `${(Math.random() - .5) * 80}px`);
      box.appendChild(h);
    }
  });
  $$('[data-sparkles]').forEach((box) => {
    const n = Math.ceil((+box.dataset.sparkles || 6) * (innerWidth < 700 ? .5 : 1));
    for (let i = 0; i < n; i++) {
      const s = document.createElement('img'); s.className = 'sparkle'; s.src = 'img/sparkle.webp'; s.alt = '';
      const z = 18 + Math.random() * 26;
      Object.assign(s.style, { left: `${Math.random() * 94}%`, top: `${Math.random() * 90}%`, width: `${z}px` });
      s.style.setProperty('--d', `${Math.random() * 3}s`); s.style.setProperty('--t', `${2 + Math.random() * 2}s`);
      box.appendChild(s);
    }
  });
  $$('[data-coins]').forEach((box) => {
    for (let i = 0; i < 6; i++) {
      const c = document.createElement('img'); c.className = 'coin-pop'; c.src = `img/${i % 3 ? 'coin' : 'gem'}.webp`; c.alt = '';
      Object.assign(c.style, { left: `${35 + Math.random() * 30}%`, top: '35%' });
      c.style.setProperty('--d', `${i * .4}s`); c.style.setProperty('--x', `${(Math.random() - .5) * 220}px`);
      box.appendChild(c);
    }
  });
}

// ---- Ekran görüntüsü kaydırıcı ----
function slider() {
  const s = $('.slider'); if (!s) return;
  const track = $('.slides', s), items = $$('.slide', s), dots = $('.dots');
  const per = () => (innerWidth < 700 ? 2 : 3);
  let i = 0, timer;
  const pages = () => Math.max(1, items.length - per() + 1);
  const go = (n) => {
    i = (n + pages()) % pages();
    items.forEach((it) => { it.style.flexBasis = `${100 / per()}%`; });
    track.style.transform = `translateX(${-i * (100 / per())}%)`;
    if (dots) dots.innerHTML = Array.from({ length: pages() }, (_, k) => `<button aria-label="${k + 1}" class="${k === i ? 'on' : ''}"></button>`).join('');
    $$('button', dots).forEach((b, k) => b.addEventListener('click', () => { go(k); restart(); }));
  };
  const restart = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), 3500); };
  $('.arrow.prev', s.parentElement)?.addEventListener('click', () => { go(i - 1); restart(); });
  $('.arrow.next', s.parentElement)?.addEventListener('click', () => { go(i + 1); restart(); });
  let x0 = null;
  s.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  s.addEventListener('touchend', (e) => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { go(i + (dx < 0 ? 1 : -1)); restart(); } x0 = null; });
  addEventListener('resize', () => go(i));
  go(0); restart();
}

// ---- Telefondaki ekranlar sırayla değişsin ----
function phone() {
  const sc = $$('.phone .scr'); if (sc.length < 2) return;
  // next screen is loaded before it fades in (screens are lazy)
  const ready = (i) => { const im = sc[i]; im.loading = 'eager'; return im.complete && im.naturalWidth > 0; };
  let k = 0; ready(1);
  setInterval(() => {
    const n = (k + 1) % sc.length;
    if (!ready(n)) return;
    sc[k].classList.remove('on'); k = n; sc[k].classList.add('on'); ready((k + 1) % sc.length);
  }, 2800);
}

// ---- SSS açılır kapanır ----
function faq() {
  $$('.qa button').forEach((b) => b.addEventListener('click', () => {
    const q = b.parentElement, open = !q.classList.contains('open');
    $$('.qa.open').forEach((o) => o.classList.remove('open'));
    q.classList.toggle('open', open);
    b.setAttribute('aria-expanded', open);
  }));
}

// ---- Fareyle hafif derinlik (kahraman bölüm) ----
function parallax() {
  const hero = $('.hero'); if (!hero || matchMedia('(pointer: coarse)').matches) return;
  const layers = $$('[data-depth]', hero);
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    layers.forEach((l) => { const d = +l.dataset.depth; l.style.translate = `${x * d}px ${y * d}px`; });
  });
}

// Oda arka planı yoksa sıcak bir degrade kullan.
function heroBg() {
  return;
}

// ---- Mobil: yapışkan indir çubuğu + kayan şerit noktaları ----
function mobile() {
  const bar = document.createElement('div'); bar.className = 'mob-dl';
  bar.innerHTML = `<img src="img/dog.webp" alt=""><b>Cepteki Dostum'u<br>ücretsiz indir!</b><a href="${SITE.googlePlay || '#'}" ${SITE.googlePlay ? 'target="_blank" rel="noopener"' : 'data-soon'} aria-label="Google Play">${ICON.play}</a><a href="${SITE.appStore || '#'}" ${SITE.appStore ? 'target="_blank" rel="noopener"' : 'data-soon'} aria-label="App Store">${ICON.apple}</a>`;
  document.body.appendChild(bar);
  const hero = $('.hero'), foot = $('footer');
  let tick = false;
  const upd = () => {
    tick = false;
    const past = hero ? hero.getBoundingClientRect().bottom < 0 : scrollY > 300;
    const atFoot = foot && foot.getBoundingClientRect().top < innerHeight - 40;
    bar.classList.toggle('show', past && !atFoot);
  };
  addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
  upd();
  const strip = $('.features .wrap');
  if (strip) {
    const hint = document.createElement('div'); hint.className = 'swipe-hint';
    const cards = $$('.feat', strip);
    hint.innerHTML = cards.map(() => '<i></i>').join('');
    strip.after(hint);
    const dots = $$('i', hint);
    const mark = () => { const i = Math.round(strip.scrollLeft / Math.max(1, cards[0].offsetWidth + 12)); dots.forEach((d, k) => d.classList.toggle('on', k === Math.min(i, dots.length - 1))); };
    strip.addEventListener('scroll', () => requestAnimationFrame(mark), { passive: true }); mark();
    if (getComputedStyle(hint).display === 'none') hint.remove();
  }
}

chrome(); heroBg(); decorate(); reveals(); slider(); phone(); faq(); parallax(); mobile();
