document.addEventListener('DOMContentLoaded', function() {
    const parent = document.querySelector('.svg-container');
    const child = document.querySelector('.back-svg');

    function updateParentHeight() {
        console.log('Child height:', child.offsetHeight); // 자식 높이 확인
        parent.style.height = `${child.offsetHeight}px`; // 부모 높이 설정
    }

    window.addEventListener('resize', updateParentHeight);
    updateParentHeight(); // 초기 높이 설정
});




document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const nav = document.querySelector("nav");

    menuBtn.addEventListener("click", function () {
      nav.classList.add("open");
    });

    closeBtn.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });