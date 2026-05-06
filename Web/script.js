// Efecto de confeti visual al votar
function lanzarConfeti() {
    const boton = document.querySelector('.btn-main');
    if (!boton) {
        alert('¡Gracias por votar por Monocito!');
        return;
    }

    const confetiContainer = document.createElement('div');
    confetiContainer.className = 'confetti-container';
    for (let i = 0; i < 16; i++) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.top = `${Math.random() * 20}%`;
        piece.style.background = `hsl(${Math.random() * 340 + 10}, 90%, 65%)`;
        piece.style.animationDelay = `${Math.random() * 0.4}s`;
        confetiContainer.appendChild(piece);
    }

    boton.appendChild(confetiContainer);
    setTimeout(() => confetiContainer.remove(), 1400);
    boton.classList.add('btn-glow');
    setTimeout(() => boton.classList.remove('btn-glow'), 1000);
    alert('🧬 ¡PROCESANDO FAGOCITOSIS ELECTORAL! ¡Gracias por tu voto!');
}

// Función para animar las tarjetas al pasar el mouse
function expandir(elemento) {
    elemento.classList.add('hovered');
}

// Efecto de entrada suave al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.power-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 180);

        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
        });
    });
});