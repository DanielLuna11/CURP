import { alumnos } from "../modules/user.model.js";

export const test = () => {
    console.log('llamando la funcion desde controlador')
}
alumnos.create(
    {
        name:'daniel',
        estado:'aguascalientes',
    }
)
