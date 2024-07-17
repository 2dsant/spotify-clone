import { IArtista } from "../interfaces/iArtista";

export function newArtista(): IArtista {
    return {
        id: '',
        imagemUrl: '',
        nome: ''
    };
}