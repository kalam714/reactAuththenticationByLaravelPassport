<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegRequest;
use App\Http\Requests\ResetRequest;
use App\Mail\ForgetMail;
use Exception;
use Illuminate\Http\Request;
use App\Models\User;

use Auth;
use Illuminate\Support\Facades\Hash;
use DB;
use Mail;

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
    public function register(RegRequest $request){
        try{

          

                $user=User::create([

                    'name'=>$request->name,
                    'email'=>$request->email,
                    'password'=>Hash::make($request->password)
                ]);
                $token=$user->createToken('app')->accessToken;
                return response([
                    'message' => 'Successfully Register',
                    'token'=>$token,
                    'user'=>$user

                ],200);

            
        }catch(Exception $exception){
            return response([
             'message'=>$exception->getMessage()

            ],400);

        }

    }
    public function forgetPassword(Request $request){
        $email=$request->email;
        if(User::where('email',$email)->doesntExist()){
            return response('Email does not exist in database');
        }
        $token=rand(10,10000);
        try{

            DB::table('password_resets')->insert([
                'email'=>$email,
                'token'=>$token

            ]);
            Mail::to($email)->send(new ForgetMail($token));
            return response([
                'message'=>'Rest code send check your email.'

            ]);

        }catch(Exception $exception){
            return response([
                'message'=>$exception->getMessage()

            ]);
        }
    }
    public function resetPassword(ResetRequest $request){
        $email=$request->email;
        $pin=$request->token;
        $password=Hash::make($request->password);
        $emailCheck=DB::table('password_resets')->where('email',$email)->first();
        $pinCheck=DB::table('password_resets')->where('token',$pin)->first();
        if(!$emailCheck){
            return response([
                'message'=>'Email not found'
            ]);

        }
        if(!$pinCheck){
            return response([
                'message'=>'Invalid Pin Number'
            ]);
        }

        DB::table('users')->where('email',$email)->update(['password' => $password]);
        DB::table('password_resets')->where('email',$email)->delete();
        return response([
            'message'=>'Password Updated!!!'
        ]);
    }
}
