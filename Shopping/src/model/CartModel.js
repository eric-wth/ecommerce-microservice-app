import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
    {
        userId: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel' 
        },
        items: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductModel'
                },
                quantity: {
                    type: Number,
                    min: [1, 'Quantity cannot be less than 1']
                },
                price: {
                    type: Number
                },
                total: {
                    type: Number
                },
            }
        ],
    },
    
    { timestamps: true }
);

export const CartModel = mongoose.model('CartModel', cartSchema);