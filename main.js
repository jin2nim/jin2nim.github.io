document.addEventListener('DOMContentLoaded', function() {
    const parent = document.querySelector('.svg-container');
    const child = document.querySelector('.back-svg');

    function updateParentHeight() {
        parent.style.height = `${child.offsetHeight}px`;
    }

    window.addEventListener('resize', updateParentHeight);
    updateParentHeight(); // 초기 높이 설정
});




document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const nav = document.querySelector("nav");
    const menuItems = nav.querySelectorAll('li');

    menuBtn.addEventListener("click", function () {
      nav.classList.add("open");
    });

    closeBtn.addEventListener("click", function () {
      nav.classList.remove("open");
    });

    menuItems.forEach(item => {
      item.addEventListener("click", function(){
        nav.classList.remove("open");
      })
    })
});

// skill-box background
// Select the skill-back element and the random-code element
const skillBoxes = document.querySelectorAll('.skill-box');

function generateRandomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 650; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

skillBoxes.forEach((skillBox) => {
  const skillBack = skillBox.querySelector('.skill-back');
  const randomCode = skillBox.querySelector('.random-code');
  const backGradient = skillBox.querySelector('.back-gradient');

  skillBox.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = skillBack;
    const { offsetX: x, offsetY: y } = e;
    
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    skillBack.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(118, 149, 255, 0.8), rgba(255, 152, 116, 0.8))`;
    backGradient.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))`;
    
    randomCode.textContent = generateRandomCode();
  });

  skillBox.addEventListener('mouseleave', () => {
    skillBack.style.background = ''; // Reset the background gradient
    backGradient.style.background = ''; // Reset the back gradient
    randomCode.textContent = ''; // Clear the random code
  });
});


// POPUP SHOW & HIDE
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach((item)=>{
  const popup = item.querySelector('.project-popup');
  const closeBtn = popup.querySelector('.popup-close');
  const overlay = document.querySelector('.modal-overlay');

  item.addEventListener('click', (e)=>{
    if (e.target.closest('.project-popup')) return;
    popup.style.display = 'block';

    document.body.style.overflow = 'hidden';
    overlay.style.display = 'block';
  });

  closeBtn.addEventListener('click',()=>{
    popup.style.display = 'none';

    document.body.style.overflow = ''
    overlay.style.display = 'none';
  });

  // when click outside the popup, close the popup
  overlay.addEventListener('click', ()=>{
    popup.style.display = 'none';

    document.body.style.overflow = ''
    overlay.style.display = 'none';
  })
});