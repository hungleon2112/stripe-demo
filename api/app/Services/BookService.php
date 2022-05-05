<?php


namespace App\Services;

use App\Repositories\BookRepository;

use Exception;

class BookService
{
    protected $repository;

    public function __construct(
        BookRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getAll($request){
        try{
            return $this->repository->all();
        }
        catch(Exception $exception){
            report($exception);
            return $exception;
        }
    }

    public function retrieveBook($id){
        try{
            return $this->repository->retrieveBook($id);
        }
        catch(Exception $exception){
            report($exception);
            return $exception;
        }
    }


}
