export class Cancion {

    _id: number;
    _nombre: String;

    constructor(id: number = -1, nombre: String = '') {
        console.log('Cancion Constructor');
        this._id = id;
        this._nombre = nombre;
    }

    get id() {
        // console.log('getter id');
        return this._id;
    }

    set id(id: number) {
        // console.log('setter id');
        this._id = id;
    }

    get nombre() {
        // console.log('getter nombre');
        return this._nombre;
    }

    set nombre(nombre: String) {
        // console.log('setter nombre');
        this._nombre = nombre;
    }
}
