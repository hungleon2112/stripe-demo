<?php

namespace App\Http\Resources\Book;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            "id" => $this->resource->id,
            "image" => $this->resource->image,
            "title" => $this->resource->title,
            "author" => $this->resource->author,
            "price" => $this->resource->price,
            "desc" => $this->resource->desc
        ];
    }
}
