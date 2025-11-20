// src/data/products.js
export const products = [
  // TRAJES DE BAÑO
  {
    id: 'traje-1',
    name: 'Traje de Baño Profesional Hombre',
    price: 599.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/trajedebaño-hombre.png',
    stock: 15,
    category: 'natacion',
    description: 'Traje de alta competición con tecnología anti-cloro'
  },
  {
    id: 'traje-2',
    name: 'Traje de Baño Profesional Mujer',
    price: 649.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/trajedebaño-mujer.png',
    stock: 20,
    category: 'natacion',
    description: 'Diseño ergonómico para máximo rendimiento'
  },
  {
    id: 'traje-3',
    name: 'Gafas de Natación HD Pro',
    price: 299.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/GafasHDPro.png',
    stock: 30,
    category: 'natacion',
    description: 'Visión panorámica y anti-empañante'
  },
  {
    id: 'traje-4',
    name: 'Gorra Silicona Premium',
    price: 149.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/gorra-premium.png',
    stock: 50,
    category: 'natacion',
    description: 'Ajuste perfecto, 100% silicona'
  },
  
  // SILLAS DE OFICINA
  {
    id: 'silla-1',
    name: 'Silla Ergonómica Ejecutiva',
    price: 2499.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/silla-ergonómica.png',
    stock: 8,
    category: 'oficina',
    description: 'Soporte lumbar ajustable, reposabrazos 4D'
  },
  {
    id: 'silla-2',
    name: 'Silla Gaming Pro RGB',
    price: 3499.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/silla-gamer.png',
    stock: 5,
    category: 'oficina',
    description: 'Respaldo reclinable 180°, cojines memory foam'
  },
  {
    id: 'silla-3',
    name: 'Silla Oficina Clásica',
    price: 1299.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/silla-clásica.png',
    stock: 12,
    category: 'oficina',
    description: 'Diseño minimalista, soporte medio'
  },
  {
    id: 'silla-4',
    name: 'Silla Mesh Transpirable',
    price: 1899.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/silla-mesh.png',
    stock: 10,
    category: 'oficina',
    description: 'Respaldo de malla, máxima ventilación'
  },
  
  // REGALOS PERSONALIZADOS
  {
    id: 'regalo-1',
    name: 'Set Tazas Personalizadas',
    price: 349.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/tazas.png',
    stock: 25,
    category: 'regalos',
    description: 'Pack de 2 tazas con diseño personalizado'
  },
  {
    id: 'regalo-2',
    name: 'Album de Fotos Premium',
    price: 599.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/album.png',
    stock: 15,
    category: 'regalos',
    description: '50 páginas, encuadernación de lujo'
  },
  {
    id: 'regalo-3',
    name: 'Llavero Grabado',
    price: 149.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/llavero.png',
    stock: 40,
    category: 'regalos',
    description: 'Acero inoxidable con grabado láser'
  },
  {
    id: 'regalo-4',
    name: 'Caja Regalo Deluxe',
    price: 899.00,
    image: '/INTEGRADORA-NOVIEMBRE/images/caja.png',
    stock: 20,
    category: 'regalos',
    description: 'Incluye taza, llavero y album personalizado'
  }
];

export const flashDeals = [
  {
    id: 'deal-1',
    name: 'Traje Profesional Mujer',
    originalPrice: 649.00,
    discountPrice: 449.00,
    discount: 31,
    image: '/INTEGRADORA-NOVIEMBRE/images/trajedebaño-mujer.png',
    stock: 10,
    endDate: new Date(Date.now() + 6 * 60 * 60 * 1000),
    category: 'natacion'
  },
  {
    id: 'deal-2',
    name: 'Silla Ergonómica Premium',
    originalPrice: 2499.00,
    discountPrice: 1699.00,
    discount: 32,
    image: '/INTEGRADORA-NOVIEMBRE/images/silla-ergonómica.png',
    stock: 5,
    endDate: new Date(Date.now() + 12 * 60 * 60 * 1000),
    category: 'oficina'
  },
  {
    id: 'deal-3',
    name: 'Pack Regalo Personalizado',
    originalPrice: 899.00,
    discountPrice: 599.00,
    discount: 33,
    image: '/INTEGRADORA-NOVIEMBRE/images/pack.png',
    stock: 15,
    endDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
    category: 'regalos'
  },
  {
    id: 'deal-4',
    name: 'Gafas HD + Gorra',
    originalPrice: 448.00,
    discountPrice: 299.00,
    discount: 33,
    image: '/INTEGRADORA-NOVIEMBRE/images/gafas-gorra.png',
    stock: 20,
    endDate: new Date(Date.now() + 18 * 60 * 60 * 1000),
    category: 'natacion'
  }
];