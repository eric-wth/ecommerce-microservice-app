import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
    {
        customerId: { 
            type: String 
        },
        items: [
            {
                product: {
                    _id: { type: String, required: true },
                    name: { type: String },
                    description: { type: String },
                    unit: { type: Number },
                    price: { type: String }                
                }
            }
        ]
    }
);

export const CartModel = mongoose.model('CartModel', cartSchema);