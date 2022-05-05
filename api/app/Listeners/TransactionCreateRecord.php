<?php

namespace App\Listeners;

use App\Events\TransactionEvent;
use Exception;

class TransactionCreateRecord
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\TransactionEvent  $event
     * @return void
     */
    public function handle(TransactionEvent $event)
    {
        try{
            //Insert Record to DB
        }
        catch(Exception $exception){
            report($exception);
            return $exception;
        }
    }
}
