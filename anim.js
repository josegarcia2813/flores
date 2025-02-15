document.addEventListener("DOMContentLoaded", function () {
  function createRoses() {
      for (let i = 0; i < 20; i++) {  // Generar 10 rosas
          let rose = document.createElement('div');
          rose.classList.add('rose');
          rose.style.left = `${Math.random() * 100}vw`;
          rose.style.top = `${Math.random() * 100}vh`;
          rose.style.animationDuration = `${3 + Math.random() * 3}s`;

          for (let j = 0; j < 10; j++) {
              let petal = document.createElement('div');
              petal.classList.add('petals');
              rose.appendChild(petal);
          }

          let center = document.createElement('div');
          center.classList.add('center');
          rose.appendChild(center);

          document.body.appendChild(rose);
      }
  }

  createRoses();
});
