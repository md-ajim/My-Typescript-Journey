type Product = {
  name: string;
  price: number;
  stock: number;
};

type ProductKeys = keyof Product; 
// "name" | "price" | "stock"

const key: ProductKeys = "price";