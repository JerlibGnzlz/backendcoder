import { Response, Request } from "express";
import { INormalPrice } from "../interfaces/Product.Interfaces";
import { getProductsInStock } from "../service/productService";

export const products = async (req: Request, res: Response) => {
  try {
    const productsInStock: INormalPrice[] = await getProductsInStock();
    res.json(productsInStock);
  } catch (error) {
    console.error("Error al obtener los productos en stock:", error);
    res.status(500).json({ message: "Hubo un error" });
  }
};
