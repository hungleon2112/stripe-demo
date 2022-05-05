
const path = require('path')

module.exports = {
    env: {
        API_URL: process.env.API_URL,
        API_SERVER: process.env.API_SERVER,
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
        STRIPE_PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}