// (() => {
//   const refs = document.querySelector("[data-menu-button]");
//   const ref = document.querySelector("[data-menu]");

//   refs.addEventListener ("click", () => {
//     const expanded = refs.getAttribute("aria-expanded") === "true" || false;

//     refs.classList.toggle("is-open");
//     refs.setAttribute("aria-expanded", !expanded);

//     ref.classList.toggle("is-open");
//   });
//   })();

  // (() => {
  //   const menuBtnRef = document.querySelector("[data-menu-button]");
  //   const mobileMenuRef = document.querySelector("[data-menu]");
  
  //   menuBtnRef.addEventListener("click", () => {
  //     const expanded =
  //       menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
  //     menuBtnRef.classList.toggle("is-open");
  //     menuBtnRef.setAttribute("aria-expanded", !expanded);
  
  //     mobileMenuRef.classList.toggle("is-open");
  //   });
  // })();

  (() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();