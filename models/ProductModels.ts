import { Schema, model } from "mongoose";
import { IProduct } from "../interfaces/Product.Interfaces";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      require: true,
      lowercase: true,
    },
    price: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    marcas_especiales: {
      type: Array(),
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const ProductModel = model<IProduct>("producto", productSchema);
