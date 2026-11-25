(function () {
  'use strict';
  // Anti-copy deterrents. These raise effort; they cannot stop a determined visitor.
  document.addEventListener('contextmenu', function (e) {
    var t = e.target;
    if (t && (t.tagName === 'IMG' || (t.closest && t.closest('img')))) e.preventDefault();
  });
  document.addEventListener('dragstart', function (e) {
    if (e.target && e.target.tagName === 'IMG') e.preventDefault();
  });
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) e.preventDefault();
  });
})();

(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  var toTop = document.getElementById('toTop');
  var toast = document.getElementById('toast');
  var toastTimer;

  // Mobile navigation
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
      }
    });
  }

  // Header state, back-to-top, sticky product CTA
  var ctaBar = document.getElementById('ctaBar');
  var ctaDismissed = false;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 24);
    if (toTop) toTop.classList.toggle('visible', y > 520);
    if (ctaBar) ctaBar.classList.toggle('visible', y > 520 && !ctaDismissed);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  }
  if (ctaBar) {
    var close = document.getElementById('ctaClose');
    if (close) close.addEventListener('click', function () { ctaDismissed = true; ctaBar.classList.remove('visible'); });
  }

  // Toast helper
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
  }

  // Copy contact address
  var copyBtn = document.getElementById('copyEmail');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var address = 'hello@locxindustries.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(address).then(function () {
          showToast('Address copied to clipboard');
        }).catch(function () {
          showToast('Copy blocked — select the address manually');
        });
      } else {
        showToast('Copy not supported in this browser');
      }
    });
  }

  // Early-access form
  var form = document.getElementById('accessForm');
  if (form) {
    var select = document.getElementById('leadProduct');
    var status = document.getElementById('formStatus');
    var success = document.getElementById('formSuccess');
    var submit = form.querySelector('button[type="submit"]');

    // Preselect the product when arriving from a product page.
    // Query param is primary; session storage covers static/file preview hosts that strip it.
    document.querySelectorAll('[data-product]').forEach(function (link) {
      link.addEventListener('click', function () {
        try { sessionStorage.setItem('locxProduct', link.getAttribute('data-product')); } catch (e) {}
      });
    });
    var requested = new URLSearchParams(window.location.search).get('product');
    if (!requested) {
      try { requested = sessionStorage.getItem('locxProduct'); } catch (e) {}
    }
    if (requested && select) {
      var options = Array.prototype.slice.call(select.options);
      if (options.some(function (o) { return o.value === requested; })) select.value = requested;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        if (status) status.textContent = 'Add your name, a valid email, and tick the consent box to continue.';
        form.reportValidity();
        return;
      }
      if (status) status.textContent = '';
      var data = {
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        product: form.elements.product.value,
        use: form.elements.use.value.trim(),
        consent: form.elements.consent.checked,
        source: 'locxindustries.com'
      };

      submit.disabled = true;
      submit.textContent = 'Sending…';

      var endpoint = document.body.getAttribute('data-lead-endpoint') || '';
      var finish = function () {
        var subject = encodeURIComponent('Early access request — LOCX Industries');
        var body = encodeURIComponent([
          'Name: ' + data.name,
          'Email: ' + data.email,
          'Interested in: ' + data.product,
          'Intended use: ' + (data.use || 'not specified'),
          '',
          'Sent from the LOCX Industries early-access form.'
        ].join('\n'));
        var fallback = document.getElementById('fallbackMail');
        var wrap = document.getElementById('mailFallbackWrap');
        if (fallback) fallback.href = 'mailto:hello@locxindustries.com?subject=' + subject + '&body=' + body;
        if (wrap && !endpoint) wrap.hidden = false;
        form.hidden = true;
        if (success) success.hidden = false;
        submit.disabled = false;
        submit.innerHTML = 'Request early access <span aria-hidden="true">→</span>';
      };

      if (endpoint) {
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(finish).catch(finish);
      } else {
        // No endpoint configured: prepare a prefilled email so the request still goes somewhere real.
        finish();
      }
    });

    var reset = document.getElementById('resetForm');
    if (reset) reset.addEventListener('click', function () {
      form.reset();
      form.hidden = false;
      if (success) success.hidden = true;
      if (status) status.textContent = '';
      var wrap = document.getElementById('mailFallbackWrap');
      if (wrap) wrap.hidden = true;
      if (select) select.focus();
    });
  }

  // Newsletter signup (mailto fallback until a form endpoint exists)
  var newsForm = document.getElementById('newsForm');
  if (newsForm) {
    newsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('newsEmail');
      if (!email || !email.checkValidity()) {
        if (email) email.reportValidity();
        return;
      }
      var subject = encodeURIComponent('Workbench Notes signup');
      var body = encodeURIComponent('Please add ' + email.value.trim() + ' to Workbench Notes.');
      window.location.href = 'mailto:hello@locxindustries.com?subject=' + subject + '&body=' + body;
      showToast('Your email app will open to finish signup');
      newsForm.reset();
    });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
