import { Provincia, LugarTuristico } from "../interfaces/interfaces";
import { pathFile } from "../database/index";
import jsonfile from "jsonfile";

const getAllInfo = (): Provincia[] => jsonfile.readFileSync(pathFile);

const leerDb = getAllInfo();
console.log(leerDb);

// Crear un método getCitiesBySurface(surface) -> el mismo recibirá la supercie como parametro y deberá devolver
// un array con todas las ciudades que posean mayor o igual superficie que la pasada por parametro. 
//Los elementos del array deben tener solo tres propiedades: "nombre", "superficie_km2" y "habitantes".
// [ { "nombre": "Buenos aires", "superficie_km2": 19283189, "habitantes": 12387192 }, { "nombre": "Santa Fe", "superficie_km2": 81289, "habitantes": 91919 } ]

const getCitiesBySurface = (surface: any) => {

}