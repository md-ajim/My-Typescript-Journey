// Type Assertion

let data: any = "Hello TypeScript";

let length = (data as string).length;
console.log(length);

type Product = {
  name: string;
  price: number;
  stock: number;
};

type ProductKeys = keyof Product; 
// "name" | "price" | "stock"

const key: ProductKeys = "price";


type Person = {
  name: string;
};

type Developer = {
  skills: string[];
};

type FullStack = Person & Developer;

const fsDev: FullStack = {
  name: "Ajim",
  skills: ["Django", "React", "TypeScript"],
};