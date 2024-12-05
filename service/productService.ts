import { INormalPrice } from "../interfaces/Product.Interfaces";
import { ProductModel } from "../models/ProductModels";

export const getProductsInStock = async () => {
  try {
    const productsInStock: INormalPrice[] = await ProductModel.find();
    return productsInStock;
  } catch (error) {
    console.error("Error al obtener los productos en stock:", error);
    throw new Error("Hubo un error");
  }
};
