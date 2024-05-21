document.addEventListener('mousemove', function(e) {
    const neonLight = document.querySelector('.neon-light');
    const x = e.clientX;
    const y = e.clientY;
    neonLight.style.transform = `translate(${x}px, ${y}px)`;
});
