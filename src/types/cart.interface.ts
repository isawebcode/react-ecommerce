export interface CartProductInterface {
  productId: number;
  quantity: number;
}

export interface CartInterface {
  id: number;
  userId: number;
  date: string;
  products: CartProductInterface[];
}

export interface CartProduct {
  productId: number;
  quantity: number;
  title: string;
  price: number;
  image: string;
}

export interface CartState {
  id: number;
  userId: number;
  date: string; // Formato "YYYY-MM-DD"
  products: CartProduct[];
}
