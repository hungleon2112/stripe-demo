<?php

namespace App\Http\Requests\Stripe\PaymentIntent;

use App\Http\Requests\AbstractRequest;

class CreatePaymentIntentRequest extends AbstractRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'paymentMethodType' => 'required|string',
            'currency' => 'required|string',
            'amount' => 'required',
        ];
    }
}
