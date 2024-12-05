"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const ProductModels_1 = require("../models/ProductModels");
const products = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Buscar productos en stock en la base de datos
        const productsInStock = yield ProductModels_1.ProductModel.find({ stock: { $gt: 0 } });
        // Devolver los productos encontrados como respuesta
        res.json(productsInStock);
    }
    catch (error) {
        console.error('Error al obtener los productos en stock:', error);
        res.status(500).json({ message: 'Error al obtener los productos en stock' });
    }
});
exports.products = products;
//# sourceMappingURL=products.js.map