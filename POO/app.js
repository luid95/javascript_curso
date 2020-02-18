class Pelicula{

    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){
        return `Reproduciendo pelicula ... ${this.nombre}`;
    }
}

class Serie extends Pelicula{
    constructor(nombre, id, cap){
        super(nombre, id);
        this.cap = cap;
    }

    reproducirCapitulo(){
        return `Reproduciendo el capitulo ${this.cap} de  la serie... ${this.nombre}`;
    }
}

var p1 = new Pelicula('Harry', 2);
var s2 = new Serie('Dexter', 3, 23);
console.log(p1.reproducir());

console.log(s2.reproducirCapitulo());
