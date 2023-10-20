<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $timestamps = false;


    public static $assets = [
        "/src/assets/img/cart/1.jpg",
        "/src/assets/img/cart/2.jpg",
        "/src/assets/img/cart/3.jpg"
    ];
}
