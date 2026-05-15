// js/index.js

// Lista de productos del catálogo
const productos = [
    { id: 1, nombre: "Portátil Gaming Pro", precio: 1200, categoria: "Portátiles", imagen: "src/gaming_laptop.png" },
    { id: 2, nombre: "Ratón Inalámbrico", precio: 25, categoria: "Periféricos", imagen: "src/wireless_mouse.png" },
    { id: 3, nombre: "Teclado Mecánico RGB", precio: 80, categoria: "Periféricos", imagen: "src/mechanical_keyboard.png" },
    { id: 4, nombre: "Monitor 27 Pulgadas", precio: 250, categoria: "Periféricos", imagen: "src/monitor_27.png" },
    { id: 5, nombre: "Memoria RAM 16GB", precio: 60, categoria: "Componentes", imagen: "src/ram_memory.png" },
    { id: 6, nombre: "Portátil Ultrabook Ligero", precio: 950, categoria: "Portátiles", imagen: "src/ultrabook_laptop.png" },
    { id: 7, nombre: "Tarjeta Gráfica RTX", precio: 450, categoria: "Componentes", imagen: "src/graphics_card.png" },
    { id: 8, nombre: "Auriculares Gaming", precio: 45, categoria: "Periféricos", imagen: "src/gaming_headset.png" }
];

// Leemos el carrito desde la memoria
let carrito = JSON.parse(localStorage.getItem('carritoTechStore')) || [];

// Actualiza el numerito del icono
function actualizarBadge() {
    const contador = document.getElementById("contadorCarrito");
    if (contador) contador.textContent = carrito.length;
}

// Guarda producto en memoria y actualiza icono
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
        carrito.push(producto);
        localStorage.setItem('carritoTechStore', JSON.stringify(carrito));
        actualizarBadge();
        alert(`¡${producto.nombre} añadido al carrito!`);
    }
}

// Filtra productos por categoría
function filtrarPorCategoria(categoria, boton) {
    document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('activo'));
    boton.classList.add('activo');

    const filtrados = categoria === 'Todos' ? productos : productos.filter(p => p.categoria === categoria);
    pintarProductos(filtrados);
}

// Ordena del más barato al más caro
function ordenarPorPrecio() {
    const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
    pintarProductos(ordenados);
}

// Dibuja las tarjetas
function pintarProductos(lista) {
    const contenedor = document.getElementById("contenedorProductos");
    if (!contenedor) return;
    
    contenedor.innerHTML = "";
    lista.forEach(prod => {
        contenedor.innerHTML += `
            <div class="tarjeta-producto">
                <div class="imagen-wrapper">
                    <img src="${prod.imagen}" alt="${prod.nombre}" class="imagen-producto">
                </div>
                <div class="info-producto">
                    <p class="categoria">${prod.categoria}</p>
                    <h3>${prod.nombre}</h3>
                    <div class="precio-btn">
                        <span class="precio">${prod.precio}€</span>
                        <button class="btn-add" onclick="agregarAlCarrito(${prod.id})" title="Añadir">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Modal de descuento
function mostrarPopup() {
    const modal = document.getElementById("modalOferta");
    if (modal) modal.className = "modal-visible";
}

// Gestión de usuario (simulación)
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

// Lógica de la oferta específica
function aceptarOferta() {
    agregarAlCarrito(1); // ID 1 es el Portátil Gaming Pro
    document.getElementById("modalOferta").className = "modal-oculto";
}

// Iniciar aplicación web
window.onload = () => {
    comprobarSesion();
    actualizarBadge();
    pintarProductos(productos);
    
    // Función para cerrar el modal
    const botonCerrar = document.getElementById("cerrarModal");
    if (botonCerrar) {
        botonCerrar.onclick = () => {
            document.getElementById("modalOferta").className = "modal-oculto";
        };
    }

    // Función para cerrar el modal de login
    const botonCerrarLogin = document.getElementById("cerrarLogin");
    if (botonCerrarLogin) {
        botonCerrarLogin.onclick = () => {
            document.getElementById("modalLogin").className = "modal-oculto";
        };
    }

    setTimeout(mostrarPopup, 2000);
};
