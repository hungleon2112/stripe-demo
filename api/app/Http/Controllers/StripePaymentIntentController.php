<?php

namespace App\Http\Controllers;

use App\Http\Requests\Stripe\PaymentIntent\CreatePaymentIntentRequest;
use App\Http\Resources\Stripe\PaymentIntent\StripePaymentIntentResource;
use App\Services\StripeService;

class StripePaymentIntentController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        //
    }

    public function store(CreatePaymentIntentRequest $request, StripeService $service){
        $result = $service->createPaymentIntent($request->all());
        return StripePaymentIntentResource::collection($result);
    }
    //
}
