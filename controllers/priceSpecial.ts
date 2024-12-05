import { Response, Request } from "express";
import { ObjectId } from "mongoose";
import { ProductModel } from "../models/ProductModels";
import { getProductsInStock } from "../service/productService";
import { INormalPrice, ISpecialPrice } from "../interfaces/Product.Interfaces";

export const clients = async (req: Request, res: Response) => {
  const { user_id, nombre_producto } = req.params;

  try
  {
    // Buscar precio especial para el cliente y la marca
    const specialPrice: INormalPrice[] = await getProductsInStock();
    const result = specialPrice
      .map((value: INormalPrice) => value.marcas_especiales)
      .flat(1)
      .filter((value: ISpecialPrice) => {
        return value.user_id === user_id && value.nombre === nombre_producto;
      })
      .filter((value) => value !== undefined);

    if (result.length > 0)
    {
      // Si hay un precio especial y el producto está en stock, devolver el precio especial
      res.status(201).json(result);
    } else
    {
      // Si el producto no está en stock, devolver un mensaje indicando que no está disponible
      const BasePrice: INormalPrice[] = await getProductsInStock();
      const result = BasePrice.map((value: INormalPrice) => value.precio_base);
      console.log(result);
      res.status(201).json(result);
    }
  } catch (error)
  {
    // Manejar errores
    console.error("Error al obtener el precio del producto:", error);
    res
      .status(500)
      .json({ message: "Error al obtener el precio del producto" });
  }
};
