let mensaje: string = "hola mundo"

mensaje = "chanchito feliz"

mensaje = "chao mundo"

console.log(mensaje)
console.log(typeof [])

/**
 * tipos de js
 * number
 * string
 * array
 * boolean
 * undefined
 * objetc
 * function
 * null
 * 
 * tipos de ts
 * any (NO USAR)
 * unknown
 * tuplas
 * enums
 * 
 * tipos inferidos
 * 
 */

let extioncionDinosaurios : number = 76_000_000
let dinosaurioFavorito: string = "Argentinosaurio"
let extintos = true

/*let mivariable
mivariable = "chanchito feliz"
mivariable = 42
*/

function chanchitoFeliz(config: any) {
    return config
}

let animales: string[] = ["chanchito", "feliz", "philip"]
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

//nums.map(x => x.) //el autocompletado (cntrl + space) sugiere datos de numeros
//1, name, edad, animal, animal[]

let tupla: [number, string[]] = [1, ["chanchito feliz", "chanchito philip"]]
tupla.push(12)

const chicha = "s"
const mediana = "m"
const grande = "l"
const extragrande = "xl"

// PascalCase (el comienzo de cada palabra es mayuscula y resto minuscula)

enum Talla {Chica = "s", Mediana = "m", Grande= "l", ExtraGrande = "xl"}

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState {Idle, Loading, Success, Error }

const estado = LoadingState.Success


type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number,
    nombre?: string,
    talla: Talla,
    direccion: Direccion
} 

const objeto: Persona = { 
    id: 1, 
    nombre: "hola mundo", 
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: "siempre viva",
        pais: "chanchitolandia"
    }
}

const arr: Persona[] = []




