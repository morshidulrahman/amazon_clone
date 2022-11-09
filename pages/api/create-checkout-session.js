const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
    const { email, items } = req.body

    const transformedItem = items.map((item) => (
        {
            price_data: {
                currency: 'gbp',
                product_data: {
                    images: [item.image],
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            description: item.description,
            quantity: 1,
        }
    ))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: transformedItem,
        mode: 'payment',
        success_url: redirectURL + '?status=success',
        cancel_url: redirectURL + '?status=cancel',
        metadata: {
            images: JSON.stringify(items.map(item => item.image)),
        },
    });

    res.json({ id: session.id });
}