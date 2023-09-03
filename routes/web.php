<?php

use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionPlanController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function() {
    Route::get('/', [DashboardController::class, 'index'])->name('index');

    // Movie
    Route::get('movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show');

    // Subscription
    Route::get('subscription-plan', [SubscriptionPlanController::class, 'index'])->name('subscriptionPlan.index');
    Route::post('subscription-plan/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'userSubscribe'])->name('subscriptionPlan.userSubscribe');
});

Route::prefix('prototype')->name('prototype.')->group(function() {
    Route::get('/login', function() {
        return inertia('Prototype/Login');
    })->name('login');

    Route::get('/register', function() {
        return inertia('Prototype/Register');
    })->name('register');

    Route::get('/dashboard', function() {
        return inertia('Prototype/Dashboard');
    })->name('dashboard');

    Route::get('/subscriptionPlan', function() {
        return inertia('Prototype/SubscriptionPlan');
    })->name('subscriptionPlan');

    Route::get('/movie/{slug}', function() {
        return inertia('Prototype/Movie/Show');
    })->name('movie.show');
});

require __DIR__.'/auth.php';
