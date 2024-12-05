import { Router } from "express";
import { products } from "../controllers/products";
import { clients } from "../controllers/priceSpecial";

const router = Router();

// ─── Productos ───────────────────────────────────────────────────────
router.get("/products", products);

// ─── Cliente Special ─────────────────────────────────────────────────────────
router.get("/price/:user_id/:nombre_producto", clients);

export default router;
