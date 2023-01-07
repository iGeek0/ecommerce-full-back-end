const { response, request } = require('express');
const Product = require('../models/Product.model');

const productsGet = async (req = request, res = response) => {
    try {
        const id = req.query.id;
        let product = null;
        if (id) {
            product = await Product.findById(id);
        } else {
            product = await Product.find();
        }

        res.status(200).json({
            msg: 'succes',
            data: product
        })
    } catch (error) {
        res.status(400).json({
            msg: 'error',
            data: error.message
        });
    }
};

const productsPost = async (req = request, res = response) => {
    try {
        const body = req.body;
        let usuario = new Product(body);
        usuario.active = true;
        await usuario.save()
        res.status(200).json({
            msg: 'success',
        });
    } catch (error) {
        res.status(400).json({
            msg: 'error',
            data: error.message
        });
    }
};

const productsPut = async (req = request, res = response) => {
    const { id } = req.params;
    const body = req.body;
    await Product.findByIdAndUpdate(id, body);
    res.status(200).json({
        msg: 'success',
    });
};

const productsDelete = async (req = request, res = response) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({
        msg: 'success',
        id
    });
};

module.exports = {
    productsGet,
    productsPost,
    productsPut,
    productsDelete
};