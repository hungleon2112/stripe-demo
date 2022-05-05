<?php


namespace App\Services;

use App\Services\StripeService;
use App\Services\BookService;
use App\Events\TransactionEvent;
use Exception;

class TransactionService
{
    protected $stripeService;
    protected $bookService;

    public function __construct(
        StripeService $stripeService,
        BookService $bookService){
        $this->stripeService = $stripeService;
        $this->bookService = $bookService;
    }

    public function createTransaction($request){
        try{
            //Validate the paymentID
            $paymentIntents = $this->stripeService->retrievePaymentIntent($request["paymentId"]);
            if($paymentIntents){
                $book = $this->bookService->retrieveBook($request["bookId"]);
                if($paymentIntents->amount / 100 == $book->price){
                    //TODO: Send Email to user && Create record in Transaction table
                    event(new TransactionEvent($request));
                }
            }
        }
        catch(Exception $exception){
            report($exception);
            return $exception;
        }
    }

}
