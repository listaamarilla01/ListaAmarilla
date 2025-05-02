
function mostrarPropuesta(card) {
  document.querySelectorAll('.propuestas-contenedor .integrante-card').forEach(c => {
    if (c !== card) {
      c.classList.remove('activa');
      c.querySelector('.bio').style.display = 'none';
    }
  });
  card.classList.toggle('activa');
  const bio = card.querySelector('.bio');
  bio.style.display = card.classList.contains('activa') ? 'block' : 'none';
}

function cerrarPropuesta(btn) {
  const card = btn.closest('.integrante-card');
  card.classList.remove('activa');
  card.querySelector('.bio').style.display = 'none';
}
function togglePorQueElegirnos() {
  const contenedor = document.getElementById("elegirnos-contenedor");
  const visible = contenedor.style.display === 'flex';
  contenedor.style.display = visible ? 'none' : 'flex';
}

