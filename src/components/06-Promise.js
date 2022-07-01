import { UsuarioRegistrado } from "./05-ArrayObejeto"

export const getPromise = (id) =>{
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                const usuario = UsuarioRegistrado(id)
                        if(usuario){
                            resolve(usuario)
                        }
                        else{
                            reject(`No se encontro el usuario con el id = ${id}`)
                        }
            }, 2000)
        })

}