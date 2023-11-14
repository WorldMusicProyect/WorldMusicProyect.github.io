document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.agregar');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            const nombre = boton.dataset.nombre;
            const precio = parseFloat(boton.dataset.precio);
            const imagenSrc = boton.closest('.container-guit').querySelector('.producto-imagen').src;

            // Obtener productos existentes o inicializar un nuevo arreglo
            const productosEnCesta = JSON.parse(localStorage.getItem('productosEnCesta')) || [];

            // Verificar si el producto ya está en el carrito
            const productoExistente = productosEnCesta.find(producto => producto.nombre === nombre);

            if (!productoExistente) {
                // Agregar el nuevo producto al arreglo
                const nuevoProducto = { nombre, precio, imagenSrc, cantidad: 1 };
                productosEnCesta.push(nuevoProducto);
            } else {
                // Incrementar la cantidad si el producto ya está en el carrito
                productoExistente.cantidad++;
            }

            // Almacenar el arreglo actualizado en LocalStorage
            localStorage.setItem('productosEnCesta', JSON.stringify(productosEnCesta));
        });
    });
});
