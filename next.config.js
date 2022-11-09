/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  env: {
    FIREBASE_API_KEY: "AIzaSyAfiHR5I2rcBr6rlfeOQp8rJzHlzDg8d2Q",
    FIREBASE_AUTH_DOMAIN: "fir-56958.firebaseapp.com",
    FIREBASE_PROJECT_ID: "fir-56958",
    FIREBASE_STORAGE_BUCKET: "fir-56958.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "45989334453",
    FIREBASE_APP_ID: "1:45989334453:web:7d74839c7699d177ee5dfc",

    // stripe api

    STRIPE_API_KEY: "pk_test_51M1YVBL6YvgZDvxuWiJT39NxnF7fG3kDudsD3gOxgUw6WmJusFHhvT4RHti88caAiBMIvOqptpW3smjH3c1mPlZ600PtOgXZj6",
    STRIPE_SECRET_KEY: "sk_test_51M1YVBL6YvgZDvxuq9jk0nXs3hBW47Kot8N0BBwxMSAKybEN6HmVRfzQ2MIbLykN6zjE8n7XhGEDpDYkKvOlV8Pf00PLYLARLV",

    //host

    HOST: "http://localhost:3000"
  }
}

module.exports = nextConfig
