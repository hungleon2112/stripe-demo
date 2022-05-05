# stripe-demo

I. Setup the project
Must have:
1 - PHP 7.3
2 - Composer
3 - Node
4 - Npm

Steps to build and run Backend (api)
1 - cd api folder
2 - run command: composer install
3 - copy .env.example to .env
4 - run command: php -S localhost:9000 -t public

Steps to build and run Storefront
1 - cd storefront folder
2 - run command: npm install
3 - copy .env.example to .env (make sure the port of API_URL and API_SERVER are the same with abive)
4 - run command: npm run dev

II. Main features of this project
1 - Show list of books
2 - Select one of the books then purchase it via Stripe
3 - After the transaction finish, the system will send an email and record the transaction (TODO)

III. Stripe's APIs using for this project:
1 - Stripe SDK for PHP
    a) - paymentIntents->create
    b) - paymentIntents->retrieve
2 - Stripe library for React
    a) - confirmCardPayment

IV. The docs I used for this project
1 - https://stripe.com/docs/api/payment_intents/retrieve?lang=php
2 - https://stripe.com/docs/stripe-js/react
3 - https://www.youtube.com/watch?v=IhvtIbfDZJI&ab_channel=StripeDevelopers

V. Challenges
1 - Amount must > 0.5$ but the input amount count as cents
2 - Didn't understand clearly how Elements wrapper works
