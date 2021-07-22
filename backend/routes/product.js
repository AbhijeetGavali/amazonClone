const router = require('express').Router();
let Product = require('../updateDatabase/product.model');

// route for getting product details
router.route('/get').post((req, res) => {

    let ID = req.body.productId

    // GETTING CREDINTIAL OF THAT USETR 
    Product.findOne({ _id: ID })
        .then(product => res.json(product))
        .catch(err => res.status(400).send("err"));
});

router.route('/add').post((req, res) => {
    let url = req.body.url;
    let price = req.body.price;
    let shortDetails = req.body.shortDetails
    let longDetails = req.body.longDetails
    let title = req.body.title

    // setting a new user profile
    const newProduct = new Product({
        url: url,
        price: price,
        shortDetails: shortDetails,
        longDetails: longDetails,
        title: title
    });

    // saving OR adding in dtabase
    newProduct.save()
        .then(() => {
            res.send('Product added sucusessfully!')
        })
        .catch(err => res.status(400).send(err));
});

// exporting the module 
module.exports = router;