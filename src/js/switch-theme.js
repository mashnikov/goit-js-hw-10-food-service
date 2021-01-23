const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  toggle: document.querySelector('#theme-switch-toggle'),
};

refs.toggle.addEventListener('change', switchTheme);

function switchTheme() {
  if (refs.body.className === '') {
    refs.body.classList.add(Theme.LIGHT);
  } else {
    refs.body.classList.toggle(Theme.LIGHT);
    refs.body.classList.toggle(Theme.DARK);
  }

  const currentTheme = refs.body.getAttribute('class');
  localStorage.setItem('theme', currentTheme);
}

setTheme();

function setTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    refs.body.classList.add(savedTheme);
  }

  if (savedTheme === Theme.DARK) {
    refs.toggle.setAttribute('checked', true);
  }
}
