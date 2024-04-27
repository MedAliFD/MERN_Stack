const StoreController = require("../controllers/store.controller")



module.exports = (app) => {
    app.get("/api/store", StoreController.FindAllStore)
    app.get("/api/store/:storeId", StoreController.FindOneSingleStore)
    app.patch("/api/store/:storeId", StoreController.updateExistingStore)
    app.post("/api/store", StoreController.CreateNewStore)
    app.delete("/api/store/:storeId", StoreController.deleteAnExistingStore)
}