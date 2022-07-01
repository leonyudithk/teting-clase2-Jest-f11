import { isLoggedIn } from "../../components/01-Variables"
import { usuario } from "../../components/02-String"
import { getSaludo } from "../../components/03-funcion"
import { getUser } from "../../components/04-Objetos"
import { UsuarioRegistrado } from "../../components/05-ArrayObejeto"
import { getPromise } from "../../components/06-Promise"
import { getImagens } from "../../components/07-Api-Async-Await"
import { user } from "../../data/data"

describe('Realizar pruebas a toda la carpeta de Components', () => {


    //------------------01-Variable- Booleana----------------------------/
    test('validar que el login sea correcto', ()=>{
        ///Arreglar
        const isAutenticad = isLoggedIn

        //Actuar
        if(isAutenticad){
            console.log('Usuario Autenticado Bienvenido')
        }
        else{
            throw new Error('Usuario NO está Autenticado No es Bienvenido')
        }

    })

//---------------------02 -  String Usuario -------------------------------//
 test('Validar Usuario', ()=>{
        const validarUsuario= "Frontend 11"

        //Actuar
        expect(usuario).toBe(validarUsuario)

 })

 //----------------03 Funcion-----------------------------------//

test('Validar el saludo partiendo de un Nombre', ()=>{
        //arreglar la mesa de trabajo
        const nombre = "Yudith"
        const saludo = getSaludo(nombre)

        //actuar

        expect(saludo).toBe(`Hola ${nombre}, eres Bienvenido`)
        expect(saludo).not.toBe(`Hola ${nombre}, No eres Bienvenido`)
        expect(saludo).toContain(nombre)
        expect(saludo).toContain("Bienvenido")
        expect(saludo).not.toContain("Chao")
})

//------------- 04- Objetos--------------------------//
test("Obtener un objeto usuario", ()=>{
        expect(getUser()).toEqual({
            name: 'frontend-11',
            pass: 'f2022'
        })
})

//-------------------05 ArrayObjetos-------------------------------------//
test('Retornar un usuario a partir de un id', ()=>{
    const id= 3;
    //traer la informacion del componente de ArrayObjetos
    const traerUsuarioRegistrado = UsuarioRegistrado(id)
    console.log(traerUsuarioRegistrado)

    // traer la informacion de la prueba con quien la voya a comparar busco el id dentro de mi array de objetos llamado User data/data/user
    const userComparar = user.find( usuario => usuario.id === id)
    console.log(userComparar)

    // actuar o realizar la prueba
    expect(traerUsuarioRegistrado).toEqual(userComparar)
    expect(traerUsuarioRegistrado).toEqual(user[2])
})


test("validar cuando el id no existe", ()=>{
    const id=9;
    //traer la informacion del componente de ArrayObjetos
    const traerUsuarioRegistrado = UsuarioRegistrado(id)
    console.log(traerUsuarioRegistrado)
    expect(traerUsuarioRegistrado).toEqual(undefined)
})

//---------------Promesas -----------------------//
 test('Se cargue el usuario correctamente partiendo de Id', (done)=>{

    const id= 4
    
    const userComparar = user.find( usuario => usuario.id === id)
    console.log(userComparar)

    getPromise(id)
        .then(result=>{
            expect(result).toEqual(userComparar)
            done()
        })
 })


//---------------------07 Api Async y Await---------------------------/
test('verificar la url de la imagen', async ()=>{
    const url = await getImagens()
    console.log(url)

    expect(typeof url).toBe('string')
    expect(url.includes('https://')).not.toBe(false)
    expect(url.includes('https://')).toBe(true)

})

})
