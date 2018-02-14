<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Articulo extends Model
{
    protected $table = 'articulo';

    protected $primaryKey = 'id_articulo';

    protected $fillable = array('titulo','img','alt','url','descripcion');

    protected $hidden = ['created_at','updated_at'];

}
