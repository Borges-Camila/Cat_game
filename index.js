const cat = document.querySelector(".cat");
const ball = document.querySelector(".ball");

// funcionalidade do pulo repetitivo
const jump = () => {
  cat.classList.add("jump");

  setTimeout(() => {
    cat.classList.remove("jump");
  }, 500);
};

// função que manipula as animações do gatinho e da bolinha,
// e a troca dos gatos quando o usuário perder o jogo
const loop = setInterval(() => {
  const ballPosition = ball.offsetLeft; //Acesso a propriedade esquerda
  const catPosition = +window.getComputedStyle(cat).bottom.replace("px", "");

  if (ballPosition < 90 && ballPosition > 0 && catPosition < 80) {
    ball.style.animation = "none";
    ball.style.left = `${ballPosition}px`;

    cat.style.animation = "none";
    cat.style.bottom = `${catPosition}px`;

    cat.src = "./images/gato-triste.webp";
    cat.style.marginBottom = "-25px";
    cat.style.marginLeft = "10px";

    clearInterval(loop);
  }
}, 10);
document.addEventListener("keydown", jump);
