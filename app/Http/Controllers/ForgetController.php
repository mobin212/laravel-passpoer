<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
// use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ForgetRequest;
use DB;
use Illuminate\Support\Facades\Hash;
use Mail;
use App\Mail\ForgetMail;


class ForgetController extends Controller
{
    public function ForgetPassword(ForgetRequest $request){
        $email= $request->email;

        if(User::where('email',$email)->doesntExist()){
            return response([
                'message'=>'Email Invalid'
            ],400);
        }

        $token = rand(10,100000);

        try{
            DB::table('password_resets')->insert([
                'email'=> $email,
                'token'=>$token
            ]);
            Mail::to($email)->send(new ForgetMail($token));

            return response([
                'message'=> 'Reset Password Mail Send'
            ],200);

        }catch(Exception $exception){
            return response([
                'message'=> $exception->getMessage()
            ],400);
        }

        return response([
            'message'=> 'Invalid Email Or Password'
        ],401);
    }//end 
}
