<?php

namespace App\Http\Controllers;

use App\Http\Requests\Book\BookRequest;
use App\Http\Resources\Book\BookResource;
use App\Services\BookService;

class BookController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        //
    }

    public function index(BookRequest $request, BookService $service){
        $result = $service->getAll($request->all());
        return BookResource::collection($result);
    }
    //
}
