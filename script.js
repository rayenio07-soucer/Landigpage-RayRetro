@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root {
    --bg: #080b0a;
    --bg-soft: #101512;
    --surface: #151b17;
    --surface-hover: #1b241e;
    --green: #00ff88;
    --text: #f4f7f5;
    --muted: #a0aaa4;
    --border: rgba(255,255,255,.09);
    --shadow: 0 18px 45px rgba(0,0,0,.25);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; scroll-padding-top: 90px; }

body {
    font-family: 'Inter', Arial, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    padding-top: 76px;
}

body.cart-open { overflow: hidden; }
button, input, select { font: inherit; }
button, a, select { -webkit-tap-highlight-color: transparent; }
button { cursor: pointer; }
a { color: inherit; }

.site-header {
    min-height: 76px;
    padding: 14px clamp(18px,5vw,72px);
    background: rgba(0,0,0,.94);
    border-bottom: 1px solid rgba(0,255,136,.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    position: fixed;
    inset: 0 0 auto;
    z-index: 1000;
    backdrop-filter: blur(14px);
}

.brand {
    display: inline-flex;
    gap: 5px;
    align-items: center;
    text-decoration: none;
    font-size: 1.55rem;
    font-weight: 900;
    letter-spacing: -1.2px;
    white-space: nowrap;
}

.brand span { color: var(--text); }
.brand strong { color: var(--green); }

.main-nav { display: flex; align-items: center; gap: clamp(16px,2.5vw,34px); }
.main-nav a { color: #d6ddd8; font-size: .92rem; text-decoration: none; transition: color .2s; }
.main-nav a:hover, .main-nav a:focus-visible { color: var(--green); }

.menu-toggle {
    display: none;
    color: var(--green);
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 7px 10px;
}

.cart-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 13px;
    border: 1px solid rgba(0,255,136,.4);
    border-radius: 10px;
    background: rgba(0,255,136,.08);
    color: var(--text);
    font-weight: 700;
    white-space: nowrap;
    transition: background .2s, transform .2s;
}

.cart-trigger:hover { background: rgba(0,255,136,.16); transform: translateY(-1px); }

.cart-count {
    min-width: 22px;
    height: 22px;
    padding: 0 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 99px;
    background: var(--green);
    color: #001b0d;
    font-size: .75rem;
    font-weight: 900;
}

.inicio {
    min-height: 460px;
    padding: 90px clamp(22px,8vw,120px);
    background: radial-gradient(ellipse at 78% 45%,rgba(0,255,136,.18),transparent 34%),linear-gradient(120deg,#050706,#0b120e 55%,#071a10);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 45px;
    overflow: hidden;
    position: relative;
}

.inicio::after {
    content: "";
    position: absolute;
    inset: auto -8% -55% 35%;
    height: 260px;
    border: 1px solid rgba(0,255,136,.12);
    border-radius: 50%;
    transform: rotate(-12deg);
    pointer-events: none;
}

.hero-content { max-width: 720px; position: relative; z-index: 1; }
.eyebrow { color: var(--green); text-transform: uppercase; font-size: .74rem; letter-spacing: 2.2px; font-weight: 800; margin-bottom: 12px; }

.inicio h1 {
    max-width: 760px;
    font-size: clamp(2.6rem,6vw,5rem);
    line-height: 1.05;
    letter-spacing: -3px;
    margin-bottom: 20px;
}

.inicio h1 span, .about-inner h2 span { color: var(--green); }

.hero-description { max-width: 580px; color: #b8c2bb; font-size: clamp(1rem,1.7vw,1.15rem); margin-bottom: 30px; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }

.button {
    border: 0;
    border-radius: 9px;
    padding: 13px 19px;
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 800;
    text-decoration: none;
    transition: transform .2s, background .2s, box-shadow .2s;
}

.button:hover { transform: translateY(-2px); }
.button-primary { background: var(--green); color: #00190b; box-shadow: 0 8px 28px rgba(0,255,136,.12); }
.button-primary:hover { background: #48ffa9; box-shadow: 0 10px 32px rgba(0,255,136,.2); }
.button-secondary { background: #202a23; border: 1px solid var(--border); color: var(--text); }

.hero-decoration { width: min(34vw,350px); aspect-ratio: 1; position: relative; flex-shrink: 0; }

.hero-symbol {
    position: absolute;
    inset: 10%;
    border: 1px solid rgba(0,255,136,.45);
    border-radius: 30px;
    background: linear-gradient(145deg,rgba(0,255,136,.12),rgba(0,0,0,.25));
    box-shadow: inset 0 0 55px rgba(0,255,136,.08),0 0 70px rgba(0,255,136,.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: clamp(1.6rem,3vw,2.8rem);
    font-weight: 500;
    letter-spacing: 6px;
    color: rgba(255,255,255,.7);
    transform: rotate(4deg);
}

.hero-symbol strong { color: var(--green); font-size: .8em; }
.pixel { width: 20px; height: 20px; background: var(--green); position: absolute; opacity: .7; }
.pixel-one { top: 2%; right: 18%; }
.pixel-two { bottom: 7%; left: 1%; width: 12px; height: 12px; }
.pixel-three { top: 25%; left: 0; width: 8px; height: 8px; }

.section-wrap { padding: 76px clamp(18px,5vw,72px) 90px; }
.section-heading { text-align: center; margin-bottom: 32px; }
.section-heading h2 { font-size: clamp(1.8rem,3.5vw,2.5rem); letter-spacing: -1px; margin-bottom: 7px; }
.section-heading > p:last-child, .promo-strip p { color: var(--muted); }

.promo-strip {
    width: min(1120px,calc(100% - 40px));
    margin: 34px auto 10px;
    padding: clamp(22px,4vw,38px);
    border: 1px solid rgba(0,255,136,.25);
    border-radius: 18px;
    background: linear-gradient(110deg,rgba(0,255,136,.10),rgba(21,27,23,.94) 55%,rgba(0,0,0,.75));
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
}

.promo-kicker { display: block; color: var(--green); font-size: .7rem; font-weight: 900; letter-spacing: 2px; margin-bottom: 8px; }
.promo-strip h2 { font-size: clamp(1.35rem,3vw,2rem); line-height: 1.2; margin-bottom: 8px; }

.featured-section { padding-top: 42px; padding-bottom: 25px; }
.featured-heading { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 20px; }
.featured-heading h2 { font-size: clamp(1.5rem,3vw,2.1rem); line-height: 1.2; }
.featured-pills { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 14px; }

.featured-pill {
    display: flex;
    align-items: center;
    gap: 13px;
    min-width: 0;
    padding: 17px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 13px;
    text-decoration: none;
    transition: transform .2s,border-color .2s,background .2s;
}

.featured-pill:hover { transform: translateY(-3px); border-color: rgba(0,255,136,.4); background: var(--surface-hover); }
.featured-pill > span { display: grid; place-items: center; flex: 0 0 42px; width: 42px; height: 42px; border-radius: 11px; background: rgba(0,255,136,.1); color: var(--green); font-size: 1.4rem; }
.featured-pill strong, .featured-pill small { display: block; }
.featured-pill strong { font-size: .94rem; }
.featured-pill small { color: var(--muted); font-size: .77rem; margin-top: 3px; }

.catalog-tools {
    max-width: 1200px;
    margin: 0 auto 18px;
    display: grid;
    grid-template-columns: minmax(220px,1.7fr) repeat(3,minmax(150px,1fr));
    gap: 12px;
}

.search-box {
    min-height: 48px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 14px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface);
    color: var(--green);
}

.search-box > span { font-size: 1.6rem; line-height: 1; }
.search-box input { width: 100%; min-width: 0; color: var(--text); background: transparent; border: 0; outline: 0; }
.search-box input::placeholder { color: #7d8981; }
.clear-search { border: 0; background: transparent; color: var(--muted); font-size: 1.5rem; padding: 0 2px; }
.filter-field { display: flex; flex-direction: column; gap: 5px; text-align: left; }
.filter-field > span { color: var(--muted); font-size: .73rem; font-weight: 700; }

.filter-field select {
    width: 100%;
    min-height: 48px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface);
    color: var(--text);
    outline: 0;
}

.filter-field select:focus, .search-box:focus-within { border-color: var(--green); }
.results-count { max-width: 1200px; margin: 0 auto 18px; color: var(--muted); font-size: .86rem; }

.cards { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 22px; }

.card {
    min-width: 0;
    overflow: hidden;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    transition: transform .25s,border-color .25s,box-shadow .25s;
}

.card:hover { transform: translateY(-5px); border-color: rgba(0,255,136,.38); box-shadow: var(--shadow); }

.product-image-wrap {
    height: 220px;
    padding: 18px;
    position: relative;
    background: radial-gradient(ellipse at center,rgba(255,255,255,.07),transparent 70%),#0d110f;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-image-wrap img { width: 100%; height: 100%; object-fit: contain; transition: transform .3s; }
.card:hover .product-image-wrap img { transform: scale(1.04); }

.product-tag {
    position: absolute;
    top: 13px;
    left: 13px;
    background: rgba(0,255,136,.12);
    border: 1px solid rgba(0,255,136,.2);
    color: var(--green);
    border-radius: 99px;
    padding: 4px 9px;
    font-size: .67rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .6px;
}

.card-content { padding: 19px; display: flex; flex-direction: column; flex: 1; }
.product-category { color: var(--green); font-size: .7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
.card h3 { font-size: 1.16rem; margin-bottom: 7px; }
.product-description { color: var(--muted); font-size: .9rem; margin-bottom: 20px; }
.product-bottom { margin-top: auto; display: flex; flex-direction: column; gap: 13px; }
.price { color: var(--green); font-size: 1.35rem; font-weight: 900; letter-spacing: -.5px; }

.add-to-cart {
    width: 100%;
    min-height: 43px;
    border: 1px solid rgba(0,255,136,.38);
    border-radius: 8px;
    background: rgba(0,255,136,.08);
    color: var(--green);
    font-weight: 800;
    transition: background .2s,color .2s;
}

.add-to-cart:hover { background: var(--green); color: #00190b; }
.empty-results { max-width: 1200px; margin: 20px auto 0; padding: 45px 20px; text-align: center; border: 1px dashed rgba(255,255,255,.17); border-radius: 15px; color: var(--muted); }
.empty-results h3 { color: var(--text); margin: 8px 0; }
.empty-results .button { margin-top: 18px; }
[hidden] { display: none !important; }

.about-section { padding: 75px 24px; background: linear-gradient(120deg,#0d1510,#080b0a); border-top: 1px solid var(--border); }
.about-inner { width: min(850px,100%); margin: 0 auto; text-align: center; }
.about-inner h2 { font-size: clamp(2rem,5vw,3.3rem); line-height: 1.12; margin-bottom: 18px; }
.about-inner > p:not(.eyebrow) { color: var(--muted); max-width: 680px; margin: 0 auto 22px; }

.text-link { color: var(--green); font-weight: 800; text-decoration: none; }
.text-link:hover { text-decoration: underline; }

.site-footer { padding: 42px clamp(20px,6vw,80px) 20px; background: #030504; border-top: 1px solid rgba(0,255,136,.13); }
.footer-main { width: min(1120px,100%); margin: 0 auto; display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 40px; padding-bottom: 30px; }
.footer-about p { max-width: 350px; color: var(--muted); font-size: .9rem; margin-top: 10px; }
.footer-links { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }
.footer-links h3 { font-size: .9rem; margin-bottom: 4px; }
.footer-links a { color: var(--muted); font-size: .85rem; text-decoration: none; }
.footer-links a:hover, .back-top:hover { color: var(--green); }
.footer-small { color: var(--muted); font-size: .75rem; max-width: 260px; }
.footer-bottom { width: min(1120px,100%); margin: 0 auto; border-top: 1px solid var(--border); padding-top: 17px; display: flex; justify-content: space-between; align-items: center; gap: 15px; }
.back-top { color: var(--muted); text-decoration: none; font-size: .8rem; }

.cart-overlay { position: fixed; inset: 0; z-index: 1090; background: rgba(0,0,0,.65); backdrop-filter: blur(3px); }
.cart-panel {
    position: fixed;
    top: 0;
    right: 0;
    width: min(440px,100%);
    height: 100dvh;
    padding: 25px;
    background: #0d120f;
    border-left: 1px solid rgba(0,255,136,.18);
    z-index: 1100;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform: translateX(105%);
    transition: transform .25s ease;
    overflow-y: auto;
}

.cart-panel.is-open { transform: translateX(0); }
.cart-header { display: flex; align-items: center; justify-content: space-between; }
.cart-header h2 { font-size: 1.7rem; }
.icon-button { border: 1px solid var(--border); background: var(--surface); color: var(--text); border-radius: 8px; font-size: 1.5rem; width: 40px; height: 40px; }
.cart-items { display: flex; flex-direction: column; gap: 14px; overflow-y: auto; flex: 1; }
.cart-empty { color: var(--muted); text-align: center; padding: 35px 10px; }

.cart-item { display: grid; grid-template-columns: 68px 1fr auto; gap: 12px; align-items: start; padding: 12px 0; border-bottom: 1px solid var(--border); }
.cart-item img { width: 68px; height: 68px; object-fit: contain; background: var(--surface); border-radius: 8px; }
.cart-item-info h3 { font-size: .9rem; }
.cart-item-price { color: var(--green); font-weight: 800; font-size: .85rem; margin: 3px 0 8px; }
.quantity-controls { display: flex; align-items: center; gap: 9px; }
.quantity-controls button { width: 27px; height: 27px; border: 1px solid var(--border); border-radius: 6px; background: var(--surface-hover); color: var(--text); }
.quantity-controls button:hover { border-color: var(--green); color: var(--green); }
.quantity-controls span { min-width: 12px; text-align: center; font-size: .88rem; }
.remove-item { align-self: start; padding: 3px; border: 0; background: transparent; color: #ff8d8d; font-size: .8rem; }
.remove-item:hover { text-decoration: underline; }
.cart-footer { border-top: 1px solid var(--border); padding-top: 18px; }
.cart-subtotal { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.cart-subtotal span { color: var(--muted); }
.cart-subtotal strong { font-size: 1.4rem; color: var(--green); }
.checkout-button { width: 100%; }
.checkout-button:disabled { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }
.cart-note { color: #89958d; font-size: .72rem; margin-top: 10px; text-align: center; }

.toast { position: fixed; left: 50%; bottom: 25px; z-index: 1200; max-width: calc(100% - 32px); padding: 12px 18px; background: #eafff3; color: #042112; border-radius: 9px; box-shadow: var(--shadow); font-size: .9rem; font-weight: 700; opacity: 0; transform: translate(-50%,15px); pointer-events: none; transition: opacity .2s,transform .2s; }
.toast.is-visible { opacity: 1; transform: translate(-50%,0); }
:focus-visible { outline: 2px solid var(--green); outline-offset: 3px; }

@media (max-width: 980px) {
    .site-header { gap: 14px; }
    .main-nav { gap: 15px; }
    .cart-trigger { padding: 8px; font-size: .8rem; }
    .catalog-tools { grid-template-columns: repeat(3,minmax(0,1fr)); }
    .search-box { grid-column: 1 / -1; }
    .cards { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .hero-decoration { width: min(30vw,270px); }
}

@media (max-width: 680px) {
    body { padding-top: 68px; }
    .site-header { min-height: 68px; padding: 10px 12px; gap: 10px; }
    .brand { font-size: 1.2rem; }
    .menu-toggle { display: block; }
    .main-nav { display: none; position: absolute; top: 68px; left: 0; right: 0; padding: 18px; background: #050706; border-bottom: 1px solid var(--border); flex-direction: column; gap: 16px; }
    .main-nav.is-open { display: flex; }
    .main-nav a { font-size: .9rem; }
    .cart-trigger { padding: 7px 8px; gap: 5px; font-size: .78rem; }
    .inicio { min-height: auto; padding: 48px 18px; gap: 15px; }
    .inicio h1 { font-size: clamp(2rem,7vw,3rem); letter-spacing: -1px; }
    .hero-description { font-size: .95rem; }
    .hero-decoration { display: none; }
    .section-wrap { padding: 42px 12px 55px; }
    .section-heading h2 { font-size: clamp(1.5rem,5vw,2rem); }
    .promo-strip { width: calc(100% - 28px); margin-top: 20px; padding: 20px; align-items: flex-start; flex-direction: column; gap: 16px; }
    .featured-section { padding-top: 30px; }
    .featured-heading { align-items: flex-start; }
    .featured-pills { grid-template-columns: 1fr; gap: 9px; }
    .featured-pill { padding: 12px; }
    .catalog-tools { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 8px; }
    .search-box { grid-column: 1 / -1; }
    .filter-field > span { font-size: .68rem; }
    .filter-field select { min-height: 42px; font-size: .75rem; padding: 0 5px; }
    .cards { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; }
    .product-image-wrap { height: 140px; padding: 8px; }
    .card-content { padding: 10px; }
    .card h3 { font-size: .95rem; }
    .product-category { font-size: .62rem; }
    .product-description { font-size: .78rem; margin-bottom: 13px; }
    .product-bottom { gap: 9px; }
    .price { font-size: 1rem; }
    .add-to-cart { min-height: 38px; padding: 7px 4px; font-size: .75rem; }
    .product-tag { top: 6px; left: 6px; padding: 3px 6px; font-size: .56rem; }
    .about-section { padding: 45px 18px; }
    .cart-panel { padding: 20px 17px; }
    .footer-main { grid-template-columns: 1fr 1fr; gap: 24px 18px; }
    .footer-about { grid-column: 1 / -1; }
    .footer-bottom { align-items: flex-start; flex-direction: column; }
}

@media (max-width: 380px) {
    .site-header { padding: 8px; gap: 6px; }
    .brand { font-size: 1.05rem; }
    .cart-trigger { padding: 6px; font-size: .7rem; }
    .inicio { padding: 38px 14px; }
    .hero-actions { gap: 8px; }
    .hero-actions .button { width: 100%; }
    .catalog-tools { grid-template-columns: 1fr 1fr; }
    .cards { gap: 7px; }
    .product-image-wrap { height: 115px; }
    .card-content { padding: 8px; }
    .card h3 { font-size: .88rem; }
    .product-description { font-size: .72rem; }
    .price { font-size: .92rem; }
    .add-to-cart { font-size: .68rem; }
    .featured-heading { flex-direction: column; }
    .footer-main { grid-template-columns: 1fr; }
    .footer-about { grid-column: auto; }
}

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
    }
}
