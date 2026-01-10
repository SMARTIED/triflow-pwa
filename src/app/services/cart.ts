export type CartItem = { id: string; name: string; price: number; quantity: number };

let cart: CartItem[] = [];

export const addToCart = (item: CartItem) => {
  const existing = cart.find(i => i.id === item.id);
  if (existing) existing.quantity += item.quantity;
  else cart.push(item);
};

export const getCart = () => cart;
export const clearCart = () => { cart = []; };
