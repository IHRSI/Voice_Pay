import { Product } from '@/types/product';

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Grocery & Gourmet Food',
  'Beauty & Personal Care',
  'Sports & Outdoors',
  'Home & Kitchen',
  'Office Products'
];

export const products: Product[] = [
  {
    id: 1,
    title: "Basmati Rice Premium Quality 5kg",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    description: "Premium quality long-grain basmati rice, perfect for biryanis and pulao. Aged to perfection.",
    category: "Grocery & Gourmet Food",
    rating: {
      rate: 4.5,
      count: 1250
    }
  },
  {
    id: 2,
    title: "iPhone 15 Pro Max 256GB Natural Titanium",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.",
    category: "Electronics",
    rating: {
      rate: 4.8,
      count: 892
    }
  },
  {
    id: 3,
    title: "Kurta Pajama Set for Men - Cotton Silk",
    price: 45.99,
    image: "https://media.istockphoto.com/id/1390050354/photo/a-portrait-of-a-indian-man-in-a-kurta-in-namaste-pose.webp?a=1&b=1&s=612x612&w=0&k=20&c=u03JGOdDFVBlwyihbuWqpb-rB8lTrn_hp2rkKv7s3lk=",
    description: "Traditional Indian kurta pajama set made from premium cotton silk fabric.",
    category: "Clothing",
    rating: {
      rate: 4.3,
      count: 567
    }
  },
  {
    id: 4,
    title: "Tata Tea Premium Assam Tea 1kg",
    price: 8.99,
    image: "https://plus.unsplash.com/premium_photo-1731696604052-d0c8527e7831?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGF0YSUyMFRlYSUyMFByZW1pdW0lMjBBc3NhbSUyMFRlYSUyMDFrZ3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Premium Assam tea with rich flavor and aroma. Perfect for your morning chai.",
    category: "Grocery & Gourmet Food",
    rating: {
      rate: 4.6,
      count: 2103
    }
  },
  {
    id: 5,
    title: "Samsung Galaxy Watch 6 Classic",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Advanced smartwatch with health monitoring, GPS, and long battery life.",
    category: "Electronics",
    rating: {
      rate: 4.4,
      count: 445
    }
  },
  {
    id: 6,
    title: "Patanjali Ayurvedic Face Cream 50g",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
    description: "Natural ayurvedic face cream with herbal ingredients for healthy skin.",
    category: "Beauty & Personal Care",
    rating: {
      rate: 4.2,
      count: 789
    }
  },
  {
    id: 7,
    title: "Saree - Banarasi Silk with Golden Border",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop",
    description: "Elegant Banarasi silk saree with traditional golden border work.",
    category: "Clothing",
    rating: {
      rate: 4.7,
      count: 324
    }
  },
  {
    id: 8,
    title: "Maggi Masala Noodles Family Pack",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop",
    description: "Popular instant noodles with masala flavoring. Family pack of 12.",
    category: "Grocery & Gourmet Food",
    rating: {
      rate: 4.4,
      count: 1876
    }
  },
  {
    id: 9,
    title: "Nike Air Max 270 Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "Comfortable running shoes with Air Max cushioning technology.",
    category: "Sports & Outdoors",
    rating: {
      rate: 4.5,
      count: 998
    }
  },
  {
    id: 10,
    title: "Himalaya Neem Face Wash 150ml",
    price: 3.99,
    image: "https://plus.unsplash.com/premium_photo-1732737782145-5989a51a8be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhpbWFsYXlhJTIwTmVlbSUyMEZhY2UlMjBXYXNoJTIwMTUwbWx8ZW58MHx8MHx8fDA%3D",
    description: "Herbal face wash with neem and turmeric for acne-prone skin.",
    category: "Beauty & Personal Care",
    rating: {
      rate: 4.3,
      count: 1567
    }
  },
  {
    id: 11,
    title: "Ghee - Pure Cow Ghee 500ml",
    price: 15.99,
    image: "https://media.istockphoto.com/id/2135686726/photo/melted-butter-in-a-glass-jar.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ag11yCtTLbfHJtrNoT4APHK_Htnzzjy0K8F0h9Do3j4=",
    description: "Pure cow ghee made from fresh cream. Rich in flavor and nutrients.",
    category: "Grocery & Gourmet Food",
    rating: {
      rate: 4.8,
      count: 743
    }
  },
  {
    id: 12,
    title: "JBL Flip 6 Portable Bluetooth Speaker",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Waterproof portable speaker with powerful sound and 12-hour battery.",
    category: "Electronics",
    rating: {
      rate: 4.6,
      count: 567
    }
  },
  {
    id: 13,
    title: "Cricket Bat - Professional Grade Willow",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=400&fit=crop",
    description: "Professional grade English willow cricket bat with perfect balance.",
    category: "Sports & Outdoors",
    rating: {
      rate: 4.5,
      count: 234
    }
  },
  {
    id: 14,
    title: "Pressure Cooker - Hawkins 5 Litre",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1588279102558-dabc7b32d9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fER1cmFibGUlMjBhbHVtaW51bSUyMHByZXNzdXJlJTIwY29va2VyJTIwcGVyZmVjdCUyMGZvciUyMEluZGlhbiUyMGNvb2tpbmcufGVufDB8fDB8fHww",
    description: "Durable aluminum pressure cooker perfect for Indian cooking.",
    category: "Home & Kitchen",
    rating: {
      rate: 4.7,
      count: 1892
    }
  },
  {
    id: 15,
    title: "Yoga Mat - Non-slip Exercise Mat",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    description: "High-quality non-slip yoga mat for comfortable practice.",
    category: "Sports & Outdoors",
    rating: {
      rate: 4.4,
      count: 456
    }
  },
  {
    id: 16,
    title: "Spice Box Set - Traditional Indian Masalas",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    description: "Complete set of traditional Indian spices in a beautiful wooden box.",
    category: "Grocery & Gourmet Food",
    rating: {
      rate: 4.6,
      count: 678
    }
  },
  {
    id: 17,
    title: "Jeans - Levi's 501 Original Fit",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    description: "Classic straight-fit jeans from Levi's original 501 collection.",
    category: "Clothing",
    rating: {
      rate: 4.5,
      count: 892
    }
  },
  {
    id: 18,
    title: "Green Tea - Organic Darjeeling 100 Bags",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=400&fit=crop",
    description: "Premium organic green tea from Darjeeling with antioxidants.",
    category: "Grocery & Gourmet Food",
    rating: {
      rate: 4.3,
      count: 567
    }
  },
  {
    id: 19,
    title: "Power Bank - 20000mAh Fast Charging",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    description: "High-capacity power bank with fast charging for all devices.",
    category: "Electronics",
    rating: {
      rate: 4.4,
      count: 1234
    }
  },
  {
    id: 20,
    title: "Notebook Set - Premium Leather Bound",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    description: "Set of 3 premium leather-bound notebooks for writing and journaling.",
    category: "Office Products",
    rating: {
      rate: 4.6,
      count: 345
    }
  }
];
