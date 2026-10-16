// The menu, the section highlight in the nav, the copy button and the tile pop-in. Plain JavaScript, no dependencies.
(function () {
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = document.getElementById(btn.getAttribute('data-copy'));
      var status = document.querySelector('[data-copy-status]');
      var done = function () { if (status) status.textContent = 'Copied hello@ayoosota.com'; };
      var fallback = function () {
        input.select();
        try { document.execCommand('copy'); done(); } catch (e) { if (status) status.textContent = 'Press Ctrl+C to copy'; }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(input.value).then(done, fallback); } else { fallback(); }
    });
  });

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function play(grid) {
    grid.classList.remove('play');
    void grid.offsetWidth;
    grid.classList.add('play');
  }
  document.querySelectorAll('[data-replay]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var grid = document.getElementById(btn.getAttribute('data-replay'));
      if (grid) play(grid);
    });
  });
  var pops = document.querySelectorAll('[data-pop]');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { play(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.3 });
    pops.forEach(function (g) { io.observe(g); });
  }
})();

// The menu: a native popover. This script keeps the button label, icon and aria-expanded in step,
// and closes the menu after a link is chosen.
(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var panel = document.getElementById('site-menu');
  if (!toggle || !panel || typeof panel.hidePopover !== 'function') return;
  var icon = toggle.querySelector('[data-menu-icon]');
  panel.addEventListener('toggle', function (e) {
    var open = e.newState === 'open';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (icon) icon.setAttribute('icon', open ? 'ph:x-fill' : 'ph:list-fill');
  });
  panel.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { if (panel.matches(':popover-open')) panel.hidePopover(); });
  });
  window.matchMedia('(min-width: 64rem)').addEventListener('change', function (e) {
    if (e.matches && panel.matches(':popover-open')) panel.hidePopover();
  });
})();

// Marks the nav link of the section you are reading with aria-current="location".
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-list a.nav-link[href^="#"]'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  var map = {};
  links.forEach(function (a) { var s = document.getElementById(a.getAttribute('href').slice(1)); if (s) map[s.id] = a; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      links.forEach(function (a) { a.removeAttribute('aria-current'); });
      var a = map[en.target.id]; if (a) a.setAttribute('aria-current', 'location');
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
})();

// Story paragraph: each key word gets its marker sweep and icon pop as it scrolls into view.
(function () {
  var story = document.querySelector('[data-story]');
  if (!story) return;
  var marks = Array.prototype.slice.call(story.querySelectorAll('.hl'));
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  story.classList.add('is-ready');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-on');
      io.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -20% 0px', threshold: 0 });
  marks.forEach(function (mk) { io.observe(mk); });
})();

// Quadrant: boxes and arrow appear one after another when the map scrolls into view.
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!els.length || reduce || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-on');
      io.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -25% 0px', threshold: 0.1 });
  els.forEach(function (el) { el.classList.add('is-ready'); io.observe(el); });
})();

// Timelines: boxes slide in as they reach the middle of the screen, and the gold line fills with scroll.
(function () {
  var lines = Array.prototype.slice.call(document.querySelectorAll('[data-timeline]'));
  if (!lines.length) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-on');
      io.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -15% 0px', threshold: 0.05 });
  lines.forEach(function (tl) {
    tl.classList.add('is-ready');
    Array.prototype.forEach.call(tl.children, function (box) { io.observe(box); });
  });
  var queued = false;
  function update() {
    queued = false;
    var vh = window.innerHeight;
    lines.forEach(function (tl) {
      var r = tl.getBoundingClientRect();
      var p = (vh * 0.65 - r.top) / r.height;
      tl.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3));
    });
  }
  function queue() { if (!queued) { queued = true; window.requestAnimationFrame(update); } }
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  update();
})();

// A day before the system: one to-do card at a time. The clock runs to each task's time as its card appears.
(function () {
  var day = document.querySelector('[data-day]');
  if (!day) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  var clock = day.querySelector('[data-day-clock]');
  var wheel = day.querySelector('.day-wheel');
  var count = day.querySelector('[data-day-count]');
  var play = day.querySelector('[data-day-play]');
  var dots = Array.prototype.slice.call(day.querySelectorAll('.day-dot'));
  var items = Array.prototype.slice.call(day.querySelectorAll('.day-item')).map(function (el) {
    var m = /(\d+):(\d+)\s*(am|pm)/i.exec(el.querySelector('.t-when').textContent);
    var h = parseInt(m[1], 10) % 12 + (m[3].toLowerCase() === 'pm' ? 12 : 0);
    return { el: el, min: h * 60 + parseInt(m[2], 10) };
  });
  var HOLD = 4200, TICK = 2300, RUN = 1400;
  var index = -1, shown = items[0].min, timer = null, tickTimer = null, raf = 0;
  var playing = true, visible = false;
  function fmt(t) {
    t = Math.round(t);
    var h = Math.floor(t / 60) % 24, m = t % 60;
    return ((h % 12) || 12) + ':' + (m < 10 ? '0' : '') + m + (h >= 12 ? 'pm' : 'am');
  }
  function runClock(to) {
    window.cancelAnimationFrame(raf);
    var from = shown, t0 = null;
    if (to < from) from = to - 90;
    function step(now) {
      if (t0 === null) t0 = now;
      var k = Math.min(1, (now - t0) / RUN);
      var e = 1 - Math.pow(1 - k, 3);
      shown = from + (to - from) * e;
      clock.textContent = fmt(shown);
      if (k < 1) raf = window.requestAnimationFrame(step);
    }
    raf = window.requestAnimationFrame(step);
  }
  function show(i) {
    window.clearTimeout(tickTimer);
    index = (i + items.length) % items.length;
    items.forEach(function (it, n) {
      it.el.classList.toggle('is-current', n === index);
      it.el.classList.remove('is-done');
    });
    dots.forEach(function (d, n) {
      if (n === index) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
    });
    count.textContent = (index + 1) + ' of ' + items.length;
    runClock(items[index].min);
    tickTimer = window.setTimeout(function () { items[index].el.classList.add('is-done'); }, TICK);
  }
  function schedule() {
    window.clearTimeout(timer);
    if (!playing || !visible) return;
    timer = window.setTimeout(function () { show(index + 1); schedule(); }, HOLD);
  }
  function sync() {
    wheel.toggleAttribute('data-paused', !(playing && visible));
    schedule();
  }
  day.classList.add('is-ready');
  show(0);
  play.addEventListener('click', function () {
    playing = !playing;
    play.setAttribute('aria-pressed', playing ? 'false' : 'true');
    play.setAttribute('aria-label', playing ? 'Pause the day' : 'Play the day');
    play.querySelector('.i-pause').hidden = !playing;
    play.querySelector('.i-play').hidden = playing;
    sync();
  });
  dots.forEach(function (d, n) {
    d.addEventListener('click', function () { show(n); schedule(); });
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      visible = es[0].isIntersecting;
      sync();
    }, { threshold: 0.35 }).observe(day);
  } else {
    visible = true;
    sync();
  }
})();

// Looping videos stay on their poster frame for people who prefer reduced motion.
(function () {
  if (!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
  Array.prototype.forEach.call(document.querySelectorAll('video[autoplay]'), function (v) {
    v.removeAttribute('autoplay');
    v.pause();
  });
})();

// Steps: the line and cards grow in on a timer once the list is on screen. Not tied to scroll.
(function () {
  var lists = Array.prototype.slice.call(document.querySelectorAll('[data-steps]'));
  if (!lists.length) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-play');
      io.unobserve(en.target);
    });
  }, { threshold: 0.25 });
  lists.forEach(function (ol) {
    Array.prototype.forEach.call(ol.children, function (li, i) { li.style.setProperty('--i', i); });
    ol.classList.add('is-ready');
    io.observe(ol);
  });
})();
