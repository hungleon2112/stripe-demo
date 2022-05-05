<?php

namespace App\Events;

use Illuminate\Broadcasting\PrivateChannel;

class TransactionEvent extends Event
{
    public $data;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        //
        $this->data = $data;
    }

    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
