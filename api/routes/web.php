<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api/v1/book'], function () use ($router) {
    $router->get('/',  ['uses' => 'BookController@index']);
});

$router->group(['prefix' => 'api/v1/stripe/payment-intent'], function () use ($router) {
    $router->post('/',  ['uses' => 'StripePaymentIntentController@store']);
});

$router->group(['prefix' => 'api/v1/transaction'], function () use ($router) {
    $router->post('/',  ['uses' => 'TransactionController@store']);
});
