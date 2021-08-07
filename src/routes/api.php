<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// 会員登録
Route::post('/register', 'Auth\RegisterController@register')->name('register');

// ログイン
Route::post('/login', 'Auth\LoginController@login')->name('login');

// ログアウト
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// ログインユーザー
Route::get('/user', fn() => Auth::user())->name('user');

Route::get('/users',function (Request $request) {
	
	$users = App\User::all();
	
	return response()->json(['users' => $users]);

});

Route::get('/users/{user}', function(App\User $user){

	return response()->json(['user' => $user]);

});

Route::delete('/users/{user}', function(App\User $user){

	$user->delete();

	return response()->json(['message' => 'delete successfully']);

});

Route::post('/users', function(Request $request){

	$user = App\User::create($request->user);

	return response()->json(['user' => $user]);

});