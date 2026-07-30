document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  // Estimate request form
  var form = document.getElementById('estimateForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('formStatus');
      var submitBtn = document.getElementById('submitBtn');
      var endpoint = form.getAttribute('action');
      var accessKey = form.elements['access_key'] ? form.elements['access_key'].value : '';

      if (!endpoint || !accessKey || accessKey.indexOf('YOUR_WEB3FORMS_ACCESS_KEY') !== -1) {
        status.className = 'form-status error';
        status.textContent = 'Online requests aren’t connected yet — please call 830-328-8614 or email royaltreatmentclean@outlook.com.';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        return response.json().then(function (data) {
          if (response.ok && data.success) {
            status.className = 'form-status success';
            status.textContent = 'Thanks! Your request has been sent — we’ll follow up by phone or email shortly.';
            form.reset();
          } else {
            throw new Error(data.message || 'Request failed');
          }
        });
      }).catch(function () {
        status.className = 'form-status error';
        status.textContent = 'Something went wrong sending your request. Please call 830-328-8614 or email royaltreatmentclean@outlook.com.';
      }).finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Request my free estimate';
        status.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }

  // Before & after gallery — hidden until staff upload image pairs to GitHub
  var gallerySection = document.getElementById('before-after');
  if (gallerySection) {
    fetch('assets/data/before-after.json', { cache: 'no-store' })
      .then(function (res) { return res.ok ? res.json() : []; })
      .then(function (pairs) {
        if (!Array.isArray(pairs) || pairs.length === 0) return;
        var grid = document.getElementById('beforeAfterGrid');
        pairs.forEach(function (pair) {
          var card = document.createElement('div');
          card.className = 'ba-card';
          card.innerHTML =
            '<div class="ba-images">' +
              '<div class="ba-img"><img src="' + pair.before + '" alt="Before cleaning' + (pair.label ? ' — ' + pair.label : '') + '" loading="lazy"><span>Before</span></div>' +
              '<div class="ba-img"><img src="' + pair.after + '" alt="After cleaning' + (pair.label ? ' — ' + pair.label : '') + '" loading="lazy"><span>After</span></div>' +
            '</div>' +
            (pair.label ? '<p class="ba-label">' + pair.label + '</p>' : '');
          grid.appendChild(card);
        });
        gallerySection.classList.add('visible');
      })
      .catch(function () { /* stays hidden if manifest is missing or empty */ });
  }
});
