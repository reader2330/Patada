<?php

use Faker\Generator as Faker;

$factory->define(App\models\Articulo::class, function (Faker $faker) {
    return [
        'id_articulo' => $faker->unique()->numberBetween(0,30),
        'titulo' => $faker->unique()->text(99),
        'img' => $faker->imageUrl(),
        'alt' => $faker -> text(50),
        'url' => $faker -> url(),
        'categoria_id' => $faker->unique(true)->numberBetween(0,3),
        'descripcion' => $faker->text()
    ];
});
