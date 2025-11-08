// ============================================
// SODILASA - Sistema de Productos
// productos.js
// ============================================

/**
 * Este archivo maneja la lógica de productos
 * Los datos de productos están en: data.js
 * 
 * IMPORTANTE: Este archivo requiere que data.js esté cargado primero
 * 
 * Orden de carga en HTML:
 * 1. <script src="assets/js/data.js"></script>
 * 2. <script src="assets/js/productos.js"></script>
 * 3. <script src="assets/js/main.js"></script>
 */

// Verificar que los productos estén disponibles
if (typeof productos === 'undefined') {
    console.error('ERROR: El archivo data.js no está cargado. Asegúrate de incluirlo antes de productos.js');
}

// ========================================
// FUNCIONES DE RENDERIZADO
// ========================================

/**
 * Renderiza una lista de productos en el DOM
 * @param {Array} productosAMostrar - Array de productos a mostrar
 */
function renderProductos(productosAMostrar) {
    const productList = document.getElementById('productList');
    
    // Si no hay productos, mostrar mensaje
    if (productosAMostrar.length === 0) {
        productList.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-box-open text-6xl text-gray-300 mb-4"></i>
                <p class="text-xl text-gray-600">No se encontraron productos en esta categoría</p>
            </div>
        `;
        return;
    }
    
    // Renderizar tarjetas de productos
    productList.innerHTML = productosAMostrar.map(producto => `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-200">
            <!-- Imagen del producto -->
            <div class="relative h-64 bg-gray-100">
                <img src="${producto.imagen}" 
                     alt="${producto.nombre}" 
                     class="w-full h-full object-cover">
                
                <!-- Badge de disponibilidad -->
                ${!producto.stock ? 
                    '<div class="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">Agotado</div>' : 
                    '<div class="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">Disponible</div>'
                }
                
                <!-- Badge de marca -->
                <div class="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                    ${producto.marca}
                </div>
            </div>
            
            <!-- Información del producto -->
            <div class="p-6">
                <!-- Categoría -->
                <div class="text-xs text-red-600 font-bold mb-2 uppercase">
                    ${getCategoriaLabel(producto.categoria)}
                </div>
                
                <!-- Nombre -->
                <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    ${producto.nombre}
                </h3>
                
                <!-- Descripción -->
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                    ${producto.descripcion}
                </p>
                
                <!-- Precio -->
                <div class="flex justify-between items-center mb-4">
                    <span class="text-2xl font-black text-red-600">
                        $${producto.precio.toLocaleString('es-MX')}
                    </span>
                </div>
                
                <!-- Botones de acción -->
                <div class="flex gap-2">
                    <a href="producto.html?id=${producto.id}" 
                       class="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-full font-bold text-sm text-center transition-all">
                        <i class="fas fa-eye mr-2"></i>Ver
                    </a>
                    <button onclick="agregarACotizacion(${producto.id})" 
                            class="flex-1 btn-red py-3 rounded-full font-bold text-sm ${!producto.stock ? 'opacity-50 cursor-not-allowed' : ''}"
                            ${!producto.stock ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus mr-2"></i>Cotizar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// FUNCIONES AUXILIARES
// ========================================

/**
 * Convierte el código de categoría en etiqueta legible
 * @param {string} categoria - Código de categoría (motor, transmision, suspension, frenos)
 * @returns {string} - Etiqueta formateada
 */
function getCategoriaLabel(categoria) {
    const labels = {
        'motor': 'Motor',
        'transmision': 'Transmisión',
        'suspension': 'Suspensión',
        'frenos': 'Frenos'
    };
    return labels[categoria] || categoria;
}

// ========================================
// FUNCIONES DE FILTRADO
// ========================================

/**
 * Filtra productos por categoría
 * @param {string} categoria - Categoría a filtrar ('motor', 'transmision', 'suspension', 'frenos', 'todos')
 */
function filterCategory(categoria) {
    const productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoria);
    
    renderProductos(productosFiltrados);
    
    // Actualizar botones activos visualmente
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('border-red-600', 'bg-red-50');
    });
    event.target.closest('.category-btn')?.classList.add('border-red-600', 'bg-red-50');
}

// ========================================
// SISTEMA DE COTIZACIÓN
// ========================================

/**
 * Array temporal para almacenar productos en cotización
 * Se pierde al recargar la página (sin backend)
 */
let cotizacion = [];

/**
 * Agrega un producto a la cotización
 * @param {number} productId - ID del producto a agregar
 */
function agregarACotizacion(productId) {
    const producto = productos.find(p => p.id === productId);
    
    // Validar disponibilidad
    if (!producto || !producto.stock) {
        alert('Producto no disponible');
        return;
    }
    
    // Verificar si ya está en cotización
    const existe = cotizacion.find(item => item.id === productId);
    
    if (existe) {
        // Incrementar cantidad si ya existe
        existe.cantidad++;
    } else {
        // Agregar nuevo producto a cotización
        cotizacion.push({
            ...producto,
            cantidad: 1
        });
    }
    
    actualizarContadorCotizacion();
    mostrarNotificacion(`${producto.nombre} agregado a cotización`);
}

/**
 * Actualiza el badge contador de productos en cotización
 */
function actualizarContadorCotizacion() {
    const totalItems = cotizacion.reduce((sum, item) => sum + item.cantidad, 0);
    
    // Buscar o crear badge
    let badge = document.getElementById('cotizacion-badge');
    if (!badge && totalItems > 0) {
        badge = document.createElement('span');
        badge.id = 'cotizacion-badge';
        badge.className = 'absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center';
        
        const cotizacionLink = document.querySelector('a[href="#cotizacion"]');
        if (cotizacionLink) {
            cotizacionLink.style.position = 'relative';
            cotizacionLink.appendChild(badge);
        }
    }
    
    // Actualizar o remover badge
    if (badge) {
        badge.textContent = totalItems;
        if (totalItems === 0) {
            badge.remove();
        }
    }
}

/**
 * Muestra notificación toast temporal
 * @param {string} mensaje - Mensaje a mostrar
 */
function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.className = 'fixed bottom-24 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-2xl z-50 animate-slide-up';
    notif.innerHTML = `
        <i class="fas fa-check-circle mr-2"></i>
        ${mensaje}
    `;
    document.body.appendChild(notif);
    
    // Auto-cerrar después de 2 segundos
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transform = 'translateY(20px)';
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

/**
 * Muestra el resumen de cotización actual
 */
function verCotizacion() {

    console.log("Mostrando cotización:", cotizacion);
    
    if (cotizacion.length === 0) {
        alert('No hay productos en tu cotización');
        return;
    }
    
    // Generar lista de productos
    const items = cotizacion.map(item => 
        `${item.cantidad}x ${item.nombre} - $${(item.precio * item.cantidad).toLocaleString('es-MX')}`
    ).join('\n');
    
    // Calcular total
    const total = cotizacion.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    
    // Mostrar resumen
    alert(`Productos en cotización:\n\n${items}\n\nTotal: $${total.toLocaleString('es-MX')}\n\nPor favor completa el formulario de cotización para que te contactemos.`);
}

// ========================================
// INICIALIZACIÓN
// ========================================

/**
 * Inicializa el sistema cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', function() {
    // Verificar que productos exista
    if (typeof productos !== 'undefined') {
        renderProductos(productos);
        console.log(`✅ Sistema de productos cargado: ${productos.length} productos disponibles`);
    } else {
        console.error('❌ No se pudieron cargar los productos. Verifica que data.js esté cargado.');
    }
});

// ========================================
// EXPORTAR FUNCIONES GLOBALES
// ========================================

/**
 * Hacer funciones disponibles globalmente
 * Necesario para llamarlas desde onclick en HTML
 */
window.filterCategory = filterCategory;
window.agregarACotizacion = agregarACotizacion;
window.verCotizacion = verCotizacion;

// ========================================
// FIN DEL ARCHIVO
// ========================================

function renderProductos(productosAMostrar) {
    console.log("productosAMostrar");
    const productList = document.getElementById('productList');
    console.log(productList);
    
    if (productosAMostrar.length === 0) {
        productList.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-box-open text-6xl text-gray-300 mb-4"></i>
                <p class="text-xl text-gray-600">No se encontraron productos en esta categoría</p>
            </div>
        `;
        return;
    }
    
    productList.innerHTML = productosAMostrar.map(producto => `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-200">
            <div class="relative h-64 bg-gray-100">
                <img src="${producto.imagen}" 
                     alt="${producto.nombre}" 
                     class="w-full h-full object-cover">
                ${!producto.stock ? 
                    '<div class="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">Agotado</div>' : 
                    '<div class="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">Disponible</div>'
                }
                <div class="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                    ${producto.marca}
                </div>
            </div>
            
            <div class="p-6">
                <div class="text-xs text-red-600 font-bold mb-2 uppercase">
                    ${getCategoriaLabel(producto.categoria)}
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    ${producto.nombre}
                </h3>
                
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                    ${producto.descripcion}
                </p>
                
                <div class="flex justify-between items-center mb-4">
                    <span class="text-2xl font-black text-red-600">
                        $${producto.precio.toLocaleString('es-MX')}
                    </span>
                </div>
                
                <div class="flex gap-2">
                    <a href="producto_detalle.html?id=${producto.id}" 
                       class="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-full font-bold text-sm text-center transition-all">
                        <i class="fas fa-eye mr-2"></i>Ver
                    </a>
                    <button onclick="agregarACotizacion(${producto.id})" 
                            class="flex-1 btn-red py-3 rounded-full font-bold text-sm ${!producto.stock ? 'opacity-50 cursor-not-allowed' : ''}"
                            ${!producto.stock ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus mr-2"></i>Cotizar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Función para obtener etiqueta de categoría
function getCategoriaLabel(categoria) {
    const labels = {
        'motor': 'Motor',
        'transmision': 'Transmisión',
        'suspension': 'Suspensión',
        'frenos': 'Frenos'
    };
    return labels[categoria] || categoria;
}

// Filtrar productos por categoría
function filterCategory(categoria) {
    const productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoria);
    
    renderProductos(productosFiltrados);
    
    // Actualizar botones activos
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('border-red-600', 'bg-red-50');
    });
    event.target.closest('.category-btn')?.classList.add('border-red-600', 'bg-red-50');
}

// Sistema de cotización (almacenamiento temporal)
 cotizacion = [];

function agregarACotizacion(productId) {
    const producto = productos.find(p => p.id === productId);
    
    if (!producto || !producto.stock) {
        alert('Producto no disponible');
        return;
    }
    
    // Verificar si ya está en cotización
    const existe = cotizacion.find(item => item.id === productId);
    
    if (existe) {
        existe.cantidad++;
    } else {
        cotizacion.push({
            ...producto,
            cantidad: 1
        });
    }
    
    actualizarContadorCotizacion();
    mostrarNotificacion(`${producto.nombre} agregado a cotización`);
}

function actualizarContadorCotizacion() {
    const totalItems = cotizacion.reduce((sum, item) => sum + item.cantidad, 0);
    
    // Actualizar badge si existe
    let badge = document.getElementById('cotizacion-badge');
    if (!badge && totalItems > 0) {
        badge = document.createElement('span');
        badge.id = 'cotizacion-badge';
        badge.className = 'absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center';
        document.querySelector('a[href="#cotizacion"]').style.position = 'relative';
        document.querySelector('a[href="#cotizacion"]').appendChild(badge);
    }
    
    if (badge) {
        badge.textContent = totalItems;
        if (totalItems === 0) {
            badge.remove();
        }
    }
}

function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.className = 'fixed bottom-24 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-2xl z-50 animate-slide-up';
    notif.innerHTML = `
        <i class="fas fa-check-circle mr-2"></i>
        ${mensaje}
    `;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transform = 'translateY(20px)';
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

function verCotizacion() {
    console.log("Ver cotizacion");
    if (cotizacion.length === 0) {
        alert('No hay productos en tu cotización');
        return;
    }
    
    const items = cotizacion.map(item => 
        `${item.cantidad}x ${item.nombre} - $${(item.precio * item.cantidad).toLocaleString('es-MX')}`
    ).join('\n');
    
    const total = cotizacion.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    
    alert(`Productos en cotización:\n\n${items}\n\nTotal: $${total.toLocaleString('es-MX')}\n\nPor favor completa el formulario de cotización para que te contactemos.`);
}

// Inicializar mostrando todos los productos
document.addEventListener('DOMContentLoaded', function() {
    renderProductos(productos);
});

// Exportar funciones globales
window.filterCategory = filterCategory;
window.agregarACotizacion = agregarACotizacion;
//window.verCotizacion = verCotizacion;