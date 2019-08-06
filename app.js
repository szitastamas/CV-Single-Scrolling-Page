//Window onload events

this.addEventListener('load', () => {
  homeNav.classList.add('current');
  showcaseContent.style.opacity = '1';
  showcaseContent.style.transform = 'none';
  document
    .querySelectorAll('.language')
    .forEach(item => (item.style.opacity = '1'));
});

//Toggle Menu

const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
  menuBtn.classList.toggle('menu-shown');
}

const nav = document.getElementById('nav');

//Window onscroll events

const showcaseContent = document.querySelector('.showcase-content');
const navItems = document.querySelectorAll('.nav-item');
const homeNav = document.querySelector('.home-nav');
const aboutNav = document.querySelector('.about-nav');
const eduNav = document.querySelector('.edu-nav');
const expNav = document.querySelector('.exp-nav');
const contactNav = document.querySelector('.contact-nav');
const showcase = document.querySelector('.showcase-container');
const aboutMe = document.getElementById('about');
const education = document.querySelector('#school');
const experience = document.getElementById('exp');
const contactMe = document.getElementById('contact');

window.onscroll = () => {
  window.pageYOffset > 100
    ? (nav.style.backgroundColor = 'rgba(15, 15, 15, .85)')
    : (nav.style.backgroundColor = 'rgba(15, 15, 15, 1)');
  isSectionInViewport(showcase)
    ? homeNav.classList.add('current')
    : homeNav.classList.remove('current');
  isSectionInViewport(aboutMe)
    ? aboutNav.classList.add('current')
    : aboutNav.classList.remove('current');
  isSectionInViewport(education)
    ? eduNav.classList.add('current')
    : eduNav.classList.remove('current');
  isSectionInViewport(experience)
    ? expNav.classList.add('current')
    : expNav.classList.remove('current');
  isSectionInViewport(contactMe)
    ? contactNav.classList.add('current')
    : contactNav.classList.remove('current');
  listItems.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('tl-show');
    }
  });

    if (window.innerWidth < 400) {
    showcaseContent.style.transform =
      'translateY(' + window.pageYOffset * 0.3 + 'px)';
  } else {
    showcaseContent.style.transform =
      'translateY(' + window.pageYOffset * 0.7 + 'px)';
  }
  showcaseContent.style.opacity = 1 - window.pageYOffset / 700;
};

// Navigation Current class & Menu hide

const isSectionInViewport = el => {
  var rect = el.getBoundingClientRect();

  return (
    rect.bottom > 550 &&
    rect.right > 0 &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.top <=
      (window.innerHeight - 350 || document.documentElement.clientHeight - 350)
  );
};

navItems.forEach(item =>
  item.addEventListener('click', () => {
    menuBtn.classList.remove('menu-shown');
  })
);

//  Exp Cards swimming in from the side

const listItems = document.querySelectorAll('.timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

//FORM VALIDATION

const contactForm = document.querySelector('.form-area');
const contactName = document.getElementById('name');
const contactEmail = document.getElementById('email');
const contactMsg = document.getElementById('form-msg');
const contactBtn = document.querySelector('.form-btn');
const contactIcon = document.querySelector('.contact-title-icon');
const alertMsg = document.getElementById('alert');

contactForm.addEventListener('submit', e => {
  let alertRemove = setTimeout(function() {
    alertMsg.classList.remove('show');
    contactIcon.style.color = 'var(--secondary-color)';
  }, 2500);

  alertMsg.classList.add('show');

  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    contactMsg.value === ''
  ) {
    e.preventDefault();
    alertMsg.textContent = 'Please fill in all fields!';
    alertMsg.classList.remove('success');
    alertMsg.classList.add('error');
    contactIcon.style.color = 'red';
  } else {
    alertMsg.textContent = 'Thank you for submitting!';
    alertMsg.classList.remove('error');
    alertMsg.classList.add('success');
    contactIcon.style.color = 'green';
  }
  alertRemove;
});
