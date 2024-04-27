const StoreSchema = require("../models/store.model")



//? Read All

module.exports.FindAllStore = (req, res) => {
    StoreSchema.find()
        .then((AllStores) => {
            console.log(AllStores)
            res.json(AllStores)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}


//? Create

module.exports.CreateNewStore = (req, res) => {
    console.log(req.body)
    StoreSchema.create(req.body)
        .then(CreateStore => {
            console.log(CreateStore)
            res.json({ newStore: CreateStore })
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? Read One

module.exports.FindOneSingleStore = (req, res) => {
    StoreSchema.findOne({ _id: req.params.storeId })
        .then(oneSingleStore => {
            res.json(oneSingleStore)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}


//? DELETE

module.exports.deleteAnExistingStore = (req, res) => {
    StoreSchema.deleteOne({ _id: req.params.storeId })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? UPDATE

module.exports.updateExistingStore = (req, res) => {
    console.log(req.body);
    StoreSchema.findOneAndUpdate({ _id: req.params.storeId }, req.body, { new: true, runValidators: true })
        .then(result => {
            res.json({ "done": result })
        })
        .catch(err => {
            res.status(400).json(err)
        })

}