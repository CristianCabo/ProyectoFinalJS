🥩 Carnicería Vikingo — Tienda Online

Proyecto final del curso de JavaScript en Coderhouse. Tienda online estática que simula el catálogo de una carnicería, con carrito de compras y notificaciones dinámicas, desarrollado con JavaScript Vanilla (ES6+).

📋 Descripción

Landing page de e-commerce donde los productos se renderizan dinámicamente a partir de un archivo data.json, sin backend ni base de datos. El usuario puede ver el catálogo de productos y agregarlos a un carrito de compras, cuyo contador se actualiza en el header en tiempo real.

✨ Funcionalidades
📦 Renderizado dinámico del catálogo de productos a partir de data.json
🛒 Carrito de compras con contador de ítems visible en el header
🔔 Notificaciones y alertas con SweetAlert2
🪟 Ventana modal para interacción con el usuario
📱 Diseño responsive con CSS
🛠️ Tecnologías utilizadas
HTML5
CSS3
JavaScript (ES6+) — manipulación del DOM, consumo de datos JSON
SweetAlert2 (vía CDN) — alertas y notificaciones
JSON como fuente de datos de productos
📁 Estructura del proyecto
ProyectoFinalJS/
├─ Img/              → Imágenes del sitio (logo, productos)
├─ JS/
│  ├─ app.js         → Renderizado de productos y lógica principal
│  └─ carrito.js     → Lógica del carrito de compras
├─ data.json         → Datos de los productos (nombre, precio, imagen, cantidad)
├─ index.html         → Estructura principal del sitio
├─ style.css          → Estilos del proyecto
└─ README.md
🚀 Cómo ejecutar el proyecto
Cloná el repositorio:
bash
   git clone https://github.com/CristianCabo/ProyectoFinalJS.git
Entrá a la carpeta del proyecto:
bash
   cd ProyectoFinalJS
Abrí index.html en tu navegador (recomendado usar la extensión Live Server de VS Code para evitar problemas de rutas relativas).

No requiere instalación de dependencias ni backend: todo el proyecto corre del lado del cliente.

🎯 Objetivo del proyecto

Este proyecto fue desarrollado con fines educativos, como práctica final del curso de JavaScript, aplicando:

Manipulación del DOM
Consumo y renderizado de datos desde JSON
Lógica de carrito de compras (agregar productos, actualizar contador)
Integración de librerías externas (SweetAlert2) vía CDN
👨‍💻 Autor

Cristián Cabo — Desarrollador Front-End

GitHub: github.com/CristianCabo
LinkedIn: linkedin.com/in/cristian-cabo
