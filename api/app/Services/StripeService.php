<?php


namespace App\Services;

use Stripe\StripeClient;
use Illuminate\Support\Arr;
use Exception;

class StripeService
{
    protected $stripe;

    public function __construct(){
        $this->stripe = new StripeClient(env('STRIPE_SECRET_KEY'));
    }

    public function createPaymentIntent($request){
        try{
            $paymentIntents = $this->stripe->paymentIntents->create([
                'amount' => $request["amount"] * 100,
                'currency' => $request["currency"],
                'payment_method_types' => [
                    $request["paymentMethodType"],
                ]
            ]);
            
            return collect(["client_secret" => $paymentIntents->client_secret]);
        }
        catch(Exception $exception){
            report($exception);
            return $exception;
        }
    }

    public function retrievePaymentIntent($id){
        try{
            $paymentIntents = $this->stripe->paymentIntents->retrieve($id);
            return $paymentIntents;
        }
        catch(Exception $exception){
            report($exception);
            return $exception;
        }
    }

}
