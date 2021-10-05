<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        try{

            if(Auth::attempt($request->only('email','password'))){

                $user=Auth::user();
                $token=$user->createToken('app')->accessToken;
                return response([
                    'message' => 'successfully login',
                    'token'=>$token,
                    'user'=>$user

                ],200);

            }
        }catch(Exception $exception){
            return response([
             'message'=>$exception->getMessage()

            ],400);

        }
        return response([
            'message'=>'Email or password does not match'

        ],401);
    }
}
