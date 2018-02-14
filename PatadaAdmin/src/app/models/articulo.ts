export class Articulo {

    public id_articulo: number;
    public titulo: string;
    public img: string;
    public alt: string;
    public url: string;
    public categoria_id: number;
    public descripcion:string;
    public status: number;


    constructor(id_articulo: number, titulo: string, img: string, alt: string, url: string, categoria_id: number, descripcion: string, status:number) {
        this.id_articulo = id_articulo;
        this.titulo = titulo;
        this.img = img;
        this.alt = alt;
        this.url = url;
        this.categoria_id = categoria_id;
        this.descripcion = descripcion;
        this.status = status;
    }
}
