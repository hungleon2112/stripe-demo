<?php

namespace App\Http\Requests\Transaction;

use App\Http\Requests\AbstractRequest;

class CreateTransactionRequest extends AbstractRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'bookId' => 'required|string',
            'paymentId' => 'required|string',
            'email' => 'required|string',
        ];
    }
}
