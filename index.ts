import { app } from "./app"
import { dbConexion } from "./db"
const port = process.env.PORT || 8001



function main() {
    app.listen(app.get("port"), () => {
        console.log(`Escuchando el puerto ${port}`)
        dbConexion()
    })
}
main()