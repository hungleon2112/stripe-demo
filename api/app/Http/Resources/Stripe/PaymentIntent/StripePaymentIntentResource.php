<?php

namespace App\Http\Resources\Stripe\PaymentIntent;

use Illuminate\Http\Resources\Json\JsonResource;

class StripePaymentIntentResource extends JsonResource
{
    public function toArray($request)
    {
        return $this->resource;
    }
}
