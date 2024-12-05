"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
}, {
    versionKey: false,
    timestamps: true,
});
exports.ProductModel = (0, mongoose_1.model)("producto", productSchema);
//# sourceMappingURL=ProductModels.js.map