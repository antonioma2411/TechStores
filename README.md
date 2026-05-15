# 🛒 TechStore

> E-commerce de tecnología gaming y de oficina, desarrollado con tecnologías web estándar.

🌐 **Demo en vivo:** [antonioma2411.github.io/TechStores/](https://antonioma2411.github.io/TechStores/)

---

## 📖 Descripción

TechStore es una tienda online de productos tecnológicos orientada al segmento gaming y de oficina. El catálogo incluye portátiles, periféricos (ratones, teclados, auriculares, monitores) y componentes de PC (tarjetas gráficas, memoria RAM).

La aplicación cuenta con dos páginas principales:

- **Catálogo (`index.html`):** listado de productos con filtrado por categoría, ordenación por precio y un popup de oferta especial al entrar.
- **Carrito (`carrito.html`):** gestión de la compra, con cálculo de subtotal, gastos de envío (gratis a partir de 500 €) y total final.

La sesión de usuario (nombre) y el estado del carrito se persisten en `localStorage`, por lo que se mantienen entre visitas sin necesidad de backend.

---

## 🚀 Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica de las páginas |
| **CSS3** | Estilos, layout (Grid/Flexbox), animaciones y diseño responsive |
| **JavaScript (Vanilla ES6+)** | Lógica de la aplicación: carrito, filtros, sesión de usuario |
| **localStorage API** | Persistencia del carrito y del nombre de usuario entre sesiones |
| **Font Awesome 6.5** | Iconografía (carrito, usuario, redes sociales, etc.) |
| **Google Fonts** | Tipografías *Orbitron* (títulos) y *Rajdhani* (texto) |

---

## ✨ Funcionalidades

- Filtrado de productos por categoría (Todos / Portátiles / Periféricos / Componentes)
- Ordenación del catálogo por precio (menor a mayor)
- Añadir y eliminar productos del carrito
- Vaciado completo del carrito
- Cálculo automático de subtotal, envío y total
- Envío gratuito a partir de 500 €
- Popup de oferta especial al cargar la página principal
- Sistema de sesión simulado (nombre de usuario guardado en `localStorage`)
- Diseño responsive adaptado a móvil y escritorio

---

## 🤖 Uso de Inteligencia Artificial

La IA ha actuado como apoyo en varias fases del desarrollo:

- **Lógica de JavaScript:** asistencia en la implementación de funciones clave del carrito, gestión de la sesión de usuario y renderizado dinámico de productos.
- **Creación de imágenes:** las fotografías de producto utilizadas en el catálogo han sido generadas mediante IA.
- **Diseño puntual:** apoyo en decisiones de maquetación, paleta de colores y estilos CSS en zonas concretas de la interfaz.

---

## 📁 Estructura del proyecto
TechStore/
├── index.html          # Página principal — catálogo de productos
├── carrito.html        # Página del carrito de compra
├── css/
│   ├── index.css       # Estilos del catálogo
│   └── carrito.css     # Estilos del carrito
├── js/
│   ├── index.js        # Lógica del catálogo
│   └── carrito.js      # Lógica del carrito
└── src/
├── gaming_laptop.png
├── wireless_mouse.png
├── mechanical_keyboard.png
├── monitor_27.png
├── ram_memory.png
├── ultrabook_laptop.png
├── graphics_card.png
├── gaming_headset.png
└── logo.png


---

## ⚙️ Instalación y uso local

Al ser un proyecto puramente estático, no requiere servidor ni dependencias externas.

1. Clona el repositorio:
```bash
   git clone https://github.com/antonioma2411/TechStores.git
```
2. Abre `index.html` en tu navegador, o usa una extensión como **Live Server** en VS Code.

---

## 📄 Licencia

Proyecto de uso educativo. Sin licencia comercial.
