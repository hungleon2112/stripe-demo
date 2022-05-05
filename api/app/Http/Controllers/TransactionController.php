<?php

namespace App\Http\Controllers;

use App\Http\Requests\Transaction\CreateTransactionRequest;
use App\Services\TransactionService;

class TransactionController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        //
    }

    public function store(CreateTransactionRequest $request, TransactionService $service){
        $result = $service->createTransaction($request->all());
        return response()->json($result, 200);
    }
    //
}
