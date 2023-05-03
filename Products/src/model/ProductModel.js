import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId
        },
        product_name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            default:''
        },
        quantity: {
            type: Number,
            default:''
        },
    }
);

export const ProductModel = mongoose.model('ProductModel', productSchema);