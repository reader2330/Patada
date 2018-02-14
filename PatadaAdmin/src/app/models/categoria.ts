export class Categoria {
    public id_categoria:number;
    public nombre_categoria:string;
    public status:number;


    constructor(id_categoria: number, nombre_categoria: string, status: number) {
        this.id_categoria = id_categoria;
        this.nombre_categoria = nombre_categoria;
        this.status = status;
    }
}
