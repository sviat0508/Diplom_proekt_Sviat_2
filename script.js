const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
  const mainUpSection = document.querySelector('.main-up');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              mainUpSection.classList.add('animated');
          }
      });
  });

  observer.observe(mainUpSection);
});