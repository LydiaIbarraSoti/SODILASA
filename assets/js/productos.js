// productos.js - Sistema de productos para SODILASA

// Base de datos de productos (sin DB backend)
const productos = [
    // MOTOR
    {
        id: 1,
        nombre: "Filtro de Aceite Cummins",
        categoria: "motor",
        precio: 450,
        imagen: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400",
        descripcion: "Filtro de aceite original para motores Cummins ISX/ISM",
        marca: "Cummins",
        stock: true
    },
    {
        id: 2,
        nombre: "Bomba de Agua Detroit",
        categoria: "motor",
        precio: 3500,
        imagen: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400",
        descripcion: "Bomba de agua para motores Detroit Diesel DD13/DD15",
        marca: "Detroit",
        stock: true
    },
    {
        id: 3,
        nombre: "Kit de Empaques Motor",
        categoria: "motor",
        precio: 2800,
        imagen: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400",
        descripcion: "Kit completo de empaques para overhaul de motor",
        marca: "Universal",
        stock: true
    },
    {
        id: 4,
        nombre: "Turbo Cargador",
        categoria: "motor",
        precio: 15000,
        imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400",
        descripcion: "Turbo cargador remanufacturado para motores pesados",
        marca: "Garrett",
        stock: true
    },
    
    // TRANSMISIÓN
    {
        id: 5,
        nombre: "Clutch Kit Completo",
        categoria: "transmision",
        precio: 8500,
        imagen: "https://images.unsplash.com/photo-1622639111876-5452e7c4a3eb?w=400",
        descripcion: "Kit de clutch completo para transmisiones Eaton Fuller",
        marca: "Eaton",
        stock: true
    },
    {
        id: 6,
        nombre: "Aceite de Transmisión",
        categoria: "transmision",
        precio: 650,
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        descripcion: "Aceite sintético para transmisiones automáticas Allison",
        marca: "Mobil",
        stock: true
    },
    {
        id: 7,
        nombre: "Sincronizadores",
        categoria: "transmision",
        precio: 2400,
        imagen: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400",
        descripcion: "Set de sincronizadores para transmisión manual",
        marca: "Fuller",
        stock: false
    },
    {
        id: 8,
        nombre: "Convertidor de Torque",
        categoria: "transmision",
        precio: 12000,
        imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400",
        descripcion: "Convertidor de torque para transmisión automática",
        marca: "Allison",
        stock: true
    },
    
    // SUSPENSIÓN
    {
        id: 9,
        nombre: "Muelles de Suspensión",
        categoria: "suspension",
        precio: 4200,
        imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400",
        descripcion: "Par de muelles traseros para camión de carga pesada",
        marca: "Hendrickson",
        stock: true
    },
    {
        id: 10,
        nombre: "Amortiguadores Delanteros",
        categoria: "suspension",
        precio: 3600,
        imagen: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400",
        descripcion: "Par de amortiguadores delanteros tipo gas",
        marca: "Monroe",
        stock: true
    },
    {
        id: 11,
        nombre: "Bushing Kit",
        categoria: "suspension",
        precio: 1800,
        imagen: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400",
        descripcion: "Kit completo de bushings para suspensión",
        marca: "Universal",
        stock: true
    },
    {
        id: 12,
        nombre: "Bolsas de Aire",
        categoria: "suspension",
        precio: 5500,
        imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400",
        descripcion: "Bolsas de aire para suspensión neumática",
        marca: "Firestone",
        stock: true
    },
    
    // FRENOS
    {
        id: 13,
        nombre: "Balatas de Freno",
        categoria: "frenos",
        precio: 2200,
        imagen: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400",
        descripcion: "Juego de balatas para frenos de disco",
        marca: "Bendix",
        stock: true
    },
    {
        id: 14,
        nombre: "Tambores de Freno",
        categoria: "frenos",
        precio: 3800,
        imagen: "https://images.unsplash.com/photo-1622639111876-5452e7c4a3eb?w=400",
        descripcion: "Par de tambores de freno para eje trasero",
        marca: "Meritor",
        stock: true
    },
    {
        id: 15,
        nombre: "Compresor de Aire",
        categoria: "frenos",
        precio: 8900,
        imagen: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400",
        descripcion: "Compresor de aire para sistema de frenos",
        marca: "Bendix",
        stock: true
    },
    {
        id: 16,
        nombre: "Válvulas de Freno",
        categoria: "frenos",
        precio: 1600,
        imagen: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400",
        descripcion: "Kit de válvulas para sistema de frenos de aire",
        marca: "Haldex",
        stock: true
    }
];

// Función para renderizar productos
function renderProductos(productosAMostrar) {
    const productList = document.getElementById('productList');
    
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
let cotizacion = [];

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
window.verCotizacion = verCotizacion;
