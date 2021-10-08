<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('/login',[AuthController::class,'login']);
Route::post('/register',[AuthController::class,'register']);
Route::post('/forgetPassword',[AuthController::class,'forgetPassword']);
Route::post('/resetpassword',[AuthController::class,'resetPassword']);
Route::get('/userData',[UserController::class,'userData'])->middleware('auth:api');
