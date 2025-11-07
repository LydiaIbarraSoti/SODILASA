
 
 <!-- Navbar Premium -->
    <nav class="bg-gradient-to-r from-neutral-900 via-zinc-800 to-black text-white py-4 shadow-2xl fixed w-full top-0 z-50 border-b border-red-600/30">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                    <img src="../BACKEND/assets/images/logo_sodilasa.png" alt="SODILASA Logo" class="h-16 w-16 object-contain">
                    <div>
                        <h1 class="text-2xl font-display font-black text-white">SODILASA</h1>
                        <p class="text-xs text-gray-400">Soluciones Diésel Laguna</p>
                    </div>
                </div>
                
                <!-- MENU PARA DISPOSITIVOS MOBILES -->
                <!-- <button id="menuToggle" class="lg:hidden text-white text-2xl">
                    <i class="fas fa-bars"></i>
                </button> -->
                
                 <!-- Mobile trigger -->
                <button id="mobile-menu-btn" class="lg:hidden text-gray-700 focus:outline-none">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
                
                <div id="menu" class="hidden lg:flex items-center space-x-6">
                    <a href="index.php#inicio" class="hover:text-red-500 transition font-medium">Inicio</a>
                    <!-- <a href="#productos" class="hover:text-red-500 transition font-medium">Productos</a> -->

                     <!-- Dropdown Productos CON SCROLL -->
                    <div class="dropdown relative">
                    <button class="nav-link  hover:text-red-600 font-medium flex items-center transition">
                        Productos <i class="fas fa-chevron-down ml-2 text-xs"></i>
                    </button>
                    <!-- MEGAMENU CON SCROLL -->
                    <div class="dropdown-content absolute left-0 mt-3  rounded-2xl shadow-2xl border p-6 w-[550px] grid grid-cols-3 gap-6 z-50 max-h-[500px] overflow-y-auto"
                    style="background-color: rgb(220 38 38 / 57%);">
                        <!-- Columna 1: Líneas -->
                        <div>
                        <div class="text-xs font-bold text-white-600 uppercase mb-3 flex items-center">
                            <i class="fa-jelly fa-regular fa-clipboard mr-2"></i> Líneas
                        </div>
                        <ul class="space-y-1"> 
                            <li>
                                <a class="block px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition text-sm"
                                    href="">
                                <i class="fas fa-angle-right mr-2 text-xs"></i>linea 1
                                </a>
                            </li>
                            <li>
                                <a class="block px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition text-sm"
                                    href="">
                                <i class="fas fa-angle-right mr-2 text-xs"></i>linea 2
                                </a>
                            </li>
                            <li>
                                <a class="block px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition text-sm"
                                    href="">
                                <i class="fas fa-angle-right mr-2 text-xs"></i>linea 3
                                </a>
                            </li>  
                        </ul>
                        </div>

                        <!-- Columna 2: Categorías -->
                        <div>
                            <div class="text-xs font-bold text-white-600 uppercase mb-3 flex items-center">
                                <i class="fas fa-layer-group mr-2"></i> Categorías
                            </div>                   
                            <ul class="space-y-1">               
                                <li>
                                <a class="block px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition font-medium text-sm"
                                    href="">
                                <i class="fas fa-angle-right mr-2 text-xs"></i>Categoria 1                                    
                                </a>   
                                <!-- SUB CATEGORIAS  -->
                                    <ul class="mt-1 ml-3 border-l-2 border-red-200 pl-3 space-y-1">                                    
                                        <li>
                                        <a class="block px-2 py-1 rounded hover:bg-red-50 hover:text-red-600 transition text-xs"
                                            href="">
                                             <i class="fas fa-angle-right mr-2 text-xs"></i>Sub categoria 1  
                                            
                                        </a>
                                        </li>
                                    
                                    </ul>                               
                                </li>                            
                            </ul> 
                        </div>

                        <!-- Columna 3: Accesos rápidos -->
                        <div class="bg-gradient-to-br from-red-50 to-lime-50 rounded-xl p-4">
                        <div class="text-xs font-bold text-red-600 uppercase mb-3">
                            🌟 Destacados
                        </div>
                        <div class="space-y-2">
                            <a href="productos.php?tipo=premium" class="block p-3 bg-white rounded-lg hover:shadow-md transition">
                            <div class="font-bold text-sm text-gray-800">⭐ Premium</div>
                            <div class="text-xs text-gray-600">Pesca del día</div>
                            </a>
                            <a href="productos.php?tipo=gourmet" class="block p-3 bg-white rounded-lg hover:shadow-md transition">
                            <div class="font-bold text-sm text-gray-800">👑 Gourmet</div>
                            <div class="text-xs text-gray-600">Mariscos vivos</div>
                            </a>
                            <a href="productos.php?tipo=fresco" class="block p-3 bg-white rounded-lg hover:shadow-md transition">
                            <div class="font-bold text-sm text-gray-800">❄️ Frescos</div>
                            <div class="text-xs text-gray-600">Disponible 365 días</div>
                            </a>
                        </div>
                        <a href="producto.php" class="block mt-3 text-center text-xs text-red-600 hover:text-red-700 font-semibold">
                            Ver todos los productos →
                        </a>
                        </div>
                    </div>
                    </div>

                    <a href="index.php#servicios" class="hover:text-red-500 transition font-medium">Servicios</a>
                    <a href="index.php#sucursales" class="hover:text-red-500 transition font-medium">Sucursales</a>
                    <!-- <a href="contacto.html" class="hover:text-red-500 transition font-medium">Contacto</a> -->
                    <a href="index.php#cotizacion" class="btn-red px-6 py-2 text-sm">
                        <i class="fas fa-calculator mr-2"></i>Cotizar
                    </a>
                </div>
            </div>
            

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
                <div class="px-4 py-3 space-y-3">
                <a href="index.php#inicio" class="block text-gray-700 hover:text-red-600 font-medium py-2">
                    <i class="fas fa-home mr-2"></i>Inicio
                </a>

                <!-- Mobile Productos -->
                <div>
                    <button data-target="#mb-prod" class="w-full text-left text-gray-700 hover:text-red-600 font-medium flex justify-between items-center py-2">
                    <span><i class="fas fa-book mr-2"></i>Productos</span>
                    <i class="fas fa-chevron-down text-xs"></i>
                    </button>
                    <div id="mb-prod" class="hidden pl-4 mt-2 space-y-2 max-h-60 overflow-y-auto">
                    
                        <div class="text-xs uppercase text-gray-400 font-bold mt-2">Líneas</div>
                        
                        <a href="" class="block text-gray-600 hover:text-red-600 text-sm py-1">
                            <i class="fas fa-angle-right mr-1 text-xs"></i>
                        </a>
                        
                        <div class="text-xs uppercase text-gray-400 font-bold mt-3">Categorías</div>
                        
                        <a href="" class="block text-gray-600 hover:text-red-600 text-sm py-1">
                           
                        </a>
                        
                           
                            <a href="" class="block text-gray-500 hover:text-red-600 text-xs pl-3 py-1">
                                • 
                            </a>                         
                       
                    
                    <div class="border-t pt-2 mt-2">
                        <a href="productos.php?tipo=premium" class="block text-orange-600 hover:text-orange-700 text-sm py-1 font-semibold">
                        ⭐ Premium
                        </a>
                        <a href="productos.php?tipo=gourmet" class="block text-yellow-600 hover:text-yellow-700 text-sm py-1 font-semibold">
                        👑 Gourmet
                        </a>
                        <a href="productos.php?tipo=fresco" class="block text-red-600 hover:text-red-700 text-sm py-1 font-semibold">
                        ❄️ Frescos
                        </a>
                    </div>
                    </div>
                </div>

                <!-- <a href="nosotros.php" class="block text-gray-700 hover:text-red-600 font-medium py-2">
                    <i class="fas fa-users mr-2"></i>Nosotros
                </a> -->
                <a href="servicios.php" class="block text-gray-700 hover:text-red-600 font-medium py-2">
                    <i class="fas fa-truck mr-2"></i>Servicios
                </a>
                <!-- <a href="index.php#gourmet" class="block text-gray-700 hover:text-red-600 font-medium py-2">
                    <i class="fas fa-crown mr-2"></i>Gourmet
                </a>
                <a href="contacto.php" class="block text-gray-700 hover:text-red-600 font-medium py-2">
                    <i class="fas fa-envelope mr-2"></i>Contacto
                </a> -->
                
                <a href="" class="block btn-red text-white text-center px-6 py-3 rounded-full font-bold mt-4">
                    <i class="fas fa-phone mr-2"></i>Cotizar Ahora
                </a>
                </div>
            </div>

        </div>



    </nav>

    <script>
// Toggle mobile menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Acordeones móviles
document.querySelectorAll('#mobile-menu button[data-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    const el = document.querySelector(btn.getAttribute('data-target'));
    if (el) el.classList.toggle('hidden');
  });
});

// Dropdown hover (desktop)
document.querySelectorAll('.dropdown').forEach(d => {
  d.addEventListener('mouseenter', () => d.classList.add('open'));
  d.addEventListener('mouseleave', () => d.classList.remove('open'));
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (!link.hasAttribute('data-target')) {
      mobileMenu.classList.add('hidden');
    }
  });
});
</script>

<style>
.nav-link { position: relative; padding: 8px 0; }
.nav-link::after {
    content: ''; position: absolute; width: 0; height: 3px; bottom: -2px; left: 0;
    background: linear-gradient(90deg, #a31616ff, #cc1616ff); transition: width 0.3s ease;
}
.nav-link:hover::after { width: 100%; }

.dropdown .dropdown-content { 
    opacity:0; visibility:hidden; transform: translateY(8px); transition:.2s; 
}
.dropdown.open .dropdown-content { 
    opacity:1; visibility:visible; transform: translateY(0); 
}

/* Scroll personalizado para el megamenu */
.dropdown-content::-webkit-scrollbar {
    width: 8px;
}
.dropdown-content::-webkit-scrollbar-track {
    background: #fd000081;
    border-radius: 10px;
}
.dropdown-content::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #a31616ff, #cc1616ff);
    border-radius: 10px;
}
.dropdown-content::-webkit-scrollbar-thumb:hover {
    background: red;
}

/* Scroll personalizado para menú móvil */
#mobile-menu::-webkit-scrollbar {
    width: 6px;
}
#mobile-menu::-webkit-scrollbar-track {
    background: #ac1d1dc4;
}
#mobile-menu::-webkit-scrollbar-thumb {
    background: #a31616ff;
    border-radius: 3px;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
.pulse-btn {
    animation: pulse 2s infinite;
}
</style>