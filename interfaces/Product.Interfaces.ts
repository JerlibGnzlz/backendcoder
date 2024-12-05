export interface ISpecialPrice {
  nombre: string;
  valor: number;
  user_id: string;
  _id: string;
}

export interface INormalPrice {
  precio_base: number;
  marcas_especiales: ISpecialPrice;
}

export interface IProduct {
  name: string;
  price: string;
  stock: number;
  marcas_especiales: ISpecialPrice[];
}
