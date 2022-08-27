<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgetController;
use App\Http\Controllers\ResetController;



// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Login Routes
Route::post('/login',[AuthController::class, 'Login']);

// Register Route
Route::post('/register',[AuthController::class, 'Register']);

// Forget Password
Route::post('/forgetpassword',[ForgetController::class, 'ForgetPassword']);

// Reset Password Route
Route::post('/resetpassword',[ResetController::class, 'ResetPassword']);


