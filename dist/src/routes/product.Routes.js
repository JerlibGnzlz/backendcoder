"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const priceSpecial_1 = require("../controllers/priceSpecial");
const router = (0, express_1.Router)();
// ─── Productos ───────────────────────────────────────────────────────
router.get("/products", products_1.products);
// ─── Cliente Special ─────────────────────────────────────────────────────────
router.get("/price/:user_id/:nombre_producto", priceSpecial_1.SpecialClient);
exports.default = router;
//# sourceMappingURL=product.Routes.js.map