// ============================================
// SODILASA - Sistema de Detalle de Producto
// producto-detalle.js
// ============================================

/**
 * Este archivo maneja la página de detalle de producto
 * Carga dinámicamente TODA la información basada en el ID de la URL
 * 
 * DEPENDENCIAS:
 * - data.js (debe estar cargado primero)
 * - productos.js (funciones auxiliares)
 */

// ========================================
// VARIABLES GLOBALES
// ========================================

let productoActual = null;
let productoId = null;

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 Inicializando detalle de producto...');
    
    // Verificar que productos esté disponible
    if (typeof productos === 'undefined') {
        console.error('❌ ERROR: data.js no está cargado');
        mostrarError('No se pudieron cargar los productos');
        return;
    }
    
    // Obtener ID de la URL
    productoId = obtenerIdDeURL();
    
    if (!productoId) {
        console.error('❌ ERROR: No se proporcionó ID de producto');
        mostrarError('Producto no encontrado');
        return;
    }
    
    // Buscar producto
    productoActual = buscarProducto(productoId);
    
    if (!productoActual) {
        console.error(`❌ ERROR: Producto con ID ${productoId} no encontrado`);
        mostrarError('Producto no encontrado');
        return;
    }
    
    console.log('✅ Producto encontrado:', productoActual);
    
    // Cargar todos los datos
    cargarDatosProducto();
    cargarProductosRelacionados();
    
    console.log('✅ Detalle de producto cargado correctamente');
});

// ========================================
// FUNCIONES PRINCIPALES
// ========================================

/**
 * Obtiene el ID del producto desde la URL
 * @returns {number|null} ID del producto o null
 */
function obtenerIdDeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return id ? parseInt(id) : null;
}

/**
 * Busca un producto por ID
 * @param {number} id - ID del producto
 * @returns {Object|null} Producto encontrado o null
 */
function buscarProducto(id) {
    return productos.find(p => p.id === id) || null;
}

/**
 * Carga todos los datos del producto en la página
 */
function cargarDatosProducto() {
    // Meta tags y título
    actualizarMetaTags();
    
    // Breadcrumb
    actualizarBreadcrumb();
    
    // Imagen principal
    actualizarImagen();
    
    // Badges
    actualizarBadges();
    
    // Información principal
    actualizarInformacionPrincipal();
    
    // Características
    actualizarCaracteristicas();
    
    // Descripción
    actualizarDescripcion();
    
    // Botones
    actualizarBotones();
}

// ========================================
// ACTUALIZACIÓN DE ELEMENTOS
// ========================================

/**
 * Actualiza los meta tags de la página
 */
function actualizarMetaTags() {
    // Título de la página
    document.title = `${productoActual.nombre} - SODILASA`;
    document.getElementById('page-title').textContent = `${productoActual.nombre} - SODILASA`;
    
    // Meta description
    const metaDesc = document.getElementById('meta-description');
    if (metaDesc) {
        metaDesc.setAttribute('content', productoActual.descripcion);
    }
    
    // Meta keywords
    const metaKeys = document.getElementById('meta-keywords');
    if (metaKeys) {
        metaKeys.setAttribute('content', `${productoActual.nombre}, ${productoActual.marca}, ${productoActual.categoria}, SODILASA`);
    }
}

/**
 * Actualiza el breadcrumb
 */
function actualizarBreadcrumb() {
    const categoriaBreadcrumb = document.getElementById('categoria-breadcrumb');
    const nombreBreadcrumb = document.getElementById('nombre-breadcrumb');
    
    if (categoriaBreadcrumb) {
        categoriaBreadcrumb.textContent = getCategoriaLabel(productoActual.categoria);
        categoriaBreadcrumb.onclick = () => {
            window.location.href = `index.html#productos`;
        };
    }
    
    if (nombreBreadcrumb) {
        nombreBreadcrumb.textContent = productoActual.nombre;
    }
}

/**
 * Actualiza la imagen principal del producto
 */
function actualizarImagen() {
    const imagen = document.getElementById('producto-imagen');
    if (imagen) {
        imagen.src = productoActual.imagen;
        imagen.alt = productoActual.nombre;
        imagen.onerror = function() {
            this.src = 'https://via.placeholder.com/800x500?text=Imagen+No+Disponible';
        };
    }
}

/**
 * Actualiza todos los badges del producto
 */
function actualizarBadges() {
    // Badge de marca
    const badgeMarca = document.getElementById('badge-marca');
    if (badgeMarca) {
        badgeMarca.textContent = productoActual.marca;
    }
    
    // Badge de stock (grande)
    const badgeStock = document.getElementById('badge-stock');
    if (badgeStock) {
        if (productoActual.stock) {
            badgeStock.innerHTML = '<i class="fas fa-check-circle mr-2"></i>DISPONIBLE';
            badgeStock.className = 'badge-stock text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg';
        } else {
            badgeStock.innerHTML = '<i class="fas fa-times-circle mr-2"></i>AGOTADO';
            badgeStock.className = 'bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg';
        }
    }
    
    // Tag de categoría
    const tagCategoria = document.getElementById('tag-categoria');
    console.log("tagCategoria:" ,tagCategoria);
    if (tagCategoria) {
        tagCategoria.textContent = getCategoriaLabel(productoActual.categoria);
    }
    
    // Tag de stock (pequeño)
    const tagStock = document.getElementById('tag-stock');
    if (tagStock) {
        if (productoActual.stock) {
            tagStock.innerHTML = '<i class="fas fa-check mr-1"></i>DISPONIBLE';
            tagStock.className = 'badge-stock text-white px-3 py-1 rounded-full text-xs font-bold';
        } else {
            tagStock.innerHTML = '<i class="fas fa-times mr-1"></i>AGOTADO';
            tagStock.className = 'bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold';
        }
    }
}

/**
 * Actualiza la información principal (nombre y precio)
 */
function actualizarInformacionPrincipal() {
    // Nombre del producto
    const nombre = document.getElementById('producto-nombre');
    if (nombre) {
        nombre.textContent = productoActual.nombre;
    }
    
    // Precio
    const precio = document.getElementById('producto-precio');
    if (precio) {
        precio.textContent = `$${productoActual.precio.toLocaleString('es-MX')} MXN`;
    }
}

/**
 * Actualiza las características del producto
 */
function actualizarCaracteristicas() {
    // Categoría
    const infoCategoria = document.getElementById('info-categoria');
    if (infoCategoria) {
        infoCategoria.textContent = getCategoriaLabel(productoActual.categoria);
    }
    
    // Marca
    const infoMarca = document.getElementById('info-marca');
    if (infoMarca) {
        infoMarca.textContent = productoActual.marca;
    }
    
    // Disponibilidad
    const infoDisponibilidad = document.getElementById('info-disponibilidad');
    if (infoDisponibilidad) {
        if (productoActual.stock) {
            infoDisponibilidad.innerHTML = '<i class="fas fa-check-circle mr-1"></i>365 Días al año';
            infoDisponibilidad.className = 'font-bold text-green-600';
        } else {
            infoDisponibilidad.innerHTML = '<i class="fas fa-times-circle mr-1"></i>Temporalmente agotado';
            infoDisponibilidad.className = 'font-bold text-red-600';
        }
    }
}

/**
 * Actualiza la descripción y características del producto
 */
function actualizarDescripcion() {
    // Descripción principal
    const descripcion = document.getElementById('producto-descripcion');
    if (descripcion) {
        descripcion.textContent = productoActual.descripcion;
    }
    
    // Features (características adicionales)
    const features = document.getElementById('producto-features');
    if (features) {
        // Características genéricas basadas en la categoría
        const caracteristicas = obtenerCaracteristicasGenericas(productoActual.categoria);
        features.innerHTML = caracteristicas.map(c => `
            <p class="text-gray-700">
                <i class="fas fa-check text-green-600 mr-2"></i>${c}
            </p>
        `).join('');
    }
}

/**
 * Actualiza los botones de acción
 */
function actualizarBotones() {
    // Botón de cotización
    const btnCotizar = document.getElementById('btn-cotizar');
    if (btnCotizar) {
        if (productoActual.stock) {
            btnCotizar.disabled = false;
            btnCotizar.className = 'flex-1 btn-red px-8 py-4 rounded-full text-lg font-bold';
            btnCotizar.innerHTML = '<i class="fas fa-cart-plus mr-2"></i>Agregar a Cotización';
        } else {
            btnCotizar.disabled = true;
            btnCotizar.className = 'flex-1 bg-gray-400 cursor-not-allowed px-8 py-4 rounded-full text-lg font-bold text-white';
            btnCotizar.innerHTML = '<i class="fas fa-times mr-2"></i>No Disponible';
        }
    }
    
    // Botón de WhatsApp
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    if (btnWhatsapp) {
        const mensaje = `Hola, me interesa el ${productoActual.nombre} (ID: ${productoActual.id}) de $${productoActual.precio.toLocaleString('es-MX')} MXN`;
        btnWhatsapp.href = `https://wa.me/528711234567?text=${encodeURIComponent(mensaje)}`;
    }
}

// ========================================
// PRODUCTOS RELACIONADOS
// ========================================

/**
 * Carga y muestra productos relacionados
 */
function cargarProductosRelacionados() {
    console.log('📦 Cargando productos relacionados...');
    
    // Filtrar productos de la misma categoría, excluyendo el actual
    const relacionados = productos
        .filter(p => p.categoria === productoActual.categoria && p.id !== productoActual.id)
        .slice(0, 4);
    
    const contenedor = document.getElementById('productos-relacionados');
    
    if (!contenedor) {
        console.error('❌ ERROR: Contenedor de productos relacionados no encontrado');
        return;
    }
    
    if (relacionados.length === 0) {
        contenedor.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-box-open text-6xl text-gray-300 mb-4"></i>
                <p class="text-xl text-gray-600">No hay productos relacionados disponibles</p>
            </div>
        `;
        return;
    }
    
    // Renderizar productos relacionados
    contenedor.innerHTML = relacionados.map(p => `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-200 card-hover">
            <div class="relative h-48 bg-gray-100">
                <img src="${p.imagen}" 
                     alt="${p.nombre}" 
                     class="w-full h-full object-cover"
                     onerror="this.src='https://via.placeholder.com/400x300?text=Sin+Imagen'">
                <div class="absolute top-3 right-3 ${p.stock ? 'bg-green-600' : 'bg-red-600'} text-white px-2 py-1 rounded-full text-xs font-bold">
                    ${p.stock ? 'Disponible' : 'Agotado'}
                </div>
            </div>
            <div class="p-4">
                <p class="text-xs text-red-600 font-bold mb-1 uppercase">${getCategoriaLabel(p.categoria)}</p>
                <h3 class="font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">${p.nombre}</h3>
                <p class="text-red-600 font-black text-lg mb-3">$${p.precio.toLocaleString('es-MX')}</p>
                <a href="producto_detalle.html?id=${p.id}" 
                   class="btn-red w-full py-2 rounded-full text-sm text-center block">
                    Ver Detalles
                </a>
            </div>
        </div>
    `).join('');
    
    console.log(`✅ ${relacionados.length} productos relacionados cargados`);
}

// ========================================
// FUNCIONES AUXILIARES
// ========================================

/**
 * Obtiene características genéricas según la categoría
 * @param {string} categoria - Categoría del producto
 * @returns {Array} Array de características
 */
function obtenerCaracteristicasGenericas(categoria) {
    const caracteristicasPorCategoria = {
        'motor': [
            'Compatible con motores diésel pesados',
            'Cumple especificaciones del fabricante',
            'Resistente a altas temperaturas',
            'Garantía de fábrica incluida'
        ],
        'transmision': [
            'Compatible con transmisiones manuales y automáticas',
            'Alta resistencia al desgaste',
            'Instalación profesional recomendada',
            'Garantía extendida disponible'
        ],
        'suspension': [
            'Diseñado para carga pesada',
            'Reduce vibraciones y ruido',
            'Mayor durabilidad y confort',
            'Compatible con sistemas originales'
        ],
        'frenos': [
            'Sistema de frenado de alta seguridad',
            'Reduce distancia de frenado',
            'Resistente a altas temperaturas',
            'Cumple normas de seguridad internacionales'
        ]
    };
    
    return caracteristicasPorCategoria[categoria] || [
        'Producto de alta calidad',
        'Garantía de fábrica',
        'Compatible con múltiples modelos',
        'Instalación profesional recomendada'
    ];
}

/**
 * Muestra un mensaje de error al usuario
 * @param {string} mensaje - Mensaje de error
 */
function mostrarError(mensaje) {
    const container = document.querySelector('.container');
    if (container) {
        container.innerHTML = `
            <div class="text-center py-20">
                <i class="fas fa-exclamation-triangle text-6xl text-red-600 mb-4"></i>
                <h2 class="text-3xl font-bold text-gray-900 mb-4">${mensaje}</h2>
                <p class="text-gray-600 mb-6">El producto que buscas no está disponible o no existe.</p>
                <a href="index.html#productos" class="btn-red px-8 py-3 rounded-full inline-block">
                    <i class="fas fa-arrow-left mr-2"></i>Volver a Productos
                </a>
            </div>
        `;
    }
}

// ========================================
// FUNCIONES GLOBALES
// ========================================

/**
 * Agrega el producto actual a la cotización
 * Función llamada desde el botón de cotización
 */
function agregarACotizacionDetalle() {
    if (!productoActual || !productoActual.stock) {
        alert('Lo sentimos, este producto no está disponible en este momento.');
        return;
    }
    
    // Usar la función global de productos.js
    if (typeof agregarACotizacion === 'function') {
        agregarACotizacion(productoActual.id);
    } else {
        console.error('❌ ERROR: Función agregarACotizacion no disponible');
        
        // Fallback: mostrar notificación manual
        const notif = document.createElement('div');
        notif.className = 'fixed top-24 right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl z-50';
        notif.innerHTML = `
            <div class="flex items-center gap-3">
                <i class="fas fa-check-circle text-2xl"></i>
                <div>
                    <p class="font-bold">¡Producto agregado!</p>
                    <p class="text-sm">${productoActual.nombre}</p>
                </div>
            </div>
        `;
        document.body.appendChild(notif);
        
        setTimeout(() => {
            notif.style.opacity = '0';
            notif.style.transform = 'translateX(400px)';
            notif.style.transition = 'all 0.3s ease';
            setTimeout(() => notif.remove(), 300);
        }, 3000);
    }
}

// Exportar funciones globales
window.agregarACotizacionDetalle = agregarACotizacionDetalle;
window.productoActual = productoActual;

// ========================================
// FIN DEL ARCHIVO
// ========================================

console.log('📄 producto-detalle.js cargado correctamente');