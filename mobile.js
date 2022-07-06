// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     menu: document.querySelector('[data-menu]'),
//   };
//
//   refs.openMenuBtn.addEventListener('click', toggleModal);
//   refs.closeMenuBtn.addEventListener('click', toggleModal);
//
//   function toggleModal() {
//     refs.menu.classList.toggle('is-open');
//   }
// })();

let mobileMenu = document.querySelector('[data-menu]');
let btnOpen = document.querySelector('[data-menu-open]');
let btnClose = document.querySelector('[data-menu-close]');

btnOpen.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open')

})
btnClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");
});
