<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticuloTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articulo', function (Blueprint $table) {
            $table->integer('id_articulo');
            $table->string('titulo',100);
            $table->string('img',255);
            $table->string('alt',120);
            $table->string('url',255);
            $table->integer('categoria_id');
            $table->foreign('categoria_id')->references('id_categoria')->on('categoria');
            $table->string('descripcion',255);
            $table->primary('id_articulo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articulo');
    }
}
