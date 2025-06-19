document.getElementById('menu-toggle').addEventListener('click', function () {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    const cards = document.querySelectorAll('.carousel-card');
    let index = 0;
    setInterval(() => {
      cards.forEach((card, i) => {
        card.classList.toggle('opacity-0', i !== index);
        card.classList.toggle('pointer-events-none', i !== index);
      });
      index = (index + 1) % cards.length;
    }, 3000);