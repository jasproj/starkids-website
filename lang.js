/* PT/EN toggle for site pages. Shares the 'starkids_lang' key with the home page. */
(function () {
  var KEY = 'starkids_lang';
  var posBottom = document.currentScript && document.currentScript.getAttribute('data-pos') === 'bottom';
  var lang = 'pt';
  try { lang = localStorage.getItem(KEY) || 'pt'; } catch (e) {}
  var root = document.documentElement;
  var titlePt = document.title;

  var style = document.createElement('style');
  style.textContent =
    '.sk-lang{position:fixed;' + (posBottom ? 'bottom:16px;right:16px;' : 'top:12px;right:12px;') + 'z-index:9999;background:#fff;color:#1B5E20;' +
    'border:2px solid #2E7D32;border-radius:999px;padding:6px 14px;font:700 13px/1 system-ui,sans-serif;' +
    'letter-spacing:1px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.15)}' +
    '.sk-lang:hover{background:#2E7D32;color:#fff}@media print{.sk-lang{display:none}}';
  document.head.appendChild(style);

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'sk-lang';
  btn.setAttribute('aria-label', 'Switch language');
  document.body.appendChild(btn);

  function apply(l) {
    lang = l;
    root.setAttribute('lang', l === 'en' ? 'en' : 'pt-BR');
    var nodes = document.querySelectorAll('[data-pt][data-en]');
    for (var i = 0; i < nodes.length; i++) nodes[i].innerHTML = nodes[i].getAttribute('data-' + l);
    var te = root.getAttribute('data-title-en');
    document.title = (l === 'en' && te) ? te : titlePt;
    btn.textContent = l === 'en' ? 'PT' : 'EN';
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }
  btn.addEventListener('click', function () { apply(lang === 'en' ? 'pt' : 'en'); });
  apply(lang);
})();
