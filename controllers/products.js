const Product = require('../models/Product')
const productValidation = require('../middlewares/productValidation')

const addProduct = async (req, res) =>{

    //validate products info
    const {error} = productValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const image = req.file == undefined ? 'No Image Uploaded for this Product' :
    `http://localhost:4700/productImage/${req.file.filename}`

    const product = new Product({
         ...req.body.name,
         user: req.user._id,
         productImage: image
         });

    try{
        const savedProduct = await product.save();
        res.ststus(200).json({
            msg: 'product added',
            data: savedProduct
        })

    }catch (error){
        res.status(400).send(error)
    }

}

// users get the list of all his products
const getProducts = async (req, res) => {
    const userId = req.user._id
    try{
        const myProducts = await Product.find({user:userId});
        res.status(200).json({
        data: myProduct
    });

    }catch(error){
        res.status(400).send(error)

    }
};

// to look up a sinle product by its Id
const getProduct = async (req,res) => {
    let userId = req.user._id
    try{
        const singleProduct = await Product.findOne({user: userId, _id: req.params.id});
        if(singleProduct){
            res.status(200).json({
                data: singleProduct
            });
        } else{
            res.status(400).send('product not found')
            
        }
    }catch(error){
        res.send(error)

    }
}

//to update a product info
const updateProduct = async (req, res) =>{
    let userId = req.user._id
    const image = req.file == undefined ? 'No Image Uploaded for this Product' :
    `http://localhost:4700/productImage/${req.file.filename}`

    try{
        const product = await Product.findOneAndUpdate({user: userId, _id: req.params.id},
            {...req.dody, productImage: image},
            {new: true})
            if(!product) return res.status(400).send('product not found');
            
            const updatedProduct = await Product.save();
            res.status(200).json({
                msg: 'product info updated',
                data: updatedProduct
            })

    }catch(error){
        res.status(400).send(error)
    }
};

// deleting a product
const deleteProduct = async (req, res) =>{
    let userId = req.user._id
    try{
    const product = await Product.findOneAndDelete({user: userId, _id: req.params.id})
    if (!product) return res.status(400).send('product not found');
    res.status(200).send(`The product with the id of ${req.params.id} has been deleted`);

    }catch(error){
        res.status(400).send(error)

    }
};

module.exports = {
    addProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
};