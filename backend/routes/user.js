// https://www.npmjs.com/package/emailjs

const router = require('express').Router();
const emailjs = require('emailjs-com');
const init = require('emailjs-com').init;
let User = require('../updateDatabase/user.model');
let ShppingDetail = require('../updateDatabase/shppingDetail.model')
let CartDetail = require('../updateDatabase/cart.model')
let PaymentDetail = require('../updateDatabase/payment.model')

// route for login of users 
router.route('/account/login').post((req, res) => {
    // getting all parameters in variable for use 
    let userEmail = req.body.user_Email
    let userPassword = req.body.user_Password

    // GETTING CREDINTIAL OF THAT USETR 
    User.findOne({ user_Email: userEmail })
        .then(user => {
            // if user does not exits 
            if (user === null) {
                res.send('notFound')
            }

            // if user exists
            else {
                if (user['user_Password'] === userPassword) {
                    res.json(user)
                } else {
                    res.send('Found');
                };
            }
        })
        .catch(err => res.status(400).send('Error'));
});

// route for resetting password of users 
router.route('/account/forget-password').post((req, res) => {

    // getting all parameters in variable for use 
    let userEmail = req.body.user_Email

    // GETTING CREDINTIAL OF THAT USETR 
    User.findOne({ user_Email: userEmail })
        .then(user => {
            // if user does not exits 
            if (user === null) {
                res.send('User does not exist with this email.')
            }

            // if user exists
            else {
                // object for sendnig email 
                var forgotuser = {
                    name: user.user_FirstName + user.user_LastName,
                    email: user.user_Email,
                    subject: 'your have asked for password',
                    message: user.user_Password
                };

                // sending email 
                init("user_LdXRrREFsKKXRkZhIHonk");
                emailjs.send('hello', 'email_start_conversation', forgotuser)
                    // email send sucssesfully
                    .then(function(response) {
                            res.send('Password for this User has send to this email');
                        },
                        // email not send
                        function(error) {
                            res.send('Error accord during sending Password for User with this email.');
                            console.log(error);
                        });

            };

        })
        .catch(err => res.status(400).send('Error'));
});

// route for registration of users 
router.route('/account/register').post((req, res) => {

    // getting all parameters in variable for use 
    let userFirstName = req.body.user_FirstName;
    let userLastName = req.body.user_LastName
    let userEmail = req.body.user_Email
    let userPassword = req.body.user_Password

    // checking  if user already exist
    User.findOne({ user_Email: userEmail })
        .then(user => {
            if (user === null) {
                // setting a new user profile
                const newUser = new User({
                    user_FirstName: userFirstName,
                    user_LastName: userLastName,
                    user_Email: userEmail,
                    user_Password: userPassword
                });

                // saving OR adding in dtabase
                newUser.save()
                    .then(() => {
                        res.send('You have Registor sucssesfully')
                    })
                    .catch(err => res.status(400).send('Error'));
            } else {
                // declairing if user alredy exist with the same email 
                res.send('user already exist with this email.');
            };
        })
        .catch(err => res.send('Error'));
});


// getting details of existing user for payment 
router.route('/detail/payment').post((req, res) => {

    // getting all parameters in variable for use 
    let userId = req.body.userId;

    // GETTING CREDINTIAL of payment for THAT USETR 
    PaymentDetail.findOne({ _id: userId })
        .then(paymentDetail => {
            // if user does not have payment details 
            if (paymentDetail === null) {
                res.send('User does not have payment details.')
            }

            // if user have payment details
            else {
                res.json(paymentDetail)
            }
        })
        .catch(err => res.status(400).json('Error'));

});


// setting details of existing user for payment 
router.route('/detail/payment/add').post((req, res) => {

    // getting all parameters in variable for use 
    let userId = req.body.userId;
    let userFirstName = req.body.userFirstName;
    let userLastName = req.body.userLastName;
    let creditCardNo = req.body.creditCardNo;
    let userExpMonth = req.body.userExpMonth;
    let userExpYear = req.body.userExpYear;
    let userCVV = req.body.userCVV;


    // checking  if payment details already exist for that user
    PaymentDetail.findOne({ _id: userId })
        .then(paymentDetail => {
            if (paymentDetail === null) {

                // creating new payment schema  
                const paymentDetail = new PaymentDetail({
                    _id: userId,
                    userFirstName: userFirstName,
                    userLastName: userLastName,
                    creditCardNo: creditCardNo,
                    userExpMonth: userExpMonth,
                    userExpYear: userExpYear,
                    userCVV: userCVV
                });

                // saving OR adding in dtabase
                paymentDetail.save()
                    .then(() => {
                        res.send('Payment Detail have Added sucssesfully')
                    })
                    .catch(err => res.status(400).json('Error : ' + err));
            } else {
                req.send('Payment Detail Already exist')
            }
        })
        .catch(err => res.send('Error'));
});


// getting details of shipping 
router.route('/detail/shipping').post((req, res) => {

    // getting all parameters in variable for use 
    let userId = req.body.userId;

    // GETTING CREDINTIAL of shipping for THAT USETR 
    ShppingDetail.findOne({ _id: userId })
        .then(userShippingDetail => {
            // if user does not have shipping details 
            if (userShippingDetail === null) {
                res.send('User does not have shipping details.')
            }

            // if user have shipping details
            else {
                res.json(userShippingDetail)
            }
        })
        .catch(err => res.status(400).json('Error'));
});

// adding details for fastest shipping
router.route('/detail/shipping/add').post((req, res) => {

    // getting all parameters in variable for use 
    let userId = req.body.userId;
    let userAddress = req.body.userAddress;
    let userCity = req.body.userCity;
    let userState = req.body.userState;
    let userPinCode = req.body.userPinCode;
    let userCountry = req.body.userCountry;
    let userNumber = req.body.userNumber;

    // checking  if shipping details already exist for that user
    ShppingDetail.findOne({ _id: userId })
        .then(userShippingDetail => {
            if (userShippingDetail === null) {

                // setting a new shipping profile
                const shppingDetail = new ShppingDetail({
                    _id: userId,
                    userAddress: userAddress,
                    userCity: userCity,
                    userState: userState,
                    userPinCode: userPinCode,
                    userCountry: userCountry,
                    userNumber: userNumber
                });

                // saving OR adding in dtabase
                shppingDetail.save()
                    .then(() => {
                        res.send('Shpping Detail have Added sucssesfully')
                    })
                    .catch(err => res.status(400).json('Error : ' + err));
            } else {
                req.send('Shpping Detail Already exist')
            }
        })
        .catch(err => res.send('Error'));
});


// adding product to cart for purches
router.route('/detail/cart/add').post((req, res) => {

    // getting all parameters in variable for use 
    let userId = req.body.userId;
    let productId = req.body.productId;

    // checking  if cart exist for that user
    CartDetail.findOne({ _id: userId })
        .then(cart => {
            if (cart === null) {

                // setting a new cart
                const cartDetail = new CartDetail({
                    _id: userId,
                    productId: productId
                });

                // saving OR adding in database
                cartDetail.save()
                    .then(() => {
                        res.send('Cart Detail have Added sucssesfully')
                    })
                    .catch(err => res.status(400).json('Error : ' + err));
            } else {
                cart.productId.push(productId)

                // adding products to existing
                CartDetail.findOneAndUpdate({ _id: userId }, { productId: cart.productId })
                    .then(res.send('Updated !')).catch(err => res.send('Error !'))
            }
        })
        .catch(err => res.send('Error'));
});


// getting products that have added by user 
router.route('/detail/cart').post((req, res) => {

    // getting all parameters in variable for use 
    let userId = req.body.userId;

    // GETTING CREDINTIAL of cart details for THAT USETR 
    CartDetail.findOne({ _id: userId })
        .then(cart => {
            // if user does not have cart details 
            if (cart === null) {
                res.send('User does not have Cart details.')
            }

            // if user have cart details
            else {
                res.json(cart)
            }
        })
        .catch(err => res.status(400).json('Error'));

    CartDetail.findOne({ _id: userId })
        .then(cart => {
            res.json(cart)
        })
});


// removing cart products because of completed the order
router.route('/detail/cart/remove').post((req, res) => {

    // getting all parameters in variable for use 
    let userId = req.body.userId;

    // removing cart with complete purches
    CartDetail.findOneAndRemove({ _id: userId })
        .then(res.send('Removed !')).catch(err => res.send('Error !'))
});


// exporting the module 
module.exports = router;