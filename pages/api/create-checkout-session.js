const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async function (req, res) {
    const { item, email } = req.body

    const line_items = item.map((cartItem) => ({
        description: cartItem.description,
        quantity: 1,
        price_data: {
            currency: 'GBP',
            unit_amount: cartItem.price * 100,
            product_data: {
                name: cartItem.name,
                images: [cartItem.image],
            },
        },
    }));

    console.log(line_items)

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price: 'price_1M1YXBL6YvgZDvxunUXY0P4e',
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.HOST}/success`,
            cancel_url: `${process.env.HOST}/chekout`,
            payment_intent_data: {
                metadata: {
                    email,
                    images: JSON.stringify(item.map(item => item.image))
                },
            },
        });
        return res.status(200).json({
            id: session.id,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: error.message,
        });
    }

}