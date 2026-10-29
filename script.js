 document.addEventListener("DOMContentLoaded", function () {
    const menus = document.querySelectorAll('.menu');

    menus.forEach(menu => {
      menu.addEventListener('click', function () {
        const wrapper = this.closest('.mobile-wrapper');
        const sidebar = wrapper.querySelector('.sidebar');

        sidebar.classList.toggle('open');
      });
    });
  });