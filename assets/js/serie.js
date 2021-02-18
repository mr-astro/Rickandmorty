import Personaje from './personaje.js'

export default class Serie extends Personaje {
    constructor(id, name, species, image, status, gender, origin, location, nombre, personajes) {
        super(id, name, species, image, status, gender, origin, location);

        let _nombre = nombre;
        let _personajes = personajes;

        this.getNombre = () => _nombre;
        this.setNombre = (new_nombre) => _nombre = new_nombre;

        this.getPersonajes = () => _personajes;
        this.setPersonajes = (new_personajes) => _personajes = new_personajes;
    }
    //Método que retorna nombre
    get nombre() {
        return this.getNombre();
    }

    set nombre(new_nombre) {
        this.setNombre(new_nombre);
    }

    get personajes() {
        return this.getPersonajes();
    }

    set personajes(new_personajes) {
        this.setPersonajes(new_personajes);
    }

    // agregar los personajes al arreglo "Character"

    agregarPersonajes(e, c) {
        c.push({ id: e.id, name: e.name, species: e.species, image: e.image });
        return c;
    }

    // agregar mas atruibutos del personaje
    cardPersonaje() {
        return `
        <div class="card">
            <img src="${this.image}" class="card-img-top" alt="${this.name}">
            <div class="card-body">
                <h3 class="card-body_nombre">${this.name}</h3>
                <p class="card-body_especie">Especie: ${this.species}</p>
            </div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#personajeModal-${this.id}">
                Ver Personaje
            </button>
        </div>        
        `
    }

    modalPersonaje() {
        return `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title font-weight-bold" id="exampleModalLabel">${this.name}</h2>
                    </div>
                    <div class="modal-body">
                        <ul class="text-left">
                            <li>Especie: ${this.species}</li>
                            <li>Genero: ${this.gender}</li>
                            <li>Origen: ${this.origin.name}</li>
                            <li>Locación: ${this.location.name}</li>
                            <li>Estado: ${this.status}</li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        `
    }
}