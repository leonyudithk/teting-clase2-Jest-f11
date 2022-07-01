import { user } from "../data/data"

export const UsuarioRegistrado = (id)=>{
    return user.find(usuario => usuario.id ===id)
}