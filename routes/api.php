<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/login', [AuthController::class, 'login']); // Login Endpoint
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum'); // Logout Endpoint
Route::get('/getBasket', [CustomerController::class, 'getBasket'])->middleware('auth:sanctum'); // Getting Basket Endpoint
Route::delete('/deleteBasket/{id}', [CustomerController::class, 'removeBasket'])->middleware('auth:sanctum'); // Deleting a Basket Endpoint
Route::post('/updateBasket/{id}', [CustomerController::class, 'updateBasket'])->middleware('auth:sanctum'); // Updating a Basket Endpoint
