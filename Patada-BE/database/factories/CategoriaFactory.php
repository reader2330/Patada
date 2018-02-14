<?php

use Faker\Generator as Faker;

$factory->define(App\models\Categoria::class, function (Faker $faker) {
    return [
        'id_categoria' => $faker->unique()->numberBetween(0,3),
        'nombre' => $faker->unique()->text(20),
    ];
});
