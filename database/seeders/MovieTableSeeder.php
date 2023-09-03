<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movie = [
            [
                'name' => 'SpongeBob | Bisnis Terbaik Bikini Bottom Dalam 30 Menit! | Nickelodeon Bahasa',
                'slug' => 'spongebob-terbaik-bottom',
                'category' => 'Karton',
                'video_url' => 'https://youtu.be/Uosz-NS_t2k',
                'thumbnail' => 'https://asset-2.tstatic.net/jateng/foto/bank/images/spongebob-squarepants.jpg',
                'rating' => '8.0',
                'is_featured' => 1,
            ],
            [
                'name' => 'Doraemon Bahasa Indonesia Terjebak di Akuarium No Zoom',
                'slug' => 'doraemon-terjebak-no-zoom',
                'category' => 'Karton',
                'video_url' => 'https://youtu.be/osnlvYpA8m8',
                'thumbnail' => 'https://i.ytimg.com/vi/5dPAaWlL8T8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjkTQrJvM4Fz-mxJ4qHCqjJcDCww',
                'rating' => '7.5',
                'is_featured' => 0,
            ],
            [
                'name' => 'Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids',
                'slug' => 'tom-and-jerry-in-full-screen',
                'category' => 'Karton',
                'video_url' => 'https://youtu.be/t0Q2otsqC4I',
                'thumbnail' => 'https://i.ytimg.com/vi/FnBThWCy6u0/maxresdefault.jpg',
                'rating' => '9.0',
                'is_featured' => 0,
            ],
        ];

        Movie::insert($movie);
    }
}
