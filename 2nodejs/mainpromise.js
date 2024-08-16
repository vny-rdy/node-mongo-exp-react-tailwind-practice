import { writeFile } from "fs";
import fs from "fs/promises";
let a = await fs.readFile("vny.txt");
let b=await fs.appendFile("vny.txt","\n\n\n\n\n\n\t\t\t\tvny is handsome")

console.log(a.toString())