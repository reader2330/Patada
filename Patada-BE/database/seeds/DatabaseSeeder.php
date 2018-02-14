<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call('CategoriaSeeder');
        $this->call('ArticuloSeeder');

        // $this->call(UsersTableSeeder::class);
    }
}
