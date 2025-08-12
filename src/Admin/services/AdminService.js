// src/Admin/services/AdminService.js
const LS_PRODUCTS = "modamart_products_v1";
const LS_ORDERS = "modamart_orders_v1";
const LS_USERS = "modamart_users_v1";
const LS_ADMIN_TOKEN = "modamart_admin_token";
const LS_ADMIN_FLAG = "isAdminLoggedIn";
const LS_ADMIN_EMAIL = "adminEmail";

function seedIfEmpty() {
  if (!localStorage.getItem(LS_PRODUCTS)) {
    const sampleProducts = [];
    for (let i = 1; i <= 12; i++) {
      sampleProducts.push({
        id: `p${i}`,
        title: `Sample Product ${i}`,
        category: i % 2 === 0 ? "Men" : "Women",
        price: Math.round(499 + Math.random() * 2500),
        stock: Math.floor(Math.random() * 50) + 1,
        featured: i % 4 === 0,
        img: `/src/assets/Image/Product${(i % 8) + 1}.jpg`,
        sold: Math.floor(Math.random() * 80),
        description: `This is sample product ${i}`,
      });
    }
    localStorage.setItem(LS_PRODUCTS, JSON.stringify(sampleProducts));
  }
  if (!localStorage.getItem(LS_USERS)) {
    const users = [
      { id: "u1", name: "Ishika Das", email: "ishika@example.com", blocked: false },
      { id: "u2", name: "Karan", email: "karan@example.com", blocked: false },
      { id: "u3", name: "Prashantika", email: "prashantika@example.com", blocked: false },
    ];
    localStorage.setItem(LS_USERS, JSON.stringify(users));
  }
  if (!localStorage.getItem(LS_ORDERS)) {
    const orders = [
      { id: "o1", userId: "u1", items: [{ productId: "p1", qty: 1 }], total: 999, status: "Processing", createdAt: Date.now() - 86400000 * 2 },
      { id: "o2", userId: "u2", items: [{ productId: "p2", qty: 2 }], total: 1998, status: "Delivered", createdAt: Date.now() - 86400000 * 7 },
    ];
    localStorage.setItem(LS_ORDERS, JSON.stringify(orders));
  }
}
seedIfEmpty();

// --- Products API
export const getProducts = (filter = null) => {
  const all = JSON.parse(localStorage.getItem(LS_PRODUCTS) || "[]");
  if (!filter) return Promise.resolve(all);
  const q = (filter.q || "").toLowerCase();
  const category = filter.category || "";
  const res = all.filter((p) => {
    const okQ = !q || p.title.toLowerCase().includes(q) || (p.description || "").toLowerCase().includes(q);
    const okC = !category || p.category.toLowerCase() === category.toLowerCase();
    return okQ && okC;
  });
  return Promise.resolve(res);
};

export const createProduct = (product) => {
  const all = JSON.parse(localStorage.getItem(LS_PRODUCTS) || "[]");
  const id = "p" + Date.now().toString(36).slice(-6);
  const newP = { ...product, id, sold: 0 };
  all.unshift(newP);
  localStorage.setItem(LS_PRODUCTS, JSON.stringify(all));
  return Promise.resolve(newP);
};

export const updateProduct = (id, patch) => {
  const all = JSON.parse(localStorage.getItem(LS_PRODUCTS) || "[]");
  const idx = all.findIndex((p) => p.id === id);
  if (idx === -1) return Promise.reject("not found");
  all[idx] = { ...all[idx], ...patch };
  localStorage.setItem(LS_PRODUCTS, JSON.stringify(all));
  return Promise.resolve(all[idx]);
};

export const deleteProduct = (id) => {
  let all = JSON.parse(localStorage.getItem(LS_PRODUCTS) || "[]");
  all = all.filter((p) => p.id !== id);
  localStorage.setItem(LS_PRODUCTS, JSON.stringify(all));
  return Promise.resolve(true);
};

// --- Orders API
export const getOrders = () => {
  return Promise.resolve(JSON.parse(localStorage.getItem(LS_ORDERS) || "[]"));
};

export const updateOrderStatus = (orderId, status) => {
  const all = JSON.parse(localStorage.getItem(LS_ORDERS) || "[]");
  const idx = all.findIndex((o) => o.id === orderId);
  if (idx === -1) return Promise.reject("Order not found");
  all[idx].status = status;
  localStorage.setItem(LS_ORDERS, JSON.stringify(all));
  return Promise.resolve(all[idx]);
};

// --- Users API
export const getUsers = () => {
  return Promise.resolve(JSON.parse(localStorage.getItem(LS_USERS) || "[]"));
};

export const toggleBlockUser = (id) => {
  const all = JSON.parse(localStorage.getItem(LS_USERS) || "[]");
  const idx = all.findIndex((u) => u.id === id);
  if (idx === -1) return Promise.reject("User not found");
  all[idx].blocked = !all[idx].blocked;
  localStorage.setItem(LS_USERS, JSON.stringify(all));
  return Promise.resolve(all[idx]);
};

// --- Auth (frontend-only)
// Accept any non-empty username/password and mark admin as logged in.
export const adminLogin = (username, password) => {
  if (username && password) {
    const token = `admintoken_${Date.now()}`;
    localStorage.setItem(LS_ADMIN_TOKEN, token);
    localStorage.setItem(LS_ADMIN_FLAG, "true");
    localStorage.setItem(LS_ADMIN_EMAIL, username);
    return Promise.resolve({ token, name: username });
  } else {
    return Promise.reject("Invalid credentials");
  }
};

export const adminLogout = () => {
  localStorage.removeItem('adminToken'); // use consistent key
  localStorage.removeItem('LS_ADMIN_FLAG');
  localStorage.removeItem('LS_ADMIN_EMAIL');
  return Promise.resolve(true);
};

// unified admin-check: token OR flag
export const isAdminLogged = () => {
  return localStorage.getItem(LS_ADMIN_FLAG) === "true" || !!localStorage.getItem(LS_ADMIN_TOKEN);
};

// --- Analytics helpers
export const getAnalytics = async () => {
  const products = await getProducts();
  const orders = await getOrders();
  const users = await getUsers();
  const totalSales = orders.reduce((s, o) => s + (o.total || 0), 0);
  const topProducts = [...products].sort((a, b) => b.sold - a.sold).slice(0, 5);
  return { totalProducts: products.length, totalOrders: orders.length, totalUsers: users.length, totalSales, topProducts };
};