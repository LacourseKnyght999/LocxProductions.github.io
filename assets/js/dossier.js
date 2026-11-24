(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    var header = document.querySelector('.site-header');
    var main = document.getElementById('main');
    var footer = document.querySelector('.site-footer');

    // Telemetry strip
    if (header && !document.querySelector('.sys-strip')) {
      var strip = document.createElement('div');
      strip.className = 'sys-strip';
      strip.innerHTML = '<div class="shell">' +
        '<span><i class="sys-blip"></i>LOCX INDUSTRIES <b>ONLINE</b> &nbsp;/&nbsp; LOCAL BY DEFAULT</span>' +
        '<span class="sys-right">LI-DOSSIER / REV 2026.11 / LOCAL-FIRST / HUMAN IMAGINATION · MACHINE VELOCITY</span>' +
        '</div>';
      header.parentNode.insertBefore(strip, header.nextSibling);
    }

    // Scanline on hero
    var hero = document.querySelector('.hero');
    if (hero && !hero.querySelector('.scanline')) {
      var scan = document.createElement('div');
      scan.className = 'scanline';
      hero.appendChild(scan);
    }

    // Panel frames + spec strips
    var panelTargets = document.querySelectorAll('.product-card, .addon-card, .dev-card, .note-card, .hub-card, .side-panel, .detail-shot, .access-form-wrap, .form-success');
    Array.prototype.forEach.call(panelTargets, function (el) { el.classList.add('panel'); });

    var partMap = {
      'LOCX Storyboard Studio': 'SB-110',
      'LOCX 3D Studio': '3D-100',
      'LOCX Legal': 'LG-ALPHA',
      'AisleSmith — Industrial Scene Builder for Blender': 'AS-010'
    };
    var cards = document.querySelectorAll('.product-card, .addon-card');
    Array.prototype.forEach.call(cards, function (card, i) {
      if (card.querySelector('.panel-spec')) return;
      var h3 = card.querySelector('h3');
      var name = h3 ? h3.textContent.trim() : 'PART-' + (i + 1);
      var part = partMap[name] || 'LI-' + String(i + 1).padStart(3, '0');
      var spec = document.createElement('div');
      spec.className = 'panel-spec';
      spec.innerHTML = '<span>P/N <b>' + part + '</b></span><span>REV A / 2026.11</span>';
      var body = card.querySelector('.product-body, .addon-body');
      if (body) body.insertBefore(spec, body.firstChild);
      else card.insertBefore(spec, card.firstChild);
    });

    // Section title-block details
    var sections = document.querySelectorAll('.section-head');
    Array.prototype.forEach.call(sections, function (head, i) {
      if (head.querySelector('.part-watermark')) return;
      var h2 = head.querySelector('h2');
      var note = head.querySelector('.section-note');
      if (h2) {
        var mark = document.createElement('span');
        mark.className = 'part-watermark';
        mark.setAttribute('aria-hidden', 'true');
        mark.textContent = String(i + 1).padStart(2, '0');
        (note || h2).appendChild(mark);
      }
    });

    // Ruler dividers between major zones
    if (main) {
      var zones = main.querySelectorAll(':scope > section');
      Array.prototype.forEach.call(zones, function (zone, i) {
        if (zone.classList.contains('hero') || i === 0) return;
        if (zone.previousElementSibling && zone.previousElementSibling.classList.contains('ruler-divider')) return;
        var ruler = document.createElement('div');
        ruler.className = 'ruler-divider';
        ruler.setAttribute('aria-hidden', 'true');
        ruler.innerHTML = '<span class="ruler-label">SCALE 1:1 &nbsp;·&nbsp; SHEET ' + String(i).padStart(2, '0') + '</span>';
        main.insertBefore(ruler, zone);
      });
    }

    // Footer engineering title block
    if (footer && !footer.querySelector('.title-block')) {
      var block = document.createElement('div');
      block.className = 'title-block';
      block.innerHTML =
        '<div><span>Drawing no.</span><strong>LI-001</strong></div>' +
        '<div><span>Revision</span><strong>2026.11 / A</strong></div>' +
        '<div><span>Issued by</span><strong>LK999 &amp; AB696</strong></div>' +
        '<div><span>Index</span><strong>PRODUCTS</strong></div>';
      var inner = footer.querySelector('.footer-inner') || footer;
      var legal = footer.querySelector('.footer-legal');
      if (legal && legal.parentNode === inner) inner.insertBefore(block, legal);
      else inner.appendChild(block);
    }
  });
})();
