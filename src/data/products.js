// src/data/products.js
export const products = [
  // Muebles
  {
    id: 'mueble-1',
    name: 'Escritorio Moderno',
    price: 299.99,
    image: '/images/muebles 1.png',
    stock: 10,
    category: 'muebles'
  },
  {
    id: 'mueble-2',
    name: 'Silla Ergonómica',
    price: 199.99,
    image: '/images/MUEBLES2.PNG',
    stock: 15,
    category: 'muebles'
  },
  {
    id: 'mueble-3',
    name: 'Estantería Premium',
    price: 249.99,
    image: '/images/MUEBLES3.PNG',
    stock: 8,
    category: 'muebles'
  },
  // Natación
  {
    id: 'traje-1',
    name: 'Traje de Baño Profesional',
    price: 59.99,
    image: '/images/TRAJE1.PNG',
    stock: 20,
    category: 'natacion'
  },
  {
    id: 'traje-2',
    name: 'Traje Competición',
    price: 89.99,
    image: '/images/TRAJE 2.PNG',
    stock: 12,
    category: 'natacion'
  },
  {
    id: 'traje-3',
    name: 'Gafas de Natación HD',
    price: 39.99,
    image: '/images/TRAJE 3.PNG',
    stock: 30,
    category: 'natacion'
  },
  // Regalos
  {
    id: 'regalo-1',
    name: 'Set de Regalos Personalizado',
    price: 49.99,
    image: '/images/REGALO.PNG',
    stock: 25,
    category: 'regalos'
  },
  {
    id: 'regalo-2',
    name: 'Decoración Moderna',
    price: 34.99,
    image: '/images/REGALO2.PNG',
    stock: 18,
    category: 'regalos'
  },
  {
    id: 'regalo-3',
    name: 'Pack de Papelería',
    price: 24.99,
    image: '/images/regalo3.png',
    stock: 40,
    category: 'regalos'
  }
];

export const flashDeals = [
  {
    id: 'deal-1',
    name: 'Traje de Baño Profesional',
    originalPrice: 89.99,
    discountPrice: 59.99,
    discount: 33,
    image: '/images/TRAJE1sale.png',
    stock: 15,
    endDate: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 horas
    category: 'natacion'
  },
  {
    id: 'deal-2',
    name: 'Silla Ergonómica Premium',
    originalPrice: 299.99,
    discountPrice: 199.99,
    discount: 33,
    image: '/images/furnituresale.png',
    stock: 8,
    endDate: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 horas
    category: 'oficina'
  },
  {
    id: 'deal-3',
    name: 'Set de Regalos Personalizados',
    originalPrice: 49.99,
    discountPrice: 29.99,
    discount: 40,
    image: '/images/regalosale.png',
    stock: 20,
    endDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 horas
    category: 'regalos'
  },
  {
    id: 'deal-4',
    name: 'Gafas de Natación HD',
    originalPrice: 39.99,
    discountPrice: 24.99,
    discount: 38,
    image: '/images/TRAJE-3desc.png',
    stock: 30,
    endDate: new Date(Date.now() + 18 * 60 * 60 * 1000), // 18 horas
    category: 'natacion'
  }
];