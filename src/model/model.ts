import {Provincias, LugaresTuristicos} from "../interfaces/interfaces"
import { pathFile } from "../database/index";
import jsonfile from "jsonfile";


const getAllInfo = (): Provincias[] => jsonfile.readFileSync(pathFile);

const leerDb = getAllInfo()
console.log(leerDb);
