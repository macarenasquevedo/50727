const fs = require("fs");
const antlr4 = require("antlr4");

const SubCLexer = require("./generated/SubCLexer").SubCLexer;
const SubCParser = require("./generated/SubCParser").SubCParser;
const CustomVisitor = require("./CustomVisitor");

const input = fs.readFileSync("input.txt", "utf8");
const chars = new antlr4.InputStream(input);
const lexer = new SubCLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

console.log("\n=== Tokens ===");
tokens.getTokens().forEach(t => {
    const tipo = lexer.symbolicNames[t.type];
    console.log(`Línea ${t.line} - Token: ${tipo} - Texto: '${t.text}'`);
});

const parser = new SubCParser(tokens);
parser.buildParseTrees = true;
parser.removeErrorListeners();
parser.addErrorListener({
    syntaxError: (rec, sym, line, col, msg) => {
        console.error(`\n❌ Error de sintaxis en línea ${line}, columna ${col}: ${msg}`);
        process.exit(1);
    }
});

const tree = parser.programa();
console.log("\n=== Árbol sintáctico ===");
console.log(tree.toStringTree(parser.ruleNames));

const visitor = new CustomVisitor();
const result = visitor.visit(tree);
console.log("\n=== Resultado ===");
console.log(result);