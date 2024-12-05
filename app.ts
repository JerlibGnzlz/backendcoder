import "dotenv/config";
import express, { Application } from "express";
import products from "./routes/product.Routes";
import specialClient from "./routes/product.Routes";
import morgan from "morgan";

// ─── Settinng ────────────────────────────────────────────────────────────────
export const app: Application = express();

// ─── Puerto ─────────────────────────────────────────────────────────────────

app.set("port", 8000);

// ─── Middelware ──────────────────────────────────────────────────────────────
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ─── Rutas ───────────────────────────────────────────────────────────────────

app.use(products);
app.use(specialClient);
