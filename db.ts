import mongoose from "mongoose";

export const dbConexion = async (): Promise<void> => {
    await mongoose
        .connect(process.env.URI_MONGO || "DB", {
        })
        .then(() => {
            console.log("--Connected to the database--");
        })
        .catch((error) => {
            console.log("No database connection", error);
        });
};
