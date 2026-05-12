import CalculatorLexer from "./generated/CalculatorLexer.js"; 
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorListener } from "./CustomCalculatorListener.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import fs from 'fs';

async function main() {
    let input;

// Tomamos el nombre del archivo de la terminal, o usamos 'input.txt' por defecto
const archivoArg = process.argv[2]; 
let archivoALeer = archivoArg || 'input.txt';

try {
    if (!fs.existsSync(archivoALeer)) {
        console.log(`Aviso: No se encontró "${archivoALeer}", probando con "correcto1.txt"...`);
        archivoALeer = 'correcto1.txt';
    }
    input = fs.readFileSync(archivoALeer, 'utf8');
    console.log(`--- Analizando archivo: ${archivoALeer} ---`);
} catch (err) {
    console.error("Error: No se encontró ningún archivo de prueba.");
    return;
}

    // Proceso la entrada
    let inputStream = CharStreams.fromString(input);
    let lexer = new CalculatorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CalculatorParser(tokenStream);
    let tree = parser.program();
    
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        const visitor = new CustomCalculatorVisitor();
        visitor.visit(tree);   
    }
}

main();
// Ejecuta la función principal
main();
