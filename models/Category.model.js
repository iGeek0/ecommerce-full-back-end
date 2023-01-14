const {Schema, model} = require('mongoose');

const CategoriesScheema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    }
}, {versionKey: false});

module.exports = model('Categories', CategoriesScheema);