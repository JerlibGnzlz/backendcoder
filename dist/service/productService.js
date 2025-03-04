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
exports.getProductsInStock = void 0;
const ProductModels_1 = require("../models/ProductModels");
const getProductsInStock = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productsInStock = yield ProductModels_1.ProductModel.find();
        return productsInStock;
    }
    catch (error) {
        console.error("Error al obtener los productos en stock:", error);
        throw new Error("Hubo un error");
    }
});
exports.getProductsInStock = getProductsInStock;
//# sourceMappingURL=productService.js.map