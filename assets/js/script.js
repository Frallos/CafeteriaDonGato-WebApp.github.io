let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert(nombre + ' agregado al carrito.');
}

if (location.pathname.includes('carrito.html')) {
  const lista = document.getElementById('lista-carrito');
  const total = document.getElementById('total');
  let totalPrecio = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.onclick = () => {
      carrito.splice(index, 1);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      location.reload();
    };
    li.appendChild(btn);
    lista.appendChild(li);
    totalPrecio += item.precio;
  });
  total.textContent = totalPrecio;
}