<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatRoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       \DB::table('chat_rooms')->insert([
        'name' => 'General'
       ]);
       \DB::table('chat_rooms')->insert([
        'name' => 'Tech talk'
       ]);
    }
}
