<?php

namespace App\Repositories;

class BookRepository 
{
    protected $books ;
    public function __construct(){
        //
        $this->books = [
            (object)[
                "url" => "aaaa",
                "id" => "cb9462ea-cb5c-11ec-9d64-0242ac120002",
                "image" => "/images/art-science-eng.jpg",
                "title" => "The Art of Doing Science and Engineering",
                "author" => "Richard Hamming",
                "price" => 23,
                "desc" => "The Art of Doing Science and Engineering is a reminder that a childlike capacity for learning and creativity are accessible to everyone."
            ],
            (object)[
                "url" => "bbbb",
                 "id" => "d41fe1f0-cb5c-11ec-9d64-0242ac120002",
                "image" => "/images/prince-of-persia.jpg",
                "title" => "The Making of Prince of Persia: Journals 1985-1993",
                "author" => "Jordan Mechner",
                "price" => 25,
                "desc" => "In The Making of Prince of Persia, on the 30th anniversary of the game’s release, Mechner looks back at the journals he kept from 1985 to 1993."
            ],
            (object)[
                "url" => "cccc",
                "id" => "d973cb1c-cb5c-11ec-9d64-0242ac120002",
                "image" => "/images/working-in-public.jpg",
                "title" => "Working in Public: The Making and Maintenance of Open Source",
                "author" => "Nadia Eghbal",
                "price" => 28,
                "desc" => "Nadia Eghbal takes an inside look at modern open source and offers a model through which to understand the challenges faced by online creators."
            ]
            ];
    }
    
    public function all(){
        //TODO: retrieve data from Model
       return $this->books;
    }

    public function retrieveBook($id){
        return collect($this->books)->where('id', $id)->first();
    }
}
