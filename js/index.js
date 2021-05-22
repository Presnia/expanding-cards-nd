const panels = document.querySelectorAll('.panel');

const removeClasses = () => {
  panels.forEach(panel => panel.classList.remove('active'));
};

panels.forEach(panel => {
  panel.addEventListener('click', () => {
      removeClasses();
      panel.classList.add('active');
  });
});