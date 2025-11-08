// ============================================
// SODILASA - Base de Datos de Productos
// data.js
// ============================================

/**
 * Arreglo de productos de la refaccionaria
 * Cada producto debe tener la siguiente estructura:
 * {
 *   id: number (único),
 *   nombre: string,
 *   categoria: 'motor' | 'transmision' | 'suspension' | 'frenos',
 *   precio: number,
 *   imagen: string (URL),
 *   descripcion: string,
 *   marca: string,
 *   stock: boolean
 * }
 */

const productos = [
    // ========================================
    // CATEGORÍA: MOTOR
    // ========================================
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
    
    // ========================================
    // CATEGORÍA: TRANSMISIÓN
    // ========================================
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
    
    // ========================================
    // CATEGORÍA: SUSPENSIÓN
    // ========================================
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
    
    // ========================================
    // CATEGORÍA: FRENOS
    // ========================================
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

// ========================================
// INSTRUCCIONES PARA AGREGAR PRODUCTOS
// ========================================
/*
Para agregar un nuevo producto, copia esta plantilla y pégala al final del arreglo:

{
    id: 17,                              // ← Siguiente número consecutivo
    nombre: "Nombre del Producto",
    categoria: "motor",                  // motor, transmision, suspension, frenos
    precio: 1000,                        // Precio en MXN sin decimales
    imagen: "https://url-imagen.jpg",   // URL de la imagen
    descripcion: "Descripción completa del producto",
    marca: "Marca del producto",
    stock: true                          // true = disponible, false = agotado
},

IMPORTANTE: 
- No olvides la coma (,) al final si hay más productos después
- El último producto NO debe tener coma
- El ID debe ser único
- La categoría debe ser exactamente: motor, transmision, suspension o frenos
*/