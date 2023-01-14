const { response, request } = require('express');
const Category = require('../models/Category.model');

const categoriesGet = async (req = request, res = response) => {
    try {
        const id = req.query.id;
        let category = null;
        if (id) {
            category = await Category.findById(id);
        } else {
            category = await Category.find();
        }

        res.status(200).json({
            msg: 'succes',
            data: category
        })
    } catch (error) {
        res.status(400).json({
            msg: 'error',
            data: error.message
        });
    }
};


module.exports = {
    categoriesGet,
};