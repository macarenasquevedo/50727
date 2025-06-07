# Analizador Sintáctico - 39569_8

## Cómo ejecutar

```bash
npm install
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -Xexact-output-dir -o generated grammar/SubC.g4
node index.js
```