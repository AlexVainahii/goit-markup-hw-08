(() => {
    const mobileMenu = document.querySelector('.header__menu-box');
      const openMenuBtn = document.querySelector("[button-menu]");
      const scrollBtn= document.querySelector("[body]");

   
    
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      openMenuBtn.classList.toggle('is-open');
      scrollBtn.classList.toggle('no-scroll');
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.classList.remove('is-open');
      scrollBtn.classList.remove('no-scroll');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();




 