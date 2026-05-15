// js/carrito.js

// Recuperamos el carrito guardado
let carrito = JSON.parse(localStorage.getItem('carritoTechStore')) || [];

// Actualiza el numerito del icono
function actualizarBadge() {
    const contador = document.getElementById("contadorCarrito");
    if (contador) contador.textContent = carrito.length;
}

// Muestra los productos en la lista
function renderizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    if (!lista) return;

    lista.innerHTML = "";
    let subtotal = 0;

    if (carrito.length === 0) {
        // Mensaje si está vacío
        lista.innerHTML = `
            <div class="mensaje-vacio">
                <i class="fa-solid fa-bag-shopping fa-3x" style="color: var(--color-texto-secundario); margin-bottom: 15px;"></i>
                <p>Tu carrito está vacío.</p>
                <a href="index.html" class="btn-secundario" style="display: inline-block; margin-top: 15px; padding: 10px 20px;">Volver a la tienda</a>
            </div>
        `;
    } else {
        // Dibujamos cada producto
        carrito.forEach((prod, index) => {
            subtotal += prod.precio;
            lista.innerHTML += `
                <div class="item-carrito">
                    <img src="${prod.imagen}" alt="${prod.nombre}">
                    <div class="item-info">
                        <h4>${prod.nombre}</h4>
                        <p class="categoria">${prod.categoria}</p>
                    </div>
                    <div class="item-precio">${prod.precio}€</div>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
        });
    }

    calcularTotales(subtotal);
}

// Envío gratis desde 500€
function calcularTotales(subtotal) {
    const envio = subtotal > 0 && subtotal < 500 ? 10 : 0;
    const total = subtotal + envio;

    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("envio").textContent = envio.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2) + "€";
}

// Quita un producto
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carritoTechStore', JSON.stringify(carrito));
    actualizarBadge();
    renderizarCarrito();
}

// Borra todo el carrito
function vaciarCarrito() {
    carrito = [];
    localStorage.setItem('carritoTechStore', JSON.stringify(carrito));
    actualizarBadge();
    renderizarCarrito();
}

// Simula la compra
function procesarPago() {
    if (carrito.length === 0) {
        alert("El carrito está vacío, no hay nada que pagar.");
        return;
    }
    alert("¡Pago procesado con éxito! Gracias por tu compra.");
    vaciarCarrito();
}

// Gestión de usuario (simulación idéntica a index.js)
function comprobarSesion() {
    const zona = document.getElementById("zonaUsuario");
    if (!zona) return;
    
    const nombre = localStorage.getItem('usuarioTienda');
    if (nombre) {
        zona.innerHTML = `
            <span class="bienvenida">Hola, <strong style="color: var(--color-primario);">${nombre}</strong></span>
            <button class="btn-login" onclick="cerrarSesion()" style="margin-left: 15px; padding: 6px 12px; font-size: 0.85rem;">Salir</button>
        `;
    } else {
        zona.innerHTML = `<button class="btn-login" onclick="iniciarSesion()">Entrar</button>`;
    }
}

function iniciarSesion() {
    const modal = document.getElementById("modalLogin");
    if (modal) modal.className = "modal-visible";
}

function guardarNombre() {
    const input = document.getElementById("inputNombre");
    const nombre = input.value;
    if (nombre && nombre.trim()) {
        localStorage.setItem('usuarioTienda', nombre.trim());
        document.getElementById("modalLogin").className = "modal-oculto";
        comprobarSesion();
    }
}

function cerrarSesion() {
    localStorage.removeItem('usuarioTienda');
    comprobarSesion();
}

// Iniciar aplicación al cargar
window.onload = () => {
    comprobarSesion();
    actualizarBadge();
    renderizarCarrito();
    // Cerrar modal login
    const botonCerrarLogin = document.getElementById("cerrarLogin");
    if (botonCerrarLogin) {
        botonCerrarLogin.onclick = () => {
            document.getElementById("modalLogin").className = "modal-oculto";
        };
    }
};
