export class Equipo {

    public id_equipo: number;
    public pos: number;
    public img_equipo: string;
    public nombre_equipo: string;
    public categoria_id: number;
    public PJ: number;
    public G: number;
    public E: number;
    public P: number;
    public GF: number;
    public GC: number;
    public DIF: number;
    public PTS: number;


    constructor(id: number, img: string, nombre: string, categoria: number) {
        this.id_equipo = id;
        this.img_equipo = img;
        this.nombre_equipo = nombre;
        this.categoria_id = categoria;
    }

    getData(): object {
        const result = {};
        Object.keys(this).map(key => result[key] = this[key]);
        return result;
    }

}
