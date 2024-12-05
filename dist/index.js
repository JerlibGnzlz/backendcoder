"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./db");
const port = process.env.PORT || 8001;
function main() {
    app_1.app.listen(app_1.app.get("port"), () => {
        console.log(`Escuchando el puerto ${port}`);
        (0, db_1.dbConexion)();
    });
}
main();
//# sourceMappingURL=index.js.map