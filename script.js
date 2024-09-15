const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener("scroll", function() {
  var elements = document.querySelectorAll('.main-up1, .main-up2, .main-up__task, .main-up__first, .main-up__heart, .main-up__second, .main-up__message, .main-up__third, .main-up__notebook');
  var scrollPosition = window.scrollY || window.pageYOffset;
  
  if (scrollPosition > 1100) {
      elements.forEach(function(element) {
          element.classList.add("animate"); 
      });
  }
});

const elements = document.querySelectorAll('.main-up2 img, .main-up2 p');


elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transition = 'opacity 1s ease-in-out';
});


window.addEventListener('scroll', () => {
    if (window.scrollY >= 1000) {
        elements.forEach(element => {
            element.style.opacity = '1';
        });
    }
});


const modals = [
  { modal: document.querySelector(".md1"), btn: document.getElementById("modal_info1"), close: document.getElementById("close1") },
  { modal: document.querySelector(".md2"), btn: document.getElementById("modal_info2"), close: document.getElementById("close2") },
  { modal: document.querySelector(".md3"), btn: document.getElementById("modal_info3"), close: document.getElementById("close3") }
];

modals.forEach((item) => {
    console.log(item.btn)
  item.btn.onclick = function() {
      item.modal.style.display = "block"; 
          item.modal.classList.add("show");
  }

  item.close.onclick = function() {
      item.modal.classList.remove("show");
      setTimeout(() => {
          item.modal.style.display = "none";
      }, 300); 
  }

  window.onclick = function(event) {
      if (event.target === item.modal) {
          item.modal.classList.remove("show");
          setTimeout(() => {
              item.modal.style.display = "none";
          }, 300);
      }
  }
});
