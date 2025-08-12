// src/services/sellerService.js
import axiosConfig from '../api/axiosConfig';


export const sellerLogin = async (email, password) => {
  try {
 

    // Mock login
    if (!email || !password || password.length < 4) {
      throw new Error('Invalid email or password');
    }
    const token = 'dummy-seller-token';
    const seller = { email, name: 'Demo Seller' };
    localStorage.setItem('sellerToken', token);
    localStorage.setItem('sellerInfo', JSON.stringify(seller));
    return { token, seller };
  } catch {
    throw new Error('Login failed');
  }
};

// Products (seller-scoped)
export const fetchSellerProducts = async () => [
  { id: 1, title: 'Handmade Kurta', price: 799, stock: 12, image: '' },
  { id: 2, title: 'Traditional Saree', price: 1299, stock: 6, image: '' },
];

export const addSellerProduct = async (productPayload) => {
  // You can push to a mock array or just return success
  return { success: true, product: productPayload };
};

export const updateSellerProduct = async (id, productPayload) => {
  return { success: true, id, product: productPayload };
};

export const deleteSellerProduct = async (id) => {
  return { success: true, id };
};

// Orders for seller
export const fetchSellerOrders = async () => [
  { id: "ORD1001", customer: "Asha", items: [{ title: "Kurta", qty: 2 }], amount: 1598, status: "Pending" },
  { id: "ORD1002", customer: "Rahul", items: [{ title: "Saree", qty: 1 }], amount: 1299, status: "Shipped" },
];

export const updateOrderStatus = async (orderId, status) => {
  return { success: true, orderId, status };
};

// Analytics
export const fetchSellerAnalytics = async () => ({
  totalOrders: 2,
  totalRevenue: 2897,
  pendingPayouts: 0,
});