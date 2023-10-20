<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Basket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomerController extends Controller
{
    public function __construct() {
        $this->middleware(["auth:sanctum"]);
    }

    public function getBasket() {
        $products = Basket::select('quantity', 'baskets.id', 'p.name', 'p.asset', 'p.price')
            ->join('products as p', 'whichProduct', '=', 'p.id')
            ->where('whichUser', Auth::user()->id)
            ->get(); // all()->where('whichUser', '=', Auth::user()->id);

        return response($products);
    }

    public function removeBasket(int $id) {
        $basket = Basket::all()->where('whichUser', '=', Auth::user()->id)->find($id);
        $result = $basket->delete();
        return response($result);
    }

    public function updateBasket(int $id, Request $request) {
        $changedBasket = Basket::all()->find($id);
        $changedBasket->quantity = $request->quantity;
        $result = $changedBasket->save();
        return response($result);
    }
}
