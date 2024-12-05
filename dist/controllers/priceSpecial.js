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
exports.clients = void 0;
const productService_1 = require("../service/productService");
const clients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, nombre_producto } = req.params;
    try {
        // Buscar precio especial para el cliente y la marca
        const specialPrice = yield (0, productService_1.getProductsInStock)();
        const result = specialPrice
            .map((value) => value.marcas_especiales)
            .flat(1)
            .filter((value) => {
            return value.user_id === user_id && value.nombre === nombre_producto;
        })
            .filter((value) => value !== undefined);
        if (result.length > 0) {
            // Si hay un precio especial y el producto está en stock, devolver el precio especial
            res.status(201).json(result);
        }
        else {
            // Si el producto no está en stock, devolver un mensaje indicando que no está disponible
            const BasePrice = yield (0, productService_1.getProductsInStock)();
            const result = BasePrice.map((value) => value.precio_base);
            console.log(result);
            res.status(201).json(result);
        }
    }
    catch (error) {
        // Manejar errores
        console.error("Error al obtener el precio del producto:", error);
        res
            .status(500)
            .json({ message: "Error al obtener el precio del producto" });
    }
});
exports.clients = clients;
//# sourceMappingURL=priceSpecial.js.map