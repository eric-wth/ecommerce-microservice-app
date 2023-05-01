import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            default:'Ksh _'
        },
        description: {
            type: String,
            default:''
        },
        unit: {
            type: Number,
            default:''
        },
        available: {
            type: Boolean,
            default:'true'
        }
    }
);

export const ProductModel = mongoose.model('ProductModel', productSchema);