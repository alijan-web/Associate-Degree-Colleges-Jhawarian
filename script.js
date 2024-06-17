window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.remove('bg-initial');
      navbar.classList.add('bg-scrolled');
    } else {
      navbar.classList.remove('bg-scrolled');
      navbar.classList.add('bg-initial');
    }
  });










  