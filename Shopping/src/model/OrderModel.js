import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        customerId: {
            type: String
        },
        amount: {
            type: Number
        },
        status: {
            type: String
        },
        items: [
            {
                product: {
                    _id: { type: String, },
                    name: { type: String },
                    description: { type: String },
                    unit: { type: Number },
                    price: { type: Number }                
                }
            }
        ]
    }
);

export const OrderModel = mongoose.model('OrderModel', orderSchema);