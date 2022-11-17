const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for a card
const CardsSchema = new Schema({
    card_secret: String,
    card_holder_name: String,
    card_number: String,
    card_validity: String,
    ccv_code: String,
    balance: Number,
});

// Create model for a card
const Card = mongoose.model('card', CardsSchema);

module.exports = Card;

