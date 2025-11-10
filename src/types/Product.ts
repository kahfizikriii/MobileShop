export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category: string;
  discountPercent?: number;
};

const products: Product[] = [
  { id: '1', name: 'Wireless Headphones', price: 250000, image: 'https://picsum.photos/400/300?1', description: 'Suara jernih & nyaman', category: 'Populer', discountPercent: 10 },
  { id: '2', name: 'Smart Watch', price: 500000, image: 'https://picsum.photos/400/300?2', description: 'Pantau aktivitasmu', category: 'Terbaru' },
  { id: '3', name: 'Gaming Mouse', price: 150000, image: 'https://picsum.photos/400/300?3', description: 'Ergonomis & responsif', category: 'Elektronik', discountPercent: 15 },
  { id: '4', name: 'Mechanical Keyboard', price: 350000, image: 'https://picsum.photos/400/300?4', description: 'Switch tactile', category: 'Elektronik' },
  { id: '5', name: 'T-Shirt Premium', price: 90000, image: 'https://picsum.photos/400/300?5', description: 'Katun combed 30s', category: 'Pakaian' },
  { id: '6', name: 'Jeans Slim Fit', price: 200000, image: 'https://picsum.photos/400/300?6', description: 'Nyaman & stylish', category: 'Pakaian', discountPercent: 20 },
  { id: '7', name: 'Organic Snack Pack', price: 50000, image: 'https://picsum.photos/400/300?7', description: 'Camilan sehat', category: 'Makanan' },
  { id: '8', name: 'Car Vacuum', price: 300000, image: 'https://picsum.photos/400/300?8', description: 'Bersihkan mobil dengan mudah', category: 'Otomotif' },
  { id: '9', name: 'Bluetooth Speaker', price: 200000, image: 'https://picsum.photos/400/300?9', description: 'Suara kuat, desain minimal', category: 'Hiburan' },
  { id: '10', name: 'Baby Stroller', price: 1200000, image: 'https://picsum.photos/400/300?10', description: 'Aman & nyaman untuk bayi', category: 'Perlengkapan Bayi', discountPercent: 5 },
  // extra products to fill tabs
  { id: '11', name: 'Earbuds A', price: 120000, image: 'https://picsum.photos/400/300?11', description: 'Earbuds ringkas', category: 'Populer' },
  { id: '12', name: 'Travel Mug', price: 80000, image: 'https://picsum.photos/400/300?12', description: 'Hangat lama', category: 'Terbaru' },
];

export default products;
