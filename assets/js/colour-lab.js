// Colour lab for the design system pages. Changes the colour tokens live; nothing is saved to the site.
(function () {
  var root = document.documentElement;
  var host = document.querySelector('[data-colour-lab]');
  if (!host) return;

  var GROUPS = [
    { title: 'Text', rows: [
      ['text', 'Paragraph text', 'Every paragraph, list, table cell and label'],
      ['ink', 'Headings and lines', 'Headings, borders, rules and outlines'],
      ['ink-muted', 'Captions', 'Small notes and hints'],
      ['link', 'Links', 'Links inside paragraphs']
    ] },
    { title: 'Buttons', rows: [
      ['action', 'Button fill', 'The main button'],
      ['on-action', 'Button text', 'Words on the main button'],
      ['action-hover', 'Button hover fill', 'Main button when the pointer is over it'],
      ['on-action-hover', 'Button hover text', 'Words on the hover fill'],
      ['action-active', 'Button pressed fill', 'Main button while pressed'],
      ['on-action-active', 'Button pressed text', 'Words on the pressed fill'],
      ['soft', 'Outline button hover fill', 'Secondary button on hover'],
      ['on-soft', 'Outline button hover text', 'Words on that hover fill'],
      ['inverted', 'Band button fill', 'Button that sits on a gold band, and the dark tile'],
      ['on-inverted', 'Band button text', 'Words on the band button and the dark tile']
    ] },
    { title: 'Surfaces', rows: [
      ['surface', 'Page', 'The page background'],
      ['surface-raised', 'Cards', 'Cards, outlined tiles and read-only fields'],
      ['border', 'Light lines', 'Hairlines between table rows'],
      ['disabled', 'Disabled fill', 'Buttons you cannot use'],
      ['on-disabled', 'Disabled text', 'Words on disabled buttons']
    ] },
    { title: 'Gold and its shades', rows: [
      ['marker', 'Gold', 'Tags, bars, step numbers and the gold tile'],
      ['on-marker', 'Text on gold', 'Words on gold'],
      ['marker-soft', 'Gold tint', 'Table heads, total rows and the tint tile'],
      ['deep', 'Dark gold', 'The dark gold tile'],
      ['on-deep', 'Text on dark gold', 'Words on the dark gold tile'],
      ['accent', 'Accent', 'Visited links and link hover'],
      ['focus', 'Focus border', 'Border of a focused field and a focused tile']
    ] },
    { title: 'Rare accents', rows: [
      ['purple', 'Purple', 'The one accent tile'],
      ['on-purple', 'Text on purple', 'Words on the purple tile'],
      ['error', 'Error red', 'Error icon and thick error border'],
      ['error-soft', 'Error tint', 'Behind the error message'],
      ['on-error-soft', 'Error text', 'The error message']
    ] }
  ];
  var CHECKS = [
    ['Paragraph text on the page', 'text', 'surface', 7],
    ['Paragraph text on cards', 'text', 'surface-raised', 7],
    ['Headings on the page', 'ink', 'surface', 7],
    ['Captions on the page', 'ink-muted', 'surface', 4.5],
    ['Links on the page', 'link', 'surface', 4.5],
    ['Button text on the button', 'on-action', 'action', 4.5],
    ['Hover text on the hover fill', 'on-action-hover', 'action-hover', 4.5],
    ['Pressed text on the pressed fill', 'on-action-active', 'action-active', 4.5],
    ['Band button text', 'on-inverted', 'inverted', 4.5],
    ['Text on gold', 'on-marker', 'marker', 4.5],
    ['Text on dark gold', 'on-deep', 'deep', 4.5],
    ['Text on purple', 'on-purple', 'purple', 4.5],
    ['Error text on the error tint', 'on-error-soft', 'error-soft', 4.5],
    ['Error red on the page', 'error', 'surface', 3]
  ];

  var defaults = {};
  var current = {};
  var key = 'ayo-colour-lab-gold:' + location.pathname.split('/').pop();

  function read(token) {
    var v = getComputedStyle(root).getPropertyValue('--color-' + token).trim();
    return norm(v);
  }
  function norm(v) {
    v = String(v || '').trim().replace(/^#/, '');
    if (/^[0-9a-f]{3}$/i.test(v)) v = v.replace(/./g, function (c) { return c + c; });
    return /^[0-9a-f]{6}$/i.test(v) ? '#' + v.toLowerCase() : null;
  }
  function lum(h) {
    var c = [1, 3, 5].map(function (i) {
      var x = parseInt(h.substr(i, 2), 16) / 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  function ratio(a, b) {
    var x = lum(a), y = lum(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  }
  function apply(token, value) {
    current[token] = value;
    root.style.setProperty('--color-' + token, value);
  }
  function save() {
    try { localStorage.setItem(key, JSON.stringify(current)); } catch (e) { /* storage may be blocked */ }
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  var inputs = {};
  var checkEls = [];

  function refreshChecks() {
    checkEls.forEach(function (c) {
      var r = ratio(current[c.fg], current[c.bg]);
      c.out.textContent = r.toFixed(1) + ' : 1 ' + (r >= c.min ? 'passes' : 'too low (needs ' + c.min + ')');
      c.out.className = r >= c.min ? 'lab-ok' : 'lab-bad';
    });
  }

  function build() {
    var live = el('div', 'lab-live');
    live.setAttribute('aria-label', 'Live preview');
    live.appendChild(el('h3', 'card-title', 'Live preview'));
    live.appendChild(el('p', '', 'This paragraph uses the paragraph colour. I build intelligent systems that stop business owners losing time, money and growth to manual work.'));
    var row = el('div', 'card-foot');
    var b1 = el('button', 'btn btn-primary', 'Email me'); b1.type = 'button';
    var b2 = el('button', 'btn btn-secondary', 'See the offer'); b2.type = 'button';
    var b3 = el('button', 'btn btn-primary', 'Disabled'); b3.type = 'button'; b3.disabled = true;
    row.appendChild(b1); row.appendChild(b2); row.appendChild(b3);
    live.appendChild(row);
    var lp = el('p', '', 'A link looks like ');
    var la = el('a', 'text-link', 'this one'); la.href = '#lab';
    lp.appendChild(la); lp.appendChild(document.createTextNode('.'));
    live.appendChild(lp);
    var tl = el('ul', 'tiles');
    [['tile tile-gold','Gold tile'],['tile tile-ink','Dark tile'],['tile tile-purple','Purple tile'],['tile tile-soft','Tint tile']].forEach(function (t) { var li = el('li', t[0]); li.appendChild(el('h3', '', t[1])); tl.appendChild(li); });
    live.appendChild(tl);
    host.appendChild(live);

    var bar = el('div', 'lab-bar');
    var copy = el('button', 'btn btn-secondary btn-compact', 'Copy all colours'); copy.type = 'button';
    var reset = el('button', 'btn btn-plain btn-compact', 'Reset all'); reset.type = 'button';
    var status = el('p', 'status'); status.setAttribute('role', 'status');
    bar.appendChild(copy); bar.appendChild(reset); bar.appendChild(status);
    host.appendChild(bar);

    GROUPS.forEach(function (g) {
      var sec = el('section', 'lab-group');
      sec.appendChild(el('h3', 'title-small', g.title));
      var list = el('ul', 'lab-list');
      g.rows.forEach(function (r) {
        var token = r[0];
        var li = el('li', 'lab-row');
        var id = 'lab-' + token;
        var label = el('label', 'lab-label'); label.setAttribute('for', id);
        label.appendChild(el('strong', '', r[1]));
        label.appendChild(el('span', 'field-hint', r[2]));
        var pick = document.createElement('input');
        pick.type = 'color'; pick.className = 'lab-pick'; pick.value = current[token];
        pick.setAttribute('aria-label', r[1] + ' colour picker');
        var txt = document.createElement('input');
        txt.type = 'text'; txt.id = id; txt.className = 'field-input lab-hex'; txt.value = current[token].toUpperCase();
        txt.maxLength = 7; txt.spellcheck = false; txt.autocomplete = 'off';
        var msg = el('span', 'field-hint lab-msg');
        txt.addEventListener('input', function () {
          var v = norm(txt.value);
          if (v) { apply(token, v); pick.value = v; txt.removeAttribute('aria-invalid'); msg.textContent = ''; refreshChecks(); save(); }
          else { txt.setAttribute('aria-invalid', 'true'); msg.textContent = 'Use a hex code like #D4A72C'; }
        });
        txt.addEventListener('blur', function () { if (norm(txt.value)) txt.value = current[token].toUpperCase(); });
        pick.addEventListener('input', function () {
          apply(token, pick.value); txt.value = pick.value.toUpperCase(); txt.removeAttribute('aria-invalid'); msg.textContent = ''; refreshChecks(); save();
        });
        inputs[token] = { txt: txt, pick: pick, msg: msg };
        li.appendChild(label); li.appendChild(pick); li.appendChild(txt); li.appendChild(msg);
        list.appendChild(li);
      });
      sec.appendChild(list);
      host.appendChild(sec);
    });

    var cs = el('section', 'lab-group');
    cs.appendChild(el('h3', 'title-small', 'Contrast checks'));
    var cl = el('ul', 'lab-list');
    CHECKS.forEach(function (c) {
      var li = el('li', 'lab-check');
      var out = el('strong');
      li.appendChild(el('span', '', c[0])); li.appendChild(out);
      cl.appendChild(li);
      checkEls.push({ fg: c[1], bg: c[2], min: c[3], out: out });
    });
    cs.appendChild(cl);
    host.appendChild(cs);

    function allText() {
      var lines = [];
      GROUPS.forEach(function (g) { g.rows.forEach(function (r) { lines.push(r[1] + ' (' + r[0] + '): ' + current[r[0]].toUpperCase()); }); });
      return lines.join('\n');
    }
    copy.addEventListener('click', function () {
      var t = allText();
      var ok = function () { status.textContent = 'Copied. Send me these codes and I will lock them in.'; };
      var fb = function () { status.textContent = 'Copy blocked. Select the codes above instead.'; };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ok, fb); else fb();
    });
    reset.addEventListener('click', function () {
      Object.keys(defaults).forEach(function (t) {
        root.style.removeProperty('--color-' + t);
        current[t] = defaults[t];
        inputs[t].txt.value = defaults[t].toUpperCase(); inputs[t].pick.value = defaults[t];
        inputs[t].txt.removeAttribute('aria-invalid'); inputs[t].msg.textContent = '';
      });
      try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
      status.textContent = 'Back to the original colours.';
      refreshChecks();
    });
    refreshChecks();
  }

  GROUPS.forEach(function (g) { g.rows.forEach(function (r) { var v = read(r[0]); defaults[r[0]] = v || '#000000'; current[r[0]] = defaults[r[0]]; }); });
  try {
    var saved = JSON.parse(localStorage.getItem(key));
    if (saved) Object.keys(saved).forEach(function (t) { if (defaults[t] && norm(saved[t])) apply(t, norm(saved[t])); });
  } catch (e) { /* ignore */ }
  host.textContent = '';
  build();
})();
