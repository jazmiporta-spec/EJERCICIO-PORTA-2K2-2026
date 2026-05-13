import CalculatorLexer from "./generated/CalculatorLexer.js"; 
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorListener } from "./CustomCalculatorListener.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from 'fs';

async function main() {
    let input;
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

    // 1. Procesamiento Inicial
    let inputStream = CharStreams.fromString(input);
    let lexer = new CalculatorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CalculatorParser(tokenStream);

    // 2. Generación de Tabla de Tokens (Criterio de evaluación)
    console.log("\n>>> TABLA DE LEXEMAS Y TOKENS <<<");
    console.log("-----------------------------------------");
    console.log("LEXEMA".padEnd(20) + " | " + "TOKEN");
    console.log("-----------------------------------------");

    tokenStream.fill();
    tokenStream.tokens.forEach(t => {
        const nombreToken = parser.symbolicNames[t.type] || t.type;
        if (t.type !== -1 && nombreToken !== 'WS') { 
            console.log(`${t.text.replace(/\n/g, '\\n').padEnd(20)} | ${nombreToken}`);
        }
    });
    console.log("-----------------------------------------\n");

    // 3. Análisis Sintáctico
    let tree = parser.program();
    
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("Entrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // 4. Ejecución Semántica (Visitor)
        console.log("\n>>> EJECUCIÓN SEMÁNTICA <<<");
        const visitor = new CustomCalculatorVisitor();
        visitor.visit(tree);   
    }
}
main();
