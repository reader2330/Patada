<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $table ='categoria';

    protected $primaryKey= 'id_categoria';

    protected $fillable = array('nombre');

    protected $hidden = ['created_at','updated_at'];


}
