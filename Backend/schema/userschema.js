const mongoose = require('mongoose');

const BachatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dataset: [
        {
        monthlyIncome: {
            type: Number
        },
        monthlyExpense: {
            type: Number
        },
        date: {
            type: String
        }
        }
    ]
});

module.exports = mongoose.model("saving", BachatSchema);