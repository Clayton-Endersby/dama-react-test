<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Course;
use App\Models\Event;
use App\Models\JobPostings;
use App\Models\Member;
use App\Models\MembershipType;
use App\Http\Controllers\LoginController;

// Courses
Route::get('/all_courses', function () {
    return Course::all();
});

// Events
Route::get('/all_events', function () {
    return Event::all();
});

// Job Postings
Route::get('/all_jobs', function () {
    return JobPostings::all();
});

// Users
Route::get('/all_members', function () {
    return Member::all();
});

// Membership Types
Route::get('/all_membership_types', function () {
    return MembershipType::all();
});


// Login
Route::post('/signin', 'App\Http\Controllers\LoginController@postLogin');