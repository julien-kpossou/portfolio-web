(function () {
  // ----- Mobile menu -----
  var openBtn = document.getElementById('menuOpenBtn');
  var closeBtn = document.getElementById('menuCloseBtn');
  var menu = document.getElementById('mobileMenu');

  function openMenu() {
    menu.classList.add('open');
    openBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }
  function closeMenu() {
    menu.classList.remove('open');
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  }
  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // ----- Modales génériques -----
  function openModal(modalEl) {
    modalEl.classList.add('open');
    var firstBtn = modalEl.querySelector('button');
    if (firstBtn) firstBtn.focus();
  }
  function closeModal(modalEl) {
    modalEl.classList.remove('open');
  }
  document.querySelectorAll('[data-close-modal]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      closeModal(btn.closest('.modal-overlay'));
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (menu.classList.contains('open')) closeMenu();
      document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
    }
  });

  // ----- Active nav link on scroll -----
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.topbar__nav a');
  function onScroll() {
    var current = '';
    sections.forEach(function (sec) {
      var rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // ----- Bouton CV -----
  var cvBtn = document.getElementById('cvBtn');
  var cvModal = document.getElementById('cvModal');
  var cvPath = 'assets/cv/CV.pdf';

  cvBtn.addEventListener('click', function () {
    fetch(cvPath, { method: 'HEAD' })
      .then(function (res) {
        if (res.ok) {
          window.location.href = cvPath;
        } else {
          openModal(cvModal);
        }
      })
      .catch(function () {
        openModal(cvModal);
      });
  });

  // ----- Contact form validation -----
  var form = document.getElementById('contactForm');
  var successModal = document.getElementById('successModal');

  function setInvalid(fieldEl, invalid) {
    fieldEl.classList.toggle('invalid', invalid);
  }

  function validate() {
    var valid = true;

    var name = document.getElementById('name');
    var nameField = form.querySelector('[data-field="name"]');
    var nameOk = name.value.trim().length >= 2;
    setInvalid(nameField, !nameOk);
    if (!nameOk) valid = false;

    var email = document.getElementById('email');
    var emailField = form.querySelector('[data-field="email"]');
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    setInvalid(emailField, !emailOk);
    if (!emailOk) valid = false;

    var subject = document.getElementById('subject');
    var subjectField = form.querySelector('[data-field="subject"]');
    var subjectOk = subject.value.trim().length >= 3;
    setInvalid(subjectField, !subjectOk);
    if (!subjectOk) valid = false;

    var message = document.getElementById('message');
    var messageField = form.querySelector('[data-field="message"]');
    var messageOk = message.value.trim().length >= 10;
    setInvalid(messageField, !messageOk);
    if (!messageOk) valid = false;

    return valid;
  }

  ['name', 'email', 'subject', 'message'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', function () {
      var fieldEl = form.querySelector('[data-field="' + id + '"]');
      if (fieldEl.classList.contains('invalid')) validate();
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;
    // Front uniquement : pas d'envoi réel, simple confirmation visuelle.
    openModal(successModal);
    form.reset();
  });

  if (window.innerWidth <= 960) {
  const img = document.querySelector(".hero__media img");
  const images = [
    "assets/images/profil.png",
    "assets/images/dev-illustration.png"
  ];

  let i = 0;

  setInterval(() => {
    i = (i + 1) % images.length;
    img.src = images[i];
  }, 3000);
  }
})();
