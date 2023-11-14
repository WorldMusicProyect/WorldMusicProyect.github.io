document.addEventListener('DOMContentLoaded', () => {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    const carritoVacio = document.getElementById('carrito-vacio');
    const comprarBtn = document.getElementById('comprar-btn');
    const carritoTitulo = document.getElementById('carrito-titulo');
    const carritoVacioTexto = document.getElementById('carrito-vacio-texto');

    // Renderizar el carrito inicialmente
    renderizarCarrito();

    // Agregar evento al LocalStorage para detectar cambios
    window.addEventListener('storage', () => {
        // Actualizar el carrito cuando haya cambios en el LocalStorage
        renderizarCarrito();
    });

    // Agregar evento al botón "Comprar"
    comprarBtn.addEventListener('click', () => {
        // Limpiar el LocalStorage para borrar todos los productos
        localStorage.removeItem('productosEnCesta');

        // Renderizar el carrito después de la compra (sin productos)
        renderizarCarrito();

        // Mostrar mensaje de compra exitosa
        alert('¡Compra realizada exitosamente!');

        // Ocultar el carrito vacío y mostrar el mensaje si está vacío
        carritoVacio.style.display = 'block';
        listaCarrito.style.display = 'none';
        totalElement.style.display = 'none';
    });

    function renderizarCarrito() {
        // Obtener productos del LocalStorage
        const productosEnCesta = JSON.parse(localStorage.getItem('productosEnCesta')) || [];

        // Obtener el elemento del título del carrito
        const carritoTitulo = document.getElementById('carrito-titulo');
        // Obtener el elemento del texto de carrito vacío
        const carritoVacioTexto = document.getElementById('carrito-vacio-texto');

        if (productosEnCesta.length > 0) {
            // Renderizar todos los productos en el carrito
            listaCarrito.innerHTML = '';
            let subtotalGeneral = 0;

            productosEnCesta.forEach((producto, index) => {
                const li = document.createElement('li');
                const subtotalProducto = producto.precio * producto.cantidad;

                li.innerHTML = `<div class="img-carrito">
                                    <img src="${producto.imagenSrc}" alt="${producto.nombre}" class="carrito-imagen estilizar-imagen">
                                </div>
                                <div class="detalle-carrito">
                                    <p>${producto.nombre}</p>
                                    <p>Cantidad: ${producto.cantidad}</p>
                                    <p>Precio unitario: $${formatearPrecio(producto.precio)} ARS</p>
                                    <p>${productosEnCesta.length > 1 ? 'Subtotal' : 'Total'}: $${formatearPrecio(subtotalProducto)} ARS</p>
                                    <button class="eliminar-btn" data-index="${index}">Eliminar</button>
                                </div>`;
                listaCarrito.appendChild(li);

                subtotalGeneral += subtotalProducto;
            });

            // Mostrar el total o subtotal general
            totalElement.textContent = `${productosEnCesta.length > 1 ? 'Total' : 'Subtotal'}: $${formatearPrecio(subtotalGeneral)} ARS`;

            // Mostrar el carrito y ocultar el mensaje de carrito vacío
            carritoVacio.style.display = 'none';
            listaCarrito.style.display = 'block';
            totalElement.style.display = 'block';

            // Mostrar el botón de comprar solo si hay productos en el carrito
            comprarBtn.style.display = 'block';

            // Mostrar el título del carrito
            carritoTitulo.style.display = 'block';

            // Agregar eventos a los botones de eliminar
            const eliminarBtns = document.querySelectorAll('.eliminar-btn');
            eliminarBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Obtener el índice del producto a eliminar
                    const index = btn.getAttribute('data-index');

                    // Eliminar el producto del arreglo y actualizar el LocalStorage
                    productosEnCesta.splice(index, 1);
                    localStorage.setItem('productosEnCesta', JSON.stringify(productosEnCesta));

                    // Renderizar el carrito después de la eliminación
                    renderizarCarrito();
                });
            });
        } else {
            // Si no hay productos, mostrar el mensaje de carrito vacío y ocultar el carrito
            carritoVacio.style.display = 'block';
            listaCarrito.style.display = 'none';
            totalElement.style.display = 'none';

            // Ocultar el botón de comprar
            comprarBtn.style.display = 'none';

            // Ocultar el título del carrito
            carritoTitulo.style.display = 'none';

            // Actualizar el texto de carrito vacío
            carritoVacioTexto.textContent = 'Tu carrito está vacío';
        }
    }

    function formatearPrecio(precio) {
        const partes = precio.toFixed(2).toString().split('.');
        const numeroFormateado = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `${numeroFormateado},${partes[1]} `;
    }
});
